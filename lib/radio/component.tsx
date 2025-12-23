import cn from 'classnames';
import { type ComponentProps } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'input'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type RadioProps = TExternalVariants & Props;

export function Radio({ size, className: extClassName, ...restProps }: RadioProps) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return <input type="radio" className={className} {...restProps} />;
}

Radio.displayName = 'Radio';
