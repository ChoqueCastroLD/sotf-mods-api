# Summarises sweep outputs: python3 summarize.py out1.jsonl [out2.jsonl ...]
# Prints the status histogram and every answer that is not 2xx/3xx/404/410 (the "unexpected" ones:
# 5xx, 4xx other than 404/410, connection errors). Expected 404s (unknown mods, users, junk URLs) are
# only counted.
import json,sys,collections
rows=[json.loads(l) for f in sys.argv[1:] for l in open(f)]
print('requests',len(rows))
print(dict(sorted(collections.Counter(r['status'] for r in rows).items())))
bad=[r for r in rows if r['status'] not in (200,204,301,302,303,304,307,308,404,410)]
print('unexpected',len(bad))
for r in bad: print(r['status'],r['path'],(r.get('snip') or '')[:70].replace('\n',' '))
