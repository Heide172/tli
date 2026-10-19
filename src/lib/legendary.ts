// Форма записи в src/data/legendary.json (выгрузка scripts/fetch_legendary.py).
export type LegendaryRecord = {
  id: string
  slug: string
  name: string
  slot: string
  weaponType: string
  base: string
  requireLevel: number
  dropLevel: number
  rarity: string
  sources: string[]
  affixes: string[]
  corrodedAffixes: string[]
  image: string
}

export const SLOT_LABELS: Record<string, string> = {
  weapon: 'Оружие',
  helmet: 'Шлем',
  armor: 'Нагрудник',
  gloves: 'Перчатки',
  shoes: 'Ботинки',
  shield: 'Щит',
  amulet: 'Амулет',
  ring: 'Кольцо',
  belt: 'Пояс',
  slate: 'Слейт',
  other: 'Прочее',
}

export const SLOT_ORDER = Object.keys(SLOT_LABELS)

export const WEAPON_LABELS: Record<string, string> = {
  '1HSword': 'Одноручный меч',
  '2HSword': 'Двуручный меч',
  '1HHammer': 'Одноручный молот',
  '2HHammer': 'Двуручный молот',
  '1HAxe': 'Одноручный топор',
  '1HMace': 'Одноручная булава',
  '2HMace': 'Двуручная булава',
  crossbow: 'Арбалет',
  Shotgun: 'Мушкет',
  '2HAxe': 'Двуручный топор',
  Claw: 'Коготь',
  Dagger: 'Кинжал',
  Wand: 'Жезл',
  Rod: 'Посох-род',
  Scepter: 'Скипетр',
  Cane: 'Трость',
  Pistol: 'Пистолет',
  Staff: 'Посох',
  TinStaff: 'Жестяной посох',
  Cudgel: 'Дубина',
  Bow: 'Лук',
  Crossbow: 'Арбалет',
  Musket: 'Мушкет',
  Cannon: 'Пушка',
  FireCannon: 'Огненная пушка',
}

export const RARITY_LABELS: Record<string, string> = {
  precious: 'Precious',
  matchless: 'Matchless',
  ultimate: 'Ultimate',
}

export function rarityKey(raw: string): keyof typeof RARITY_LABELS {
  const r = raw.toLowerCase()
  if (r.includes('ultimate')) return 'ultimate'
  if (r.includes('matchless')) return 'matchless'
  return 'precious'
}

// Группа источника дропа для фильтра: по ключевым словам из текста tlidb.
// Порядок важен: частные группы раньше общих («defeating … in» ловит и боссов механик).
const SOURCE_GROUPS: [string, RegExp][] = [
  ['Везде в Netherrealm', /everywhere in Netherrealm/i],
  ['Plane Watcher / Traveler', /watcher|traveler|realm lord|primeval core/i],
  [
    'Карта Netherrealm',
    /thunder wastes|summit of thunder|voidlands|glacial abyss|lava sea|hellfire chasm|rift of dimensions|steel forge/i,
  ],
  ['Blacksail', /void sea|blacksail|black sail|pirate/i],
  ['Cube', /cube|malice|desire|law bearer/i],
  [
    'Dark Surge / Tide Lord',
    /dark surge|keegan|tide ?lord|tidemaster|void rift/i,
  ],
  ['God of Might', /god of might|automaton|dwarf/i],
  ['God of War', /god of war/i],
  ['Goddess of Hunting', /hunting|safari/i],
  ['God of Machines', /machine|drone/i],
  ['Aeterna', /aeterna/i],
  ['Nightmare', /nightmare|dream/i],
  ['Folklores / Mistville', /mistville|folklore/i],
  ['Vorax', /vorax/i],
  ['Afterlight / Vigil', /afterlight|vigil/i],
  ['Tartarus', /caged beast|tartarus|warden/i],
  ['Outlaw', /outlaw|tower|carjack/i],
  ['Oasis / Sandlord', /oasis|sandlord|desert/i],
  ['Clockwork Ballet', /clockwork|ballet|doll/i],
  ['Lunaria', /lunar/i],
  ['Creation', /creation/i],
  ['Overrealm', /overrealm/i],
  ['Cage of Original Sin', /cage of original sin|deep space/i],
  ['Arcana', /arcana|tarot/i],
  ['Chest Mimic', /mimic|treasure chest/i],
  ['Great Void', /great void|queen of eternal sun|ordrak|rusted abyss/i],
  ['Supreme Showdown', /showdown/i],
  ['Path of the Brave', /brave/i],
  ['Босс кампании', /defeating .* in /i],
]

export function sourceGroup(source: string): string {
  for (const [label, re] of SOURCE_GROUPS) {
    if (re.test(source)) return label
  }
  return 'Другое'
}
