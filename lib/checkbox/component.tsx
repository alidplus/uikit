import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type CheckboxProps = TExternalVariants & Props;

export function Checkbox({
  size,
  className: extClassName,
  ...restProps
}: CheckboxProps) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <input type="checkbox" className={className} {...restProps} />
  );
}

Checkbox.displayName = 'Checkbox';

