import {type FormEvent} from 'react'
import {Link, useNavigate} from '@tanstack/react-router'

import {Input} from '#/ui/input'

const NAV = [
  {part: 'stats', label: 'Статы'},
  {part: 'mechanics', label: 'Механики'},
  {part: 'farm', label: 'Фарм'},
  {part: 'craft', label: 'Крафт'},
] as const

export function Header({
  season,
  updatedLabel,
}: {
  season: string
  updatedLabel: string
}) {
  const navigate = useNavigate()

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('q')
    if (typeof q === 'string' && q.trim())
      void navigate({to: '/search', search: {q: q.trim()}})
  }

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-panel">
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 md:px-6">
        <Link
          to="/"
          className="flex items-baseline gap-2.5 text-ink-head hover:no-underline">
          <span className="font-head text-[22px] font-semibold tracking-wider text-ember">
            TLI
          </span>
          <span className="hidden text-sm text-ink-dim sm:inline">
            Torchlight Infinite · справочник
          </span>
        </Link>
        <nav className="flex gap-1 text-sm">
          {NAV.map(item => (
            <Link
              key={item.part}
              to="/$part"
              params={{part: item.part}}
              className="rounded-sm px-2 py-1 text-ink-dim hover:text-ink-head"
              activeProps={{className: 'bg-raised text-ink-head'}}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 text-xs lg:flex">
          <span className="rounded-sm border border-ember-dim px-2 py-0.5 font-head tracking-widest text-ember uppercase">
            {season}
          </span>
          <span className="text-ink-dim">обновлено {updatedLabel}</span>
        </div>
        <form
          onSubmit={onSubmit}
          className="basis-full md:ml-auto md:basis-[320px]"
          role="search">
          <Input
            name="q"
            type="search"
            placeholder="Поиск: броня, beacon, шок…"
            autoComplete="off"
          />
        </form>
      </div>
    </header>
  )
}
