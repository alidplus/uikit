import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<'input'>, 'size'>;

type TExternalVariants = Omit<IVariants, keyof Props>;

export type InputProps = TExternalVariants & Props;

export function Input({
  size,
  className: extClassName,
  ...restProps
}: InputProps) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <input className={className} {...restProps} />
  );
}

Input.displayName = 'Input';

