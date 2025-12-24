import { SolarProvider } from '@solar-icons/react';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'button'> {
  icStart?: ReactNode;
  icEnd?: ReactNode;
  iconOnly?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props | 'hasIconStart' | 'hasIconEnd'>;

export type ButtonProps = TExternalVariants & Props;

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
  iconOnly,
  ...btnProps
}: PropsWithChildren<ButtonProps>) {
  const hasIconStart = !!icStart && !iconOnly;
  const hasIconEnd = !!icEnd;

  const className = cn(
    variants({
      variant: variant,
      disabled: btnProps.disabled,
      size: size,
      outline: outline,
      block: block,
      loading: loading,
      hasIconStart: hasIconStart,
      hasIconEnd: hasIconEnd,
      iconOnly: iconOnly,
    }),
    extClassName,
  );

  const renderIcon = (icon: ReactNode | string) => {
    if (!icon) return null;

    // Support for React components or JSX
    return <SolarProvider value={{ size: 20 }}>{icon}</SolarProvider>;
  };

  return (
    <button className={className} {...btnProps}>
      {loading ? (
        <span className={css.loadingSpinner} role="status" aria-hidden="true" />
      ) : (
        renderIcon(icStart)
      )}
      {typeof children === 'string' ? <span>{children}</span> : children}
      {renderIcon(icEnd)}
    </button>
  );
}

Button.displayName = 'Button';
