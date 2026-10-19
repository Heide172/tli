import {type Inline} from '#/lib/content'

export function InlineText({inline}: {inline: Inline}) {
  return inline.map((seg, i) =>
    seg.bold ? <b key={i}>{seg.text}</b> : <span key={i}>{seg.text}</span>,
  )
}
