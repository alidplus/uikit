import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export type PaperProps = Omit<ISharedVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props>;

export function Paper({
  className: extClassName,
  children,
  pad,
  level,
  border,
  rounded,
  ...restProps
}: PropsWithChildren<PaperProps>) {
  const className = cn(sharedVariants({ level, border, rounded, pad }), extClassName);
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Paper.displayName = 'Paper';
