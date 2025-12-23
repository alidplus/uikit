import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'div'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type ModalProps = TExternalVariants & Props;

export function Modal({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<ModalProps>) {
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

Modal.displayName = 'Modal';
