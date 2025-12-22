import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';

interface Props extends ComponentProps<'span'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type IconProps = TExternalVariants & Props;

export function Icon({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<IconProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

Icon.displayName = 'Icon';
