import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';

interface Props extends ComponentProps<'span'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type SpinnerProps = TExternalVariants & Props;

export function Spinner({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<SpinnerProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

Spinner.displayName = 'Spinner';
