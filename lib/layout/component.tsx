import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import type { ISharedVariants } from '../@shared/cva';
import css from './styles.module.scss';

interface Props {
  withSidebar?: boolean;
}

export type DashboardLayoutProps = Omit<ISharedVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props> &
  Props;

export function DashboardLayout({
  className,
  children,
  ...restProps
}: PropsWithChildren<DashboardLayoutProps>) {
  return (
    <main className={cn(css.main, className)} {...restProps}>
      {children}
    </main>
  );
}

DashboardLayout.displayName = 'Layout';
