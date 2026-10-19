import {Collapsible as BaseCollapsible} from '@base-ui/react/collapsible'

import {cx, type StyledProps} from '#/lib/cx'

export const CollapsibleRoot = BaseCollapsible.Root

export function CollapsibleTrigger({
  className,
  ...props
}: StyledProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cx(
        'flex w-full cursor-pointer items-center justify-between rounded-sm border border-line bg-panel px-3 py-2',
        'font-head text-sm tracking-wide text-ink-head uppercase',
        'focus-visible:outline-2 focus-visible:outline-ember',
        className,
      )}
      {...props}
    />
  )
}

export function CollapsiblePanel({
  className,
  ...props
}: StyledProps<typeof BaseCollapsible.Panel>) {
  return <BaseCollapsible.Panel className={cx('pt-2', className)} {...props} />
}
