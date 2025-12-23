import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type SwitchProps = TExternalVariants & Props;

export function Switch({
  size,
  className: extClassName,
  ...restProps
}: SwitchProps) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <input type="checkbox" role="switch" className={className} {...restProps} />
  );
}

Switch.displayName = 'Switch';

