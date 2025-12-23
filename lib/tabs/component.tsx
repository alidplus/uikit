import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';

interface Props extends ComponentProps<'div'> {
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TabsProps = TExternalVariants & Props;

export function Tabs({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<TabsProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName
    }),
  );
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Tabs.displayName = 'Tabs';

