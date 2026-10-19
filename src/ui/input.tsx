import {Input as BaseInput} from '@base-ui/react/input'

import {cx, type StyledProps} from '#/lib/cx'

export function Input({className, ...props}: StyledProps<typeof BaseInput>) {
  return (
    <BaseInput
      className={cx(
        'w-full rounded-sm border border-line-strong bg-bg px-2.5 py-1.5 text-sm text-ink',
        'placeholder:text-ink-dim focus:border-ember focus:outline-none',
        'data-[invalid]:border-danger',
        className,
      )}
      {...props}
    />
  )
}
