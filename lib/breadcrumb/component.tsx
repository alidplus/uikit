import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'nav'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type BreadcrumbProps = TExternalVariants & Props;

export function Breadcrumb({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<BreadcrumbProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <nav className={className} {...restProps}>
      {children}
    </nav>
  );
}

Breadcrumb.displayName = 'Breadcrumb';
