import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'table'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TableProps = TExternalVariants & Props;

export function Table({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<TableProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <table className={className} {...restProps}>
      {children}
    </table>
  );
}

Table.displayName = 'Table';
