from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
from urllib.parse import parse_qs, urlparse
import tomllib
from pathlib import Path
from os import environ
from playwright.sync_api import sync_playwright, expect

headers = tomllib.loads(Path("netlify.toml").read_text())["headers"][0]["values"]
class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory="dist",**kwargs)
    def log_message(self,*args): pass
    def end_headers(self):
        for key, value in headers.items(): self.send_header(key,value)
        super().end_headers()
    def do_GET(self):
        resource = urlparse(self.path).path
        if resource != "/" and not Path("dist",resource.lstrip("/")).exists():
            if Path("dist",resource.lstrip("/")+".html").is_file(): self.path = resource+".html"
            else:
                self.send_response(404)
                self.send_header("Content-Type","text/html")
                self.end_headers()
                self.wfile.write(Path("dist/404.html").read_bytes())
                return
        super().do_GET()

server=ThreadingHTTPServer(("127.0.0.1",0),Handler)
Thread(target=server.serve_forever,daemon=True).start()
origin=f"http://127.0.0.1:{server.server_port}"
pages=sorted("/"+str(p.relative_to("dist")) for p in Path("dist").rglob("*.html"))
issues=[]
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=environ.get("CHROMIUM_PATH"))
    for width,height in [(320,700),(390,844),(844,390),(1440,900)]:
        page=browser.new_page(viewport={"width":width,"height":height},is_mobile=width<900,has_touch=width<900)
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.on("console",lambda msg: errors.append(msg.text) if msg.type=="error" and "Failed to load resource" not in msg.text else None)
        for path in pages:
            assert page.goto(origin+path).ok, path
            assert page.locator("h1").count()==1, path
            overflow=page.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
            if overflow>1: issues.append((width,path,"overflow",overflow))
            if page.locator('.site-header nav a').count():
                assert all(link.is_visible() for link in page.locator('.site-header nav a').all()), (width, path)
            if path=="/index.html":
                page.keyboard.press("Tab")
                if page.evaluate('document.activeElement.getAttribute("href")')!="#main": issues.append((width,path,"skip link not first"))
            if path=="/pricing.html":
                for item in page.locator("details").all():
                    item.locator("summary").click()
                    assert item.get_attribute("open") is not None
                    item.locator("summary").click()
                    assert item.get_attribute("open") is None
        assert page.goto(origin+"/no-such-page").status==404
        assert not errors, errors
        page.close()
    page=browser.new_page()
    page.goto(origin+"/contact.html")
    form=page.locator("#lead-form")
    captured=[]
    def receive(route):
        if route.request.method!="POST":
            route.continue_()
            return
        captured.append(parse_qs(route.request.post_data))
        route.fulfill(status=500 if len(captured)==1 else 200,body="local test")
    page.route(origin+"/",receive)
    submit=form.locator('[type="submit"]')
    submit.click()
    assert not captured
    for field,value in {"name":"Taylor","business":"Cedar Ridge Repair","location":"St. Albans, WV","email":"taylor@example.invalid","goal":"We repair small engines and need a business website with a quote form."}.items():
        form.locator(f'[name="{field}"]').fill(value)
    form.locator("select").select_option("new-website")
    form.locator("#insert-template").click()
    submit.click()
    assert not captured
    goal="We repair small engines and need a business website with a quote form."
    form.locator("textarea").fill(goal)
    submit.click()
    expect(form.locator("#form-status")).to_contain_text("Your draft is still here")
    expect(form.locator("textarea")).to_have_value(goal)
    submit.click()
    expect(form.locator("#form-status")).to_contain_text("message was submitted")
    expect(form.locator("textarea")).to_have_value("")
    assert len(captured)==2 and captured[0]==captured[1]
    assert captured[0]["category"]==["New informational website"]
    assert captured[0]["form-name"]==["website-inquiry"]
    assert "New informational website" in captured[0]["subject"][0]
    privacy_path = form.locator('a', has_text='Privacy policy').get_attribute('href')
    assert page.request.get(origin + privacy_path).ok
    print(f"{len(pages)} pages × 4 viewports; local inquiry validation, retry and payload passed.")
    print("Findings:", issues)
    if issues: raise SystemExit(1)
