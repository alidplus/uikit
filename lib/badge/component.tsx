import cn from 'classnames';
import { type ComponentProps, type ComponentType, type PropsWithChildren } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { variants, type IVariants } from './cva';

interface Props {
  icon?: ComponentType;
}

export type BadgeProps = Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'span'>, keyof Props> &
  Props;

export function Badge({
  size,
  className: extClassName,
  children,
  icon: Icon,
  level,
  pad,
  border,
  rounded,
  ...restProps
}: PropsWithChildren<BadgeProps>) {
  const className = cn(
    sharedVariants({ level, border, rounded, pad }),
    variants({ size }),
    extClassName,
  );
  return (
    <span className={className} {...restProps}>
      {Icon && <Icon />}
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';
