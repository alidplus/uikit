import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'div'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type DrawerProps = TExternalVariants & Props;

export function Drawer({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<DrawerProps>) {
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

Drawer.displayName = 'Drawer';
