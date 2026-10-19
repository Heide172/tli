import {useState} from 'react'
import {useMediaQuery, useWindowScroll} from '@siberiacancode/reactuse'

import {cx} from '#/lib/cx'
import {type PreparedPart} from '#/queries/content'
import {
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '#/ui/collapsible'

type TocProps = {toc: PreparedPart['toc']}

function activeId(toc: PreparedPart['toc'], scrollY: number) {
  let current: string | undefined
  for (const item of toc) {
    const el = document.getElementById(item.id)
    if (el && el.offsetTop <= scrollY + 90) current = item.id
  }
  return current
}

function TocLinks({toc, current}: TocProps & {current: string | undefined}) {
  return (
    <>
      {toc.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cx(
            'block border-l-2 py-0.5 pr-2 pl-3 text-sm hover:text-ink-head',
            current === item.id
              ? 'border-ember text-ink-head'
              : 'border-transparent text-ink-dim',
          )}>
          {item.title}
        </a>
      ))}
    </>
  )
}

export function Toc({toc}: TocProps) {
  const isWide = useMediaQuery('(min-width: 1024px)')
  const [current, setCurrent] = useState<string | undefined>(undefined)
  useWindowScroll(({y}) => {
    if (isWide) setCurrent(activeId(toc, y))
  })

  if (isWide) {
    return (
      <nav
        aria-label="Содержание"
        className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
        <TocLinks toc={toc} current={current} />
      </nav>
    )
  }
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger>
        Содержание раздела
        <span className="text-ink-dim">{toc.length}</span>
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <TocLinks toc={toc} current={undefined} />
      </CollapsiblePanel>
    </CollapsibleRoot>
  )
}
