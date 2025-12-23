import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'span'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type BadgeProps = TExternalVariants & Props;

export function Badge({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<BadgeProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';
