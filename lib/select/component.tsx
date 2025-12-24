import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends Omit<ComponentProps<'select'>, 'size'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type SelectProps = TExternalVariants & Props;

export function Select({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<SelectProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <select className={className} {...restProps}>
      {children}
    </select>
  );
}

Select.displayName = 'Select';
