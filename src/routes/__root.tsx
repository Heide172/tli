import {useSuspenseQuery, type QueryClient} from '@tanstack/react-query'
import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'

import {overviewQueryOptions} from '#/queries/content'
import {Header} from '#/components/header'

const SEASON = 'SS14 Tartarus'

export const Route = createRootRouteWithContext<{queryClient: QueryClient}>()({
  loader: ({context}) =>
    context.queryClient.ensureQueryData(overviewQueryOptions),
  component: RootLayout,
  notFoundComponent: () => (
    <main className="mx-auto max-w-[1360px] px-4 py-10">
      <h1 className="font-head text-h2 text-ink-head">Страница не найдена</h1>
    </main>
  ),
})

function RootLayout() {
  const {data} = useSuspenseQuery(overviewQueryOptions)
  return (
    <>
      <Header season={SEASON} updatedLabel={data.updatedLabel} />
      <Outlet />
      <footer className="mx-auto max-w-[1360px] px-4 py-8 text-xs text-ink-dim md:px-6">
        Код страницы:{' '}
        <a
          href="https://github.com/Heide172/tli"
          className="text-cold hover:underline">
          github.com/Heide172/tli
        </a>
        . Цифры из внутриигрового справочника, ошибки в них: откройте issue.
      </footer>
    </>
  )
}
