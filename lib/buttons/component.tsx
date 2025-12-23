import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren, type ReactNode } from 'react';
import css from './styles.module.scss';

interface Props extends ComponentProps<'button'> {
  icStart?: ReactNode;
  icEnd?: ReactNode;
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
  ...btnProps
}: PropsWithChildren<ButtonProps>) {
  const hasIconStart = !!icStart;
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
    }),
    extClassName,
  );
  
  const renderIcon = (icon: ReactNode | string, position: 'start' | 'end') => {
    if (!icon) return null;
    
    const iconClassName = position === 'start' ? css.iconStart : css.iconEnd;
    
    if (typeof icon === 'string') {
      // Support for Bootstrap icons or other icon class strings
      return <i className={`bi ${icon} ${iconClassName}`} aria-hidden="true" />;
    }
    
    // Support for React components or JSX
    return <span className={iconClassName}>{icon}</span>;
  };
  
  return (
    <button className={className} {...btnProps}>
      {loading ? (
        <span
          className={css.loadingSpinner}
          role="status"
          aria-hidden="true"
        />
      ) : renderIcon(icStart, 'start')}
      {typeof children === 'string' ? <span>{children}</span> : children}
      {renderIcon(icEnd, 'end')}
    </button>
  );
}

Button.displayName = 'Button';
