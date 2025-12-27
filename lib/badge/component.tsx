import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren, type ReactNode } from 'react';
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
        <span className={css.icon} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8L7 10L11 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      {variant === 'pending' && (
        <span className={css.icon} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 4V8L10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      {variant === 'failed' && (
        <span className={css.icon} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 5L11 11M11 5L5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
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
