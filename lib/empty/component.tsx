import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

type Props = ComponentProps<'div'>;

type TExternalVariants = Omit<IVariants, keyof Props>;

export type EmptyProps = TExternalVariants & Props;

export function Empty({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<EmptyProps>) {
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

Empty.displayName = 'Empty';
