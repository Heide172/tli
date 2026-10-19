import {useSuspenseQuery} from '@tanstack/react-query'
import {createFileRoute, notFound} from '@tanstack/react-router'

import {isPartId} from '#/lib/content'
import {partQueryOptions} from '#/queries/content'
import {ArticleView} from '#/components/article-view'
import {Calculator} from '#/components/calculator'
import {Toc} from '#/components/toc'

export const Route = createFileRoute('/$part')({
  params: {
    parse: ({part}) => {
      // oxlint-disable-next-line typescript/only-throw-error -- роутер ждёт объект notFound()
      if (!isPartId(part)) throw notFound()
      return {part}
    },
    stringify: ({part}) => ({part}),
  },
  loader: ({context, params}) =>
    context.queryClient.ensureQueryData(partQueryOptions(params.part)),
  component: PartPage,
})

function PartPage() {
  const {part} = Route.useParams()
  const {data} = useSuspenseQuery(partQueryOptions(part))
  return (
    <div className="mx-auto grid max-w-[1360px] gap-x-10 px-4 md:px-6 lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="pt-4 lg:pt-0">
        <Toc toc={data.toc} />
      </aside>
      <main className="min-w-0 pt-6 pb-16">
        <h1 className="mb-4 flex items-baseline gap-3.5 border-b-2 border-ember pb-2.5 font-head text-h2 font-semibold text-ink-head">
          <span className="text-[22px] text-ember">{data.num}</span>
          {data.title}
        </h1>
        <p className="mb-5 max-w-[720px] text-ink-dim">{data.lead}</p>
        {part === 'stats' ? <Calculator /> : undefined}
        {data.articles.map(article => (
          <ArticleView key={article.id} article={article} />
        ))}
        <section className="mt-10">
          <h2 className="mb-2 font-head text-h3 font-medium text-ink-head">
            Источники раздела
          </h2>
          <ul className="ml-5 list-disc text-sm">
            {data.sources.map(s => (
              <li key={s.url} className="mb-1">
                <a
                  href={s.url}
                  className="text-cold hover:underline"
                  rel="noreferrer"
                  target="_blank">
                  {s.title}
                </a>
                {s.note ? (
                  <span className="text-ink-dim"> · {s.note}</span>
                ) : undefined}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-ink-dim">
            Обновлено {data.updatedLabel}.
          </p>
        </section>
      </main>
    </div>
  )
}
