"""Выгрузка легендарных предметов с tlidb.com.

Список берётся со страницы Legendary_Gear (живой или из сохранённого HTML через
--list-html), по каждому предмету открывается его страница: база, id, уровень
дропа, редкость, источники дропа, аффиксы обычной и корродированной версии.
Иконки складываются в public/img/legendary/<id>.webp.

    python3 -I scripts/fetch_legendary.py [--list-html path] [--limit N]
"""

import argparse
import html
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JSON = ROOT / 'src' / 'data' / 'legendary.json'
IMG_DIR = ROOT / 'public' / 'img' / 'legendary'
BASE = 'https://tlidb.com/en/'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/130 Safari/537.36'
DELAY = 0.4

TAG = re.compile(r'<[^>]+>')


def fetch(url: str, binary: bool = False):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    return data if binary else data.decode('utf-8', 'ignore')


def text(fragment: str) -> str:
    s = fragment.replace('<br/>', ' / ').replace('<br>', ' / ')
    s = TAG.sub('', s)
    s = html.unescape(s)
    return re.sub(r'\s+', ' ', s).strip()


def affix_lines(block: str) -> list[str]:
    # tierParent содержит <div>…</div> на каждый аффикс
    lines = re.findall(r'<div>(.*?)</div>(?=<div>|$)', block, re.S)
    return [t for t in (text(x) for x in lines) if t]


def tier_parents(page: str) -> list[list[str]]:
    out = []
    for m in re.finditer(r'<div class="tierParent">(.*?)</div></div>', page, re.S):
        out.append(affix_lines(m.group(1)))
    return out


def slot_from_image(url: str) -> tuple[str, str]:
    m = re.search(r'Icon_Equip_(\w+?)_(?:Epic|Legend|Rare)', url)
    if not m:
        if 'TalentSlate' in url:
            return 'slate', ''
        return 'other', ''
    kind = m.group(1)
    if kind == 'Weapon_Shield':
        return 'shield', ''
    if kind.startswith('Weapon_'):
        return 'weapon', kind.split('_', 1)[1]
    return kind.lower(), ''


def parse_list(page: str) -> list[dict]:
    blocks = re.findall(r'<div class="d-flex border-top rounded">(.*?)</div></div></div>', page, re.S)
    items = []
    for b in blocks:
        img = re.search(r'<img src="([^"]+)"', b)
        name = re.search(r'href="([^"]+)">([^<]+)</a><br/>', b)
        lv = re.search(r'Require lv (\d+)', b)
        if not (img and name):
            continue
        slot, weapon = slot_from_image(img.group(1))
        tp = re.search(r'<div class="tierParent">(.*?)</div></div>', b, re.S)
        items.append({
            'listAffixes': affix_lines(tp.group(1)) if tp else [],
            'slug': name.group(1),
            'name': html.unescape(name.group(2)),
            'image': img.group(1),
            'requireLevel': int(lv.group(1)) if lv else 0,
            'slot': slot,
            'weaponType': weapon,
        })
    return items


def parse_item(page: str) -> dict:
    info = {}
    for key, pat in {
        'base': r'<li>Base: <a[^>]*>([^<]+)</a>',
        'id': r'<li>id: (\d+)',
        'dropLevel': r'<li>drop level: (\d+)',
        'rarity': r'<li>rarity level: (?:<a[^>]*>)?([^<]+)',
    }.items():
        m = re.search(pat, page)
        info[key] = html.unescape(m.group(1)).strip() if m else ''
    drop = re.search(r'Drop Source</div>\s*<div class="card-body">(.*?)</div>', page, re.S)
    sources = []
    if drop:
        for li in re.findall(r'<li>(.*?)</li>', drop.group(1), re.S):
            t = text(li)
            if t:
                sources.append(t)
    parents = tier_parents(page)
    info['affixes'] = parents[0] if parents else []
    info['corrodedAffixes'] = parents[1] if len(parents) > 1 else []
    info['sources'] = sources
    return info


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--list-html', type=Path, help='сохранённая страница Legendary_Gear')
    ap.add_argument('--limit', type=int, default=0)
    ap.add_argument('--no-images', action='store_true')
    ap.add_argument('--only', help='через запятую slug-и, которые перевыгрузить и влить в существующий JSON')
    args = ap.parse_args()

    page = args.list_html.read_text('utf-8', 'ignore') if args.list_html else fetch(BASE + 'Legendary_Gear')
    items = parse_list(page)
    if not items:
        print('в списке нет предметов: сохраните страницу из браузера и передайте --list-html', file=sys.stderr)
        return 1
    if args.limit:
        items = items[: args.limit]
    only = set(args.only.split(',')) if args.only else set()
    if only:
        items = [it for it in items if it['slug'] in only]
    print(f'в списке {len(items)} предметов')

    IMG_DIR.mkdir(parents=True, exist_ok=True)
    result = []
    for n, it in enumerate(items, 1):
        try:
            detail = parse_item(fetch(BASE + it['slug']))
        except Exception as e:  # сеть; предмет пропускаем, но не роняем выгрузку
            print(f'{it["slug"]}: {e}', file=sys.stderr)
            detail = {'base': '', 'id': '', 'dropLevel': '', 'rarity': '', 'affixes': [], 'corrodedAffixes': [], 'sources': []}
        item_id = detail['id'] or it['slug']
        local = f'img/legendary/{item_id}.webp'
        if not args.no_images:
            target = IMG_DIR / f'{item_id}.webp'
            if not target.exists():
                try:
                    target.write_bytes(fetch(it['image'], binary=True))
                except Exception as e:
                    print(f'{it["slug"]} image: {e}', file=sys.stderr)
                    local = ''
        result.append({
            'id': item_id,
            'slug': it['slug'],
            'name': it['name'],
            'slot': it['slot'],
            'weaponType': it['weaponType'],
            'base': detail['base'],
            'requireLevel': it['requireLevel'],
            'dropLevel': int(detail['dropLevel']) if detail['dropLevel'] else 0,
            'rarity': detail['rarity'],
            'sources': detail['sources'],
            'affixes': detail['affixes'] or it['listAffixes'],
            'corrodedAffixes': detail['corrodedAffixes'],
            'image': local,
        })
        if n % 25 == 0:
            print(f'{n}/{len(items)}')
        time.sleep(DELAY)

    if only and OUT_JSON.exists():
        existing = json.loads(OUT_JSON.read_text('utf-8'))
        by_slug = {r['slug']: r for r in result}
        result = [by_slug.get(r['slug'], r) for r in existing]
    OUT_JSON.write_text(json.dumps(result, ensure_ascii=False, indent=1) + '\n', 'utf-8')
    print(f'записано {len(result)} предметов в {OUT_JSON.relative_to(ROOT)}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
