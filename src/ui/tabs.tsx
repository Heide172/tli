import {Tabs as BaseTabs} from '@base-ui/react/tabs'

import {cx, type StyledProps} from '#/lib/cx'

export const TabsRoot = BaseTabs.Root

export function TabsList({
  className,
  ...props
}: StyledProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cx('relative flex gap-1 border-b border-line', className)}
      {...props}
    />
  )
}

export function Tab({className, ...props}: StyledProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cx(
        'cursor-pointer px-3 py-1.5 font-head text-sm tracking-wide text-ink-dim uppercase',
        '-mb-px border-b-2 border-transparent hover:text-ink-head',
        'data-[active]:border-ember data-[active]:text-ink-head',
        'focus-visible:outline-2 focus-visible:outline-ember',
        className,
      )}
      {...props}
    />
  )
}

export function TabPanel({
  className,
  ...props
}: StyledProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cx('pt-3', className)} {...props} />
}
