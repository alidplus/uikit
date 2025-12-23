import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'nav'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type PaginationProps = TExternalVariants & Props;

export function Pagination({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<PaginationProps>) {
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

Pagination.displayName = 'Pagination';
