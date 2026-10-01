import json,sys,time,re,urllib.request,urllib.parse,http.client
from urllib.parse import quote
import os as _o
_D=_o.environ.get('SWEEP_DIR','/tmp/sweep')
BASE=sys.argv[1]; OUT=sys.argv[2]; SET=sys.argv[3] if len(sys.argv)>3 else 'all'
RATE=float(sys.argv[4]) if len(sys.argv)>4 else 5
LOC=['en','es','de','fr','it','nl','pl','pt','ru','sv','tr','zh','ja']
d=json.load(open(_D+'/data.json')); tx=json.load(open(_D+'/taxo.json'))
def pre(l): return '' if l=='en' else '/'+l
paths=[]
STATIC=['/','/about','/achievements','/brand','/builds','/categories','/compare','/content-policy','/cookies','/creators','/developers','/developers/errors','/dmca','/forgot-password','/install','/kits','/login','/mods','/news','/patch-radar','/privacy','/register','/requests','/requests/new','/reset-password','/search','/signals','/tags','/terms','/unsubscribe','/verify-email','/oauth/link','/basecamp','/basecamp/new/mod','/me','/me/backpack','/ranger','/settings','/best/mods','/best/libraries','/best/nope','/feed.xml','/news/feed.xml','/builds/feed.xml','/mods?page=2','/mods?page=1&type=Mod&showunapproved=false&orderby=newest','/mods?category=qol','/mods?search=kelvin','/mods?type=Build','/builds?page=2','/search?q=kelvin','/mods/','/loader','/upload','/upload-build','/nonexistent-page','/mods/nobody/nothing','/builds/nobody/nothing','/profile/nobody']
if SET in('all','static'):
    for p in STATIC:
        for l in LOC: paths.append(pre(l)+p if p!='/' else (pre(l) or '/'))
    for p in ['/robots.txt','/sitemap.xml','/sitemaps/static.xml','/sitemaps/mods.xml','/sitemaps/builds.xml','/sitemaps/categories.xml','/sitemaps/creators.xml','/sitemaps/news.xml','/sitemaps/best.xml','/llms.txt','/llms-full.txt','/healthz','/ads.txt','/.well-known/security.txt','/k','/oembed','/static/images/logo.png','/static/images/favicon.ico','/static/downloads/sotfmodsoneclick-setup1.0.0.exe','/images/abc','/images/abc/preview','/user/login','/user/register','/artifacts','/mods/upload','/@imaxel','/favicon.ico','/es/api/v2/mods','/en','/en/mods','/es/','/es/robots.txt']:
        paths.append(p)
    for c in tx['cats']:
        for l in ['en','es']: paths.append(pre(l)+'/categories/'+c)
    for t in tx['tags']:
        for l in ['en','es']: paths.append(pre(l)+'/tags/'+t)
if SET in('all','mods'):
    for m in d['v2']:
        cp=m['canonicalPath']; build=m['kind']=='build'
        for l in ['en','es']:
            paths.append(pre(l)+cp)
            paths.append(pre(l)+cp+'.md')
            if not build:
                for s in ['/versions','/reviews','/feed.xml']: paths.append(pre(l)+cp+s)
        alt=('/mods/' if build else '/builds/')+cp.split('/',2)[2]
        paths.append(alt)
        paths.append(cp+'.json')
        paths.append('/api/v2/mods/%d'%m['id'])
    # pending/unapproved
    paths+=['/mods/jakethewolf/nightvisionplus','/es/mods/jakethewolf/nightvisionplus','/mods/jakethewolf/nightvisionplus/versions','/es/mods/jakethewolf/nightvisionplus/versions','/mods/jakethewolf/nightvisionplus/reviews','/mods/jakethewolf/nightvisionplus/feed.xml','/mods/JakeTheWolf/NightVisionPlus','/builds/jakethewolf/nightvisionplus','/mods/jakethewolf/nightvisionplus/download/1.0.1','/mods/jakethewolf/nightvisionplus/download/9.9.9','/mods/nobody/nothing/download/1.0.0','/embed/mods/jakethewolf/nightvisionplus','/badges/mods/jakethewolf/nightvisionplus/downloads.svg','/mods/jakethewolf/nightvisionplus.json','/mods/jakethewolf/nightvisionplus.md']
if SET in('all','users'):
    for u in d['creators']:
        h=u['user']['handle']
        for l in ['en','es']:
            paths+= [pre(l)+'/profile/'+quote(h),pre(l)+'/profile/'+quote(h)+'.md',pre(l)+'/profile/'+quote(h)+'/feed.xml']
    paths+=['/profile/IMAXEL','/profile/imaxel/','/profile/Nobody%20X','/profile/%E0%A4%A','/profile/a%2Fb']
if SET in('all','extra'):
    vers=json.load(open(_D+'/versions.json')) if _o.path.exists(_D+'/versions.json') else {}
    for cp,vs in vers.items():
        build=cp.startswith('/builds')
        if build: continue
        for v in vs:
            for l in ['en','es']: paths.append(pre(l)+cp+'/versions/'+quote(v))
        if len(vs)>=2: paths.append(cp+'/versions/compare?from='+quote(vs[-1])+'&to='+quote(vs[0]))
        paths.append('/embed'+cp)
        paths.append('/badges'+cp+'/downloads.svg')
        paths.append('/badges'+cp+'/version.svg')
    odd=['/jams','/es/jams','/jams/nope','/es/jams/nope','/jams/Nope%20X','/kits/nobody/x','/es/kits/nobody/x','/requests/1','/requests/abc','/requests/999999','/requests?page=2','/patch-radar/1.0.3','/patch-radar/nope','/patch-radar/0','/news/welcome-to-v2','/news/nope','/es/news/welcome-to-v2','/news/welcome-to-v2.md',
      '/xx/mods','/EN/mods','/es-ES/mods','/pt-br/mods','/es//mods','/es/Mods','/ES/mods','/es/mods/','/mods//','/mods/%00','/mods/a%00b/c','/mods/../etc/passwd','/%2e%2e/mods','/mods?page=abc','/mods?page=-1','/mods?page=99999','/mods?page=1&type=nope','/mods?category=nope','/mods?orderby=nope','/mods?search=%E0%A4%A','/mods?limit=100000','/builds?page=99999','/search?q=','/search?q=%27%22%3C','/tags/nope','/categories/nope','/creators?page=99999','/best/nope',
      '/mods/Hacker/x','/mods/jakethewolf/','/mods/a/b/c','/mods/a/b/c/d/e','/mods/a/b/versions/1.0.0','/mods/a/b/versions/compare','/mods/a/b/reviews?page=2','/mods/a/b/download','/mods/a/b/download/','/mods/a/b/download/x%00y','/mods/a/b/download/%E0%A4%A',
      '/profile/','/profile','/@','/@nobody','/@imaxel','/@imaxel/x','/profile/imaxel/nope','/builds/nobody/nothing.md','/builds/nobody/nothing.json','/mods/nobody/nothing.md','/mods/nobody/nothing.json',
      '/ads.txt','/robots.txt','/.well-known/security.txt','/humans.txt','/favicon.svg','/favicon.ico','/apple-touch-icon.png','/manifest.webmanifest','/sw.js','/static/css/x.css','/static/js/x.js','/static/images/hd_thumbnail.png','/static/images/logo-big.png','/static/images/favicon.ico','/static/images/nope.png','/static/downloads/other.exe','/user/upload','/user/logout','/logout','/user/profile','/dashboard','/admin','/console','/api/mods','/api/v2/health','/uploads/x','/ranger/nope','/me/nope','/settings/nope','/basecamp/nope','/oauth/link?x=1','/verify-email?token=x','/reset-password?token=x','/unsubscribe?token=x','/k/nope','/k/','/oembed?url=','/oembed?url=https%3A%2F%2Fsotf-mods.com%2Fmods%2Fnobody%2Fnothing','/oembed?url=notaurl','/_internal/cache/invalidate','/_astro/nope.js','/indexnow.txt','/nope.txt']
    for p in odd: paths.append(p)
    for l in LOC:
        for p in ['/jams','/jams/nope','/kits','/kits/nobody/x','/requests','/requests/new','/patch-radar','/news/nope','/news/welcome-to-v2','/best/nope','/@imaxel','/profile/nobody','/builds/nobody/nothing']:
            paths.append(pre(l)+p)
if SET in('all','extra','nsfw'):
    # Mods the public catalogue hides (NSFW) but the legacy API lists: collect-legacy.py writes them.
    if _o.path.exists(_D+'/legacy_extra.json'):
        for cp in json.load(open(_D+'/legacy_extra.json')):
            for l in ['en','es']:
                for sfx in ['','.md','/versions','/reviews','/feed.xml']: paths.append(pre(l)+cp+sfx)
            paths+=['/embed'+cp,'/badges'+cp+'/downloads.svg',cp+'.json']
if SET=='sitemap':
    import xml.etree.ElementTree as ET
    def g(u):
        r=urllib.request.Request(u,headers={'user-agent':'sotf-route-audit/1 (read-only)'}); time.sleep(0.25)
        return urllib.request.urlopen(r,timeout=30).read()
    ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
    for sm in ET.fromstring(g('https://sotf-mods.com/sitemap.xml')).findall('s:sitemap/s:loc',ns):
        for u in ET.fromstring(g(sm.text)).findall('s:url/s:loc',ns):
            paths.append(re.sub(r'^https?://[^/]+','',u.text) or '/')
import os as _os
SKIP=_os.environ.get('SKIP')
DONE=set(open(_os.environ['DONE']).read().split('\n')) if _os.environ.get('DONE') else set()
seen=set(); uniq=[]
for p in paths:
    if p in seen: continue
    seen.add(p)
    if SKIP and re.search(SKIP,p): continue
    if p in DONE: continue
    uniq.append(p)
host=re.sub(r'^https?://','',BASE); https=BASE.startswith('https')
out=open(OUT,'w')
def fetch(p):
    C=http.client.HTTPSConnection if https else http.client.HTTPConnection
    c=C(host,timeout=60)
    t=time.time()
    try:
        c.request('GET',quote(p,safe="/?&=%:@+'()*,;~!$._-") if True else p,headers={'user-agent':'sotf-route-audit/1 (read-only)','accept':'text/html,*/*','accept-encoding':'identity'})
        r=c.getresponse(); body=r.read(300000)
        return r.status,r.getheader('location'),r.getheader('content-type'),len(body),body[:200].decode('utf8','replace') if r.status>=500 else ''
    except Exception as e: return 0,None,None,0,repr(e)
    finally: c.close()
import os,threading
from concurrent.futures import ThreadPoolExecutor
lock=threading.Lock()
def work(p):
    st,loc,ct,ln,snip=fetch(p)
    if st in (0,500,503) and os.environ.get('RETRY'):
        time.sleep(12); st,loc,ct,ln,snip=fetch(p)
    with lock:
        out.write(json.dumps({'path':p,'status':st,'location':loc,'ct':ct,'len':ln,'snip':snip})+'\n'); out.flush()
# At most RATE requests per second overall (submission is paced), WORKERS in flight (default 4).
with ThreadPoolExecutor(int(os.environ.get('WORKERS','4'))) as pool:
    todo=uniq[int(os.environ.get("START","0")):]
    for p in todo:
        pool.submit(work,p)
        time.sleep(1.0/RATE)
print('done',len(todo))
