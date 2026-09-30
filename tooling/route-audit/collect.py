import json,urllib.request,time
def get(u):
    time.sleep(0.25)
    r=urllib.request.Request(u,headers={'accept':'application/json','user-agent':'sotf-route-audit/1 (read-only)'})
    return json.load(urllib.request.urlopen(r,timeout=30))
B='https://sotf-mods.com'
v2=[];p=1
while True:
    d=get(f'{B}/api/v2/mods?pageSize=100&page={p}&type=all&sort=new')
    v2+=d['items']
    if p>=d['totalPages']:break
    p+=1
print('v2 mods',len(v2),d['total'])
legacy=get(f'{B}/api/mods?showunapproved=true&limit=1000&page=1&type=Both')['data']
print('legacy',len(legacy))
users=[];p=1
while True:
    d=get(f'{B}/api/v2/creators?pageSize=100&page={p}')
    users+=d['items']
    if p>=d['totalPages']:break
    p+=1
print('creators',len(users))
json.dump({'v2':v2,'legacy':legacy,'creators':users},open('data.json','w'))
