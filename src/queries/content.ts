import {queryOptions} from '@tanstack/react-query'
import dayjs from 'dayjs'

import {
  normalizeForSearch,
  PART_IDS,
  prepareArticle,
  type PartId,
  type PartSource,
} from '#/lib/content'

// Данные лежат в бандле отдельными чанками и подгружаются по требованию.
const loaders: Record<PartId, () => Promise<{part: PartSource}>> = {
  stats: () => import('#/data/stats'),
  mechanics: () => import('#/data/mechanics'),
  farm: () => import('#/data/farm'),
  craft: () => import('#/data/craft'),
}

async function loadPart(id: PartId) {
  const {part} = await loaders[id]()
  const articles = part.articles.map(a => prepareArticle(id, a))
  return {
    id: part.id,
    num: part.num,
    title: part.title,
    short: part.short,
    lead: part.lead,
    href: `/${part.id}`,
    updatedLabel: dayjs(part.updatedAt).format('D MMMM YYYY'),
    toc: articles.map(a => ({id: a.id, title: a.title, href: a.href})),
    articles,
    sources: part.sources,
  }
}

export type PreparedPart = Awaited<ReturnType<typeof loadPart>>

export function partQueryOptions(id: PartId) {
  return queryOptions({
    queryKey: ['part', id],
    queryFn: () => loadPart(id),
  })
}

async function loadOverview() {
  const parts = await Promise.all(PART_IDS.map(loadPart))
  const latest = parts
    .map(p => p.updatedLabel)
    .sort()
    .at(-1)
  return {
    parts: parts.map(p => ({
      id: p.id,
      num: p.num,
      title: p.title,
      short: p.short,
      lead: p.lead,
      href: p.href,
      articleCount: p.articles.length,
      toc: p.toc.slice(0, 6),
    })),
    updatedLabel: latest ?? '',
    sources: parts.flatMap(p =>
      p.sources.map(s => ({...s, partTitle: p.title})),
    ),
  }
}

export type Overview = Awaited<ReturnType<typeof loadOverview>>

export const overviewQueryOptions = queryOptions({
  queryKey: ['overview'],
  queryFn: loadOverview,
})

const MIN_QUERY = 2

async function search(q: string) {
  const term = normalizeForSearch(q.trim())
  if (term.length < MIN_QUERY) return {term, hits: []}
  const parts = await Promise.all(PART_IDS.map(loadPart))
  const hits = parts.flatMap(part =>
    part.articles
      .filter(a => a.searchText.includes(term))
      .map(a => ({
        partId: part.id,
        partTitle: part.title,
        id: a.id,
        title: a.title,
        href: a.href,
        excerpt: a.excerpt,
      })),
  )
  return {term, hits}
}

export type SearchResult = Awaited<ReturnType<typeof search>>

export function searchQueryOptions(q: string) {
  return queryOptions({
    queryKey: ['search', normalizeForSearch(q.trim())],
    queryFn: () => search(q),
  })
}
