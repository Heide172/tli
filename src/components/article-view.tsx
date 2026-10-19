import {type PreparedArticle, type PreparedBlock} from '#/lib/content'
import {cx} from '#/lib/cx'
import {InlineText} from '#/components/inline-text'

function Block({block}: {block: PreparedBlock}) {
  switch (block.kind) {
    case 'p':
      return (
        <p className="mb-2.5">
          <InlineText inline={block.inline} />
        </p>
      )
    case 'h4':
      return (
        <h4 className="mt-4 mb-1.5 font-semibold text-ink-head">
          {block.text}
        </h4>
      )
    case 'note':
      return (
        <p
          className={cx(
            'mb-3 rounded-r-sm border-l-[3px] px-3 py-2',
            block.tone === 'cold'
              ? 'border-cold bg-cold-bg'
              : 'border-ember bg-ember-bg',
          )}>
          <InlineText inline={block.inline} />
        </p>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          className={cx(
            'mb-2.5 ml-5',
            block.ordered ? 'list-decimal' : 'list-disc',
          )}>
          {block.items.map((item, i) => (
            <li key={i} className="mb-1">
              <InlineText inline={item} />
            </li>
          ))}
        </Tag>
      )
    }
    case 'formula':
      return (
        <pre className="mb-3 rounded-sm border border-line bg-raised px-3 py-2 font-mono text-sm whitespace-pre-wrap text-ink-head">
          {block.text}
        </pre>
      )
    case 'table':
      return (
        <div className="mb-3.5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    className="border-b border-line-strong px-2.5 py-1.5 text-left font-head text-xs font-medium tracking-wider whitespace-nowrap text-ink-dim uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="even:bg-panel">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={cx(
                        'border-b border-line px-2.5 py-1.5 align-top',
                        c === 0 && 'text-ink-head',
                        c === 0 && !block.wrapFirst && 'whitespace-nowrap',
                      )}>
                      <InlineText inline={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export function ArticleView({article}: {article: PreparedArticle}) {
  return (
    <article
      id={article.id}
      className="scroll-mt-20 border-b border-line py-1.5 pb-3.5 last:border-b-0">
      <h3 className="mt-5 mb-2 font-head text-h3 font-medium text-ink-head">
        {article.title}
      </h3>
      {article.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </article>
  )
}
