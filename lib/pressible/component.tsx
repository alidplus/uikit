import cn from 'classnames';
import { type ComponentProps, type ElementType, type PropsWithChildren } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { Button } from '../buttons/component';

export type PressibleProps<T extends ElementType = typeof Button> = ISharedVariants & {
  /**
   * The component to render. Defaults to Button.
   *
   * @example
   * // Default Button
   * <Pressible>Click me</Pressible>
   *
   * @example
   * // With Next.js Link
   * import Link from 'next/link';
   * <Pressible as={Link} href="/about">About</Pressible>
   *
   * @example
   * // With React Router Link
   * import { Link } from 'react-router-dom';
   * <Pressible as={Link} to="/about">About</Pressible>
   *
   * @example
   * // With anchor tag
   * <Pressible as="a" href="/about">About</Pressible>
   */
  as?: T;
  className?: string;
} & ComponentProps<T>;

export function Pressible<T extends ElementType = typeof Button>({
  children,
  pad,
  level,
  border,
  rounded,
  as,
  className: extClassName,
  ...restProps
}: PropsWithChildren<PressibleProps<T>>) {
  const Component = (as ?? Button) as ElementType;
  const className = cn(sharedVariants({ level, border, rounded, pad }), extClassName);
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
}

Pressible.displayName = 'Pressible';
