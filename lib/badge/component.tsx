import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren, type ReactNode } from 'react';
import { CheckCircle, DangerCircle, History } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'span'> {
  variant?: 'default' | 'brand' | 'completed' | 'pending' | 'failed';
  outline?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type BadgeProps = TExternalVariants & Props;

export function Badge({
  variant = 'default',
  outline = false,
  icon,
  children,
  className: extClassName,
  ...restProps
}: PropsWithChildren<BadgeProps>) {
  const className = cn(
    variants({
      variant: variant,
      outline: outline,
    }),
    extClassName,
  );

  // Default icon based on variant if icon is not explicitly provided (except for 'default' variant)
  // If icon is explicitly null, don't show default icon
  const shouldShowDefaultIcon = icon === undefined && variant !== 'default';
  const defaultIcon = shouldShowDefaultIcon && (
    <>
      {(variant === 'completed' || variant === 'brand') && (
        <CheckCircle className={css.icon} size={16} />
      )}
      {variant === 'pending' && <History className={css.icon} size={16} />}
      {variant === 'failed' && <DangerCircle className={css.icon} size={16} />}
    </>
  );

  const displayIcon = icon !== null ? icon || defaultIcon : null;
  const hasIcon = !!displayIcon;
  const hasText = !!children;

  return (
    <span
      className={cn(className, {
        [css.noIcon]: !hasIcon,
        [css.noText]: !hasText,
        [css.iconOnly]: hasIcon && !hasText,
        [css.textOnly]: !hasIcon && hasText,
      })}
      {...restProps}
    >
      {displayIcon}
      {children && <span className={css.text}>{children}</span>}
    </span>
  );
}

Badge.displayName = 'Badge';
