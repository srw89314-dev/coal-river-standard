"""CSP-safe fictional demo and gallery checks. Run: python tests/check_showroom.py"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

root = Path(__file__).resolve().parents[1] / "dist"
class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.links, self.styles, self.headings, self.inline_styles = [], [], 0, 0
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "a": self.links.append(a.get("href", ""))
        if tag == "link" and a.get("rel") == "stylesheet": self.styles.append(a.get("href", ""))
        if tag == "h1": self.headings += 1
        if "style" in a: self.inline_styles += 1

for name in ("automotive", "restaurant", "home-services"):
    path = root / "demos" / (name + ".html")
    source = path.read_text()
    doc = Page(source)
    assert doc.headings == 1, name
    assert "<style" not in source and doc.inline_styles == 0, (name, "CSP blocked inline CSS")
    assert name + ".css" in doc.styles, name
    assert (path.parent / (name + ".css")).is_file(), name
    assert "FICTIONAL PORTFOLIO DEMONSTRATION" in source, name
    assert "NO BOOKINGS OR PURCHASES" in source, name
    for link in doc.links + doc.styles:
        url = urlsplit(link)
        if url.scheme or url.netloc or link.startswith("#"): continue
        assert (path.parent / url.path).resolve().is_file(), (name, link)
    print(name, "demo: PASS")

gallery = (root / "work.html").read_text()
page = Page(gallery)
assert page.inline_styles == 0, "gallery has CSP-blocked inline CSS"
for name in ("automotive", "restaurant", "home-services"):
    assert "demos/" + name + ".html" in gallery, name
assert "fictional" in gallery.lower()
print("Gallery: PASS")
