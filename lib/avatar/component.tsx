import cn from 'classnames';
import { type ComponentProps } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { variants, type IVariants } from './cva';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {
  // size
}

export type AvatarProps = Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'img'>, keyof Props>;

export function Avatar({
  size,
  className: extClassName,
  level,
  border,
  pad = 'none',
  rounded = 'full',
  ...restProps
}: AvatarProps) {
  const className = cn(
    variants({ size }),
    sharedVariants({ level, border, rounded, pad }),
    extClassName,
  );
  return <img className={className} {...restProps} />;
}

Avatar.displayName = 'Avatar';
