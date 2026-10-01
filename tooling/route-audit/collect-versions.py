# Collects the version numbers of every public mod (read-only GETs, ~4 req/s) into $SWEEP_DIR/versions.json
# (needs data.json from collect.py). Used by sweep.py's `versions` set.
import json,urllib.request,time,os
D=os.environ.get('SWEEP_DIR','/tmp/sweep')
d=json.load(open(D+'/data.json'))
out={}
for m in d['v2']:
    time.sleep(0.25)
    r=urllib.request.Request('https://sotf-mods.com/api/v2/mods/%d/versions'%m['id'],headers={'accept':'application/json','user-agent':'sotf-route-audit/1 (read-only)'})
    try: out[m['canonicalPath']]=[v['version'] for v in json.load(urllib.request.urlopen(r,timeout=30))['items']]
    except Exception as e: out[m['canonicalPath']]=[]; print('ERR',m['canonicalPath'],e)
json.dump(out,open(D+'/versions.json','w'))
print('mods',len(out),'versions',sum(len(v) for v in out.values()))
