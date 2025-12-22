import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';

interface Props extends ComponentProps<'span'> {
}

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
      class: extClassName
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

Empty.displayName = 'Empty';
