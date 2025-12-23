import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps } from 'react';

interface Props extends ComponentProps<'textarea'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TextareaProps = TExternalVariants & Props;

export function Textarea({
  size,
  className: extClassName,
  ...restProps
}: TextareaProps) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <textarea className={className} {...restProps} />
  );
}

Textarea.displayName = 'Textarea';

