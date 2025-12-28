import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { variants, type IVariants } from './cva';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export type ContainerProps = Omit<ComponentProps<'div'>, keyof Props> &
  Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Props;

export function Container({
  fluid,
  className: extClassName,
  children,
  level,
  border,
  rounded,
  pad,
  flex,
  gap,
  ...restProps
}: PropsWithChildren<ContainerProps>) {
  const className = cn(
    sharedVariants({ level, border, rounded, pad, flex, gap }),
    variants({
      fluid,
      class: extClassName,
    }),
  );

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Container.displayName = 'Container';
