import {useState} from 'react'

import {cx} from '#/lib/cx'
import {type LegendaryItem} from '#/queries/legendary'

const RARITY_CLASS: Record<LegendaryItem['rarity'], string> = {
  precious: 'border-ember-dim text-ember',
  matchless: 'border-cold text-cold',
  ultimate: 'border-danger text-danger',
}

export function LegendaryCard({item}: {item: LegendaryItem}) {
  const [corroded, setCorroded] = useState(false)
  const affixes = corroded ? item.corrodedAffixes : item.affixes
  return (
    <article className="flex gap-3 rounded-md bg-panel p-3 shadow-panel">
      <div className="flex w-14 shrink-0 flex-col items-center gap-1">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            width={56}
            height={80}
            loading="lazy"
            className="h-20 w-14 object-contain"
          />
        ) : (
          <div className="h-20 w-14 rounded-sm bg-raised" />
        )}
        <span className="text-xs text-ink-dim">ур. {item.requireLevel}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <a
            href={item.tlidbUrl}
            target="_blank"
            rel="noreferrer"
            className="font-head text-lg text-ink-head hover:text-ember hover:no-underline">
            {item.name}
          </a>
          <span
            className={cx(
              'rounded-sm border px-1.5 font-head text-[11px] tracking-wider uppercase',
              RARITY_CLASS[item.rarity],
            )}>
            {item.rarityLabel}
          </span>
        </div>
        <p className="mb-1.5 text-xs text-ink-dim">
          {item.kind}
          {item.base ? ` · ${item.base}` : ''}
          {item.dropLevel ? ` · дроп с ур. ${item.dropLevel}` : ''}
        </p>
        <ul className="mb-2 text-sm">
          {affixes.map((a, i) => (
            <li key={i} className="border-l-2 border-line pl-2 text-ink">
              {a}
            </li>
          ))}
        </ul>
        {item.hasCorroded ? (
          <button
            type="button"
            onClick={() => setCorroded(v => !v)}
            className={cx(
              'mb-2 cursor-pointer rounded-sm border px-2 py-0.5 font-head text-xs tracking-wider uppercase',
              corroded
                ? 'border-ember bg-ember-bg text-ember'
                : 'border-line text-ink-dim hover:text-ink-head',
            )}>
            {corroded ? 'Corroded: вкл' : 'Показать Corroded'}
          </button>
        ) : undefined}
        <div className="text-xs">
          <span className="text-ink-dim">Как получить: </span>
          {item.sources.length
            ? item.sources.join('; ')
            : 'источник на tlidb не указан'}
        </div>
      </div>
    </article>
  )
}
