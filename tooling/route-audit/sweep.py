import json,sys,time,re,urllib.request,urllib.parse,http.client
from urllib.parse import quote
BASE=sys.argv[1]; OUT=sys.argv[2]; SET=sys.argv[3] if len(sys.argv)>3 else 'all'
RATE=float(sys.argv[4]) if len(sys.argv)>4 else 5
LOC=['en','es','de','fr','it','nl','pl','pt','ru','sv','tr','zh','ja']
d=json.load(open('/tmp/sweep/data.json')); tx=json.load(open('/tmp/sweep/taxo.json'))
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
n=0
import os
for p in uniq[int(os.environ.get("START","0")):]:
    st,loc,ct,ln,snip=fetch(p)
    if st in (0,500,503) and os.environ.get('RETRY'):
        time.sleep(12); st,loc,ct,ln,snip=fetch(p)
    out.write(json.dumps({'path':p,'status':st,'location':loc,'ct':ct,'len':ln,'snip':snip})+'\n'); out.flush()
    n+=1
    time.sleep(1.0/RATE)
print('done',n)
