import cn from 'classnames';
import { useMemo, useState, type ComponentProps } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props {
  // size
  name?: string;
}

export type AvatarProps = Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'img'>, keyof Props> &
  Props;

export function Avatar({
  size,
  className: extClassName,
  level,
  border,
  pad = 'none',
  name,
  rounded = 'rounded',
  ...restProps
}: AvatarProps) {
  const [error, setError] = useState(false);
  const className = cn(
    sharedVariants({ level, border, rounded, pad }),
    variants({ size }),
    extClassName,
  );

  const placeholder = useMemo(() => {
    return (name ?? '?')
      .split(' ')
      .slice(0, 2)
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  }, [name]);

  return restProps.src && !error ? (
    <img className={className} {...restProps} onError={() => setError(true)} />
  ) : (
    <div className={cn(css.placeholder, className)}>{placeholder}</div>
  );
}

Avatar.displayName = 'Avatar';
