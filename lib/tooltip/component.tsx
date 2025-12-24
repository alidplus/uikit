import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'div'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TooltipProps = TExternalVariants & Props;

export function Tooltip({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<TooltipProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Tooltip.displayName = 'Tooltip';
