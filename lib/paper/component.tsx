import cn from 'classnames';
import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentProps,
  type PropsWithChildren,
} from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';

interface Props {
  asChild?: boolean;
}

export type PaperProps = Omit<ISharedVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props> &
  Props;

export function Paper({
  className: extClassName,
  children,
  pad,
  level,
  border,
  rounded,
  asChild,
  flex,
  variant,
  ...restProps
}: PropsWithChildren<PaperProps>) {
  const className = cn(
    sharedVariants({ level, border, rounded, pad, variant, flex }),
    extClassName,
  );
  return asChild ? (
    Children.map(children, (child) => {
      if (isValidElement<{ className: string }>(child)) {
        return cloneElement(child, {
          className,
          ...restProps,
        });
      }
    })
  ) : (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Paper.displayName = 'Paper';
