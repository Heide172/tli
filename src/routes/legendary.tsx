import {useState, type ReactNode} from 'react'
import {useDebounceValue} from '@siberiacancode/reactuse'
import {useSuspenseQuery} from '@tanstack/react-query'
import {
  createFileRoute,
  stripSearchParams,
  useNavigate,
} from '@tanstack/react-router'

import {cx} from '#/lib/cx'
import {
  filterLegendary,
  LEGENDARY_DEFAULT,
  legendaryQueryOptions,
  type LegendaryFilter,
} from '#/queries/legendary'
import {LegendaryCard} from '#/components/legendary-card'
import {Input} from '#/ui/input'

export const Route = createFileRoute('/legendary')({
  validateSearch: (raw: Record<string, unknown>): LegendaryFilter => ({
    q: typeof raw.q === 'string' ? raw.q : '',
    slot: typeof raw.slot === 'string' ? raw.slot : '',
    source: typeof raw.source === 'string' ? raw.source : '',
    rarity: typeof raw.rarity === 'string' ? raw.rarity : '',
  }),
  search: {middlewares: [stripSearchParams(LEGENDARY_DEFAULT)]},
  loader: ({context}) =>
    context.queryClient.ensureQueryData(legendaryQueryOptions),
  component: LegendaryPage,
})

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'cursor-pointer rounded-sm border px-2 py-0.5 text-xs whitespace-nowrap',
        active
          ? 'border-ember bg-ember-bg text-ink-head'
          : 'border-line text-ink-dim hover:text-ink-head',
      )}>
      {children}
    </button>
  )
}

function LegendaryPage() {
  const filter = Route.useSearch()
  const navigate = useNavigate()
  const {data} = useSuspenseQuery(legendaryQueryOptions)
  const [draft, setDraft] = useState(filter.q)
  const debounced = useDebounceValue(draft, 200)

  function set(patch: Partial<LegendaryFilter>) {
    void navigate({
      to: '/legendary',
      search: {...filter, ...patch},
      replace: true,
    })
  }
  if (debounced !== filter.q) set({q: debounced})

  const items = filterLegendary(data.items, {...filter, q: debounced})

  return (
    <main className="mx-auto max-w-[1360px] px-4 py-6 md:px-6">
      <h1 className="mb-2 flex items-baseline gap-3.5 border-b-2 border-ember pb-2.5 font-head text-h2 font-semibold text-ink-head">
        <span className="text-[22px] text-ember">5</span>
        Легендарные предметы
      </h1>
      <p className="mb-4 max-w-[760px] text-ink-dim">
        {data.total} предметов с tlidb: аффиксы обычной и корродированной
        версии, база, уровень и откуда падает. Precious падают везде, Matchless
        и Ultimate привязаны к механикам. Данные вики могут отставать от
        клиента.
      </p>

      <div className="mb-4 grid gap-3 lg:grid-cols-[320px_1fr]">
        <Input
          type="search"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Название, база, аффикс, источник"
        />
        <div className="flex flex-wrap gap-1.5">
          <Chip active={!filter.slot} onClick={() => set({slot: ''})}>
            Все слоты
          </Chip>
          {data.slots.map(s => (
            <Chip
              key={s.id}
              active={filter.slot === s.id}
              onClick={() => set({slot: s.id})}>
              {s.label} <span className="text-ink-dim">{s.count}</span>
            </Chip>
          ))}
        </div>
      </div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        <Chip active={!filter.rarity} onClick={() => set({rarity: ''})}>
          Любая редкость
        </Chip>
        {data.rarities.map(r => (
          <Chip
            key={r.id}
            active={filter.rarity === r.id}
            onClick={() => set({rarity: r.id})}>
            {r.label} <span className="text-ink-dim">{r.count}</span>
          </Chip>
        ))}
      </div>
      <div className="mb-5 flex flex-wrap gap-1.5">
        <Chip active={!filter.source} onClick={() => set({source: ''})}>
          Любой источник
        </Chip>
        {data.sources.map(s => (
          <Chip
            key={s.id}
            active={filter.source === s.id}
            onClick={() => set({source: s.id})}>
            {s.label} <span className="text-ink-dim">{s.count}</span>
          </Chip>
        ))}
      </div>

      <p className="mb-3 text-xs text-ink-dim">Показано {items.length}</p>
      {items.length === 0 ? (
        <p className="text-ink-dim">Ничего не нашлось.</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map(it => (
            <LegendaryCard key={it.id} item={it} />
          ))}
        </div>
      )}
      <p className="mt-8 text-xs text-ink-dim">
        Источник: tlidb.com (данные беты, фан-сайт). Иконки принадлежат XD.
      </p>
    </main>
  )
}
