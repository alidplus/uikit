import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';

interface Props extends ComponentProps<'button'> {
  icStart?: string;
  icEnd?: string;
}

type TExternalVariants = Omit<IVariants, keyof Props | 'hasIconStart' | 'hasIconEnd'>;

export function Button({
  children,
  variant,
  size,
  loading,
  outline,
  className: extClassName,
  block,
  icStart,
  icEnd,
  ...btnProps
}: PropsWithChildren<ComponentProps<'button'> & TExternalVariants & Props>) {
  const className = cn(
    variants({
      variant: variant,
      disabled: btnProps.disabled,
      size: size,
      outline: outline,
      block: block,
      loading: loading,
    }),
    extClassName,
  );
  return (
    <button className={className} {...btnProps}>
      {loading ? (
        <span
          // as="span"
          // animation="border"
          // size="sm"
          // role="status"
          // aria-hidden="true"
          // className="me-2"
        />
      ) : icStart ? (
        <i className={`bi ${icStart} me-2`}></i>
      ) : null}
      {typeof children === 'string' ? <span>{children}</span> : children}
      {icEnd ? <i className={`bi ${icEnd} me-2`}></i> : null}
    </button>
  );
}

Button.displayName = 'Button';
