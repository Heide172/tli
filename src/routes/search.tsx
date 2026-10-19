import {useState} from 'react'
import {useDebounceValue} from '@siberiacancode/reactuse'
import {useQuery} from '@tanstack/react-query'
import {createFileRoute, Link, useNavigate} from '@tanstack/react-router'

import {searchQueryOptions} from '#/queries/content'
import {Input} from '#/ui/input'

type SearchParams = {q: string}

export const Route = createFileRoute('/search')({
  validateSearch: (raw: Record<string, unknown>): SearchParams => ({
    q: typeof raw.q === 'string' ? raw.q : '',
  }),
  component: SearchPage,
})

function SearchPage() {
  const {q} = Route.useSearch()
  const navigate = useNavigate()
  const [draft, setDraft] = useState(q)
  const debounced = useDebounceValue(draft, 200)
  if (debounced !== q)
    void navigate({to: '/search', search: {q: debounced}, replace: true})
  const {data} = useQuery(searchQueryOptions(debounced))

  return (
    <main className="mx-auto max-w-[900px] px-4 py-8 md:px-6">
      <h1 className="mb-4 font-head text-h2 font-semibold text-ink-head">
        Поиск
      </h1>
      <Input
        type="search"
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Минимум две буквы"
        autoFocus
        className="mb-6 max-w-[480px]"
      />
      {data === undefined ? (
        <p className="text-ink-dim">Ищу…</p>
      ) : data.hits.length === 0 ? (
        <p className="text-ink-dim">
          {data.term.length < 2
            ? 'Введите хотя бы две буквы.'
            : 'Ничего не нашлось.'}
        </p>
      ) : (
        <ul>
          {data.hits.map(hit => (
            <li
              key={hit.href}
              className="border-b border-line py-3 last:border-b-0">
              <div className="mb-0.5 text-xs text-ink-dim">{hit.partTitle}</div>
              <Link
                to="/$part"
                params={{part: hit.partId}}
                hash={hit.id}
                className="font-head text-lg text-ink-head hover:text-ember hover:no-underline">
                {hit.title}
              </Link>
              <p className="mt-1 text-sm text-ink-dim">{hit.excerpt}…</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
