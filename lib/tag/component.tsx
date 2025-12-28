import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

type Props = ComponentProps<'span'>;

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TagProps = TExternalVariants & Props;

export function Tag({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<TagProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

Tag.displayName = 'Tag';
