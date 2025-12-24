import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import type { InputProps, IOptionValue } from '../types';
import { variants, type IVariants } from './cva';

interface Props<T extends IOptionValue> extends InputProps<T> {
  options: IOptionValue[];
}

export type DropdownProps<T extends IOptionValue> = Omit<IVariants, keyof Props<T>> &
  Omit<ComponentProps<'div'>, keyof InputProps<T>> &
  Props<T>;

export function Dropdown<T extends IOptionValue>({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<DropdownProps<T>>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}

Dropdown.displayName = 'Dropdown';
