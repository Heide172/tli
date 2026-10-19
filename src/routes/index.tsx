import {useSuspenseQuery} from '@tanstack/react-query'
import {createFileRoute, Link} from '@tanstack/react-router'

import {overviewQueryOptions} from '#/queries/content'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const {data} = useSuspenseQuery(overviewQueryOptions)
  return (
    <main className="mx-auto max-w-[1360px] px-4 py-8 md:px-6">
      <h1 className="mb-3 max-w-[760px] font-head text-h1 font-semibold text-ink-head">
        Torchlight Infinite: статы, механики эндгейма, фарм и крафт
      </h1>
      <p className="mb-8 max-w-[720px] text-ink-dim">
        Цифры взяты из официального внутриигрового справочника (Game Manual) в
        актуальной версии и его русской локализации. Фан-вики и гайды содержат
        данные старых сезонов, расхождения отмечены в тексте. Английские термины
        в скобках, чтобы искать по трейду и зарубежным гайдам.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {data.parts.map(part => (
          <Link
            key={part.id}
            to={part.href}
            className="group block rounded-md bg-panel p-4 shadow-panel hover:bg-raised hover:no-underline">
            <div className="mb-1 flex items-baseline gap-3">
              <span className="font-head text-lg text-ember">{part.num}</span>
              <span className="font-head text-h3 font-medium text-ink-head">
                {part.title}
              </span>
              <span className="ml-auto text-xs text-ink-dim">
                {part.articleCount} ст.
              </span>
            </div>
            <p className="mb-2 text-sm text-ink-dim">{part.lead}</p>
            <p className="text-xs text-ink-dim">
              {part.toc.map(t => t.title).join(' · ')}
              {part.articleCount > part.toc.length ? ' · …' : ''}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
