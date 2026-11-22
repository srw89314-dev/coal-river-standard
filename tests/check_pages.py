"""Run with python tests/check_pages.py; no third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import posixpath

class Doc(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids, self.links = [], []
        self.h1 = self.forms = self.cards = self.current = 0
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'a':
            self.links.append(a.get('href', ''))
            self.current += a.get('aria-current') == 'page'
        self.h1 += tag == 'h1'
        self.forms += tag == 'form'
        self.cards += 'package-card' in a.get('class', '').split()

root = Path(__file__).resolve().parents[1] / 'dist'
docs = {p.name: Doc(p.read_text()) for p in root.glob('*.html')}
main_pages = ['index.html', 'services.html', 'pricing.html', 'work.html', 'about.html', 'contact.html']
for filename, doc in docs.items():
    assert doc.h1 == 1, (filename, 'expected one main heading')
    assert len(doc.ids) == len(set(doc.ids)), (filename, 'duplicate IDs')
    for href in doc.links:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        target = posixpath.normpath(url.path).lstrip('/') if url.path else (filename if href.startswith('#') else 'index.html')
        if target in ('', '.'):
            target = 'index.html'
        if target == 'privacy':
            target = 'privacy.html'
        assert (root / target).is_file(), (filename, href, 'missing page')
        if url.fragment:
            assert url.fragment in (docs[target].ids if target in docs else Doc((root / target).read_text()).ids), (filename, href, 'missing section')
    if filename in main_pages:
        assert doc.current == 1, (filename, 'expected one active nav item')
        source = (root / filename).read_text()
        assert 'noindex,nofollow' in source, (filename, 'private indexing notice missing')
        assert '$750' not in source and '$59/month' not in source, (filename, 'obsolete offer')
    assert doc.forms == (1 if filename == 'contact.html' else 0), (filename, 'form migration')
    print(filename, 'passed headings, links, anchors, and navigation')
assert docs['pricing.html'].cards == 6
assert (root / 'index.html').read_text().count('<section') == 2
contact = (root / 'contact.html').read_text()
assert 'name="website-inquiry"' in contact and 'data-netlify="true"' in contact
print('Passed: short homepage, six packages, private indexing, and single contact form.')
