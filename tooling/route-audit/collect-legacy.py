# Lists the mods the legacy API shows but the v2 catalogue hides (NSFW) into $SWEEP_DIR/legacy_extra.json
# (needs data.json from collect.py). Read-only GETs, 2 req/s.
import json,urllib.request,time,os
D=os.environ.get('SWEEP_DIR','/tmp/sweep')
def get(u):
    time.sleep(0.5)
    r=urllib.request.Request(u,headers={'accept':'application/json','user-agent':'sotf-route-audit/1 (read-only)'})
    return json.load(urllib.request.urlopen(r,timeout=60))
v2={m['canonicalPath'] for m in json.load(open(D+'/data.json'))['v2']}
extra=[]
for nsfw in ('false','true'):
    for m in get(f'https://sotf-mods.com/api/mods?approved=true&nsfw={nsfw}&limit=1000&page=1&type=Both')['data']:
        cp='/%s/%s/%s'%('builds' if m['type']=='Build' else 'mods',m['user']['slug'],m['slug'])
        if cp not in v2 and cp not in extra: extra.append(cp)
json.dump(extra,open(D+'/legacy_extra.json','w'))
print(len(extra),extra)
