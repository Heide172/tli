// Модель контента справочника. Исходные данные (src/data/*) пишутся в
// лёгкой разметке: `**жирный**` внутри строк. Query-функция превращает их в
// готовые для рендера структуры (см. prepare* ниже), компоненты ничего не парсят.

export const PART_IDS = ['stats', 'mechanics', 'farm', 'craft'] as const
export type PartId = (typeof PART_IDS)[number]

export function isPartId(value: string): value is PartId {
  return (PART_IDS as readonly string[]).includes(value)
}

export type Block =
  | {kind: 'p'; text: string}
  | {kind: 'h4'; text: string}
  | {kind: 'note'; text: string; tone?: 'ember' | 'cold'}
  | {kind: 'list'; items: string[]; ordered?: boolean}
  | {kind: 'table'; head: string[]; rows: string[][]; wrapFirst?: boolean}
  | {kind: 'formula'; text: string}

export type Article = {
  id: string
  title: string
  blocks: Block[]
}

export type Source = {
  title: string
  url: string
  note?: string
}

export type PartSource = {
  id: PartId
  num: number
  title: string
  short: string
  lead: string
  updatedAt: string
  articles: Article[]
  sources: Source[]
}

export type Inline = {text: string; bold: boolean}[]

export function parseInline(text: string): Inline {
  const out: Inline = []
  const re = /\*\*(.+?)\*\*/g
  let last = 0
  for (const m of text.matchAll(re)) {
    const idx = m.index
    if (idx > last) out.push({text: text.slice(last, idx), bold: false})
    out.push({text: m[1] ?? '', bold: true})
    last = idx + m[0].length
  }
  if (last < text.length) out.push({text: text.slice(last), bold: false})
  return out
}

export type PreparedBlock =
  | {kind: 'p'; inline: Inline}
  | {kind: 'h4'; text: string}
  | {kind: 'note'; inline: Inline; tone: 'ember' | 'cold'}
  | {kind: 'list'; items: Inline[]; ordered: boolean}
  | {kind: 'table'; head: string[]; rows: Inline[][]; wrapFirst: boolean}
  | {kind: 'formula'; text: string}

export function prepareBlock(block: Block): PreparedBlock {
  switch (block.kind) {
    case 'p':
      return {kind: 'p', inline: parseInline(block.text)}
    case 'h4':
      return block
    case 'note':
      return {
        kind: 'note',
        inline: parseInline(block.text),
        tone: block.tone ?? 'ember',
      }
    case 'list':
      return {
        kind: 'list',
        items: block.items.map(parseInline),
        ordered: block.ordered ?? false,
      }
    case 'table':
      return {
        kind: 'table',
        head: block.head,
        rows: block.rows.map(row => row.map(parseInline)),
        wrapFirst: block.wrapFirst ?? false,
      }
    case 'formula':
      return block
  }
}

export function normalizeForSearch(text: string): string {
  return text.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ')
}

function blockText(block: Block): string {
  switch (block.kind) {
    case 'p':
    case 'h4':
    case 'note':
    case 'formula':
      return block.text
    case 'list':
      return block.items.join(' ')
    case 'table':
      return [...block.head, ...block.rows.flat()].join(' ')
  }
}

export function prepareArticle(partId: PartId, article: Article) {
  const plain = [article.title, ...article.blocks.map(blockText)]
    .join(' ')
    .replace(/\*\*/g, '')
  return {
    id: article.id,
    title: article.title,
    href: `/${partId}#${article.id}`,
    blocks: article.blocks.map(prepareBlock),
    searchText: normalizeForSearch(plain),
    excerpt: plain.slice(0, 180),
  }
}

export type PreparedArticle = ReturnType<typeof prepareArticle>
