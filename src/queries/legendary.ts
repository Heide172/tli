import {queryOptions} from '@tanstack/react-query'

import {normalizeForSearch} from '#/lib/content'
import {
  RARITY_LABELS,
  rarityKey,
  SLOT_LABELS,
  SLOT_ORDER,
  sourceGroup,
  WEAPON_LABELS,
  type LegendaryRecord,
} from '#/lib/legendary'

function prepareItem(r: LegendaryRecord) {
  const rarity = rarityKey(r.rarity)
  const sourceGroups = [...new Set(r.sources.map(sourceGroup))]
  const kind =
    r.slot === 'weapon'
      ? (WEAPON_LABELS[r.weaponType] ?? r.weaponType)
      : (SLOT_LABELS[r.slot] ?? r.slot)
  const searchText = normalizeForSearch(
    [
      r.name,
      r.base,
      kind,
      ...r.sources,
      ...r.affixes,
      ...r.corrodedAffixes,
    ].join(' '),
  )
  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    tlidbUrl: `https://tlidb.com/en/${r.slug}`,
    slot: r.slot,
    kind,
    base: r.base,
    requireLevel: r.requireLevel,
    dropLevel: r.dropLevel,
    rarity,
    rarityLabel: RARITY_LABELS[rarity],
    sources: r.sources,
    sourceGroups,
    affixes: r.affixes,
    corrodedAffixes: r.corrodedAffixes,
    hasCorroded: r.corrodedAffixes.length > 0,
    image: r.image ? `/${r.image}` : '',
    searchText,
  }
}

export type LegendaryItem = ReturnType<typeof prepareItem>

async function loadLegendary() {
  const {default: records} = (await import('#/data/legendary.json')) as {
    default: LegendaryRecord[]
  }
  const items = records.map(prepareItem)
  const slotCounts = new Map<string, number>()
  const sourceCounts = new Map<string, number>()
  for (const it of items) {
    slotCounts.set(it.slot, (slotCounts.get(it.slot) ?? 0) + 1)
    for (const g of it.sourceGroups)
      sourceCounts.set(g, (sourceCounts.get(g) ?? 0) + 1)
  }
  return {
    items,
    total: items.length,
    slots: SLOT_ORDER.filter(s => slotCounts.has(s)).map(s => ({
      id: s,
      label: SLOT_LABELS[s] ?? s,
      count: slotCounts.get(s) ?? 0,
    })),
    sources: [...sourceCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([id, count]) => ({id, label: id, count})),
    rarities: (['precious', 'matchless', 'ultimate'] as const).map(id => ({
      id,
      label: RARITY_LABELS[id],
      count: items.filter(i => i.rarity === id).length,
    })),
  }
}

export type LegendaryCatalog = Awaited<ReturnType<typeof loadLegendary>>

export const legendaryQueryOptions = queryOptions({
  queryKey: ['legendary'],
  queryFn: loadLegendary,
})

export type LegendaryFilter = {
  q: string
  slot: string
  source: string
  rarity: string
}

export const LEGENDARY_DEFAULT: LegendaryFilter = {
  q: '',
  slot: '',
  source: '',
  rarity: '',
}

export function filterLegendary(items: LegendaryItem[], f: LegendaryFilter) {
  const term = normalizeForSearch(f.q.trim())
  return items.filter(
    it =>
      (!f.slot || it.slot === f.slot) &&
      (!f.rarity || it.rarity === f.rarity) &&
      (!f.source || it.sourceGroups.includes(f.source)) &&
      (!term || it.searchText.includes(term)),
  )
}

export async function searchLegendary(term: string) {
  const {items} = await loadLegendary()
  return items
    .filter(i => i.searchText.includes(term))
    .slice(0, 40)
    .map(i => ({
      kind: 'legendary' as const,
      id: i.id,
      title: i.name,
      href: `/legendary?q=${encodeURIComponent(i.name)}`,
      excerpt: [i.kind, i.rarityLabel, ...i.sources].join(' · ').slice(0, 180),
    }))
}
