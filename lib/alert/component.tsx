'use client';
import cn from 'classnames';
import { type ComponentProps } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { CheckCircle, CloseCircle, DangerCircle, DangerTriangle, SolarProvider } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props {
  onClose?: () => void;
  icon?: React.ReactNode;
  message?: string;
  important?: true | string;
  cta?: string;
  ctaHref?: string;
  ctaTarget?: ComponentProps<'a'>['target'];
}

const defaultIcons: Record<NonNullable<Required<IVariants>['severity']>, React.ReactNode> = {
  info: <CheckCircle />,
  warn: <DangerTriangle />,
  error: <DangerCircle />,
  alert: <DangerCircle />,
};

export type AlertProps = Omit<ISharedVariants, keyof Props | 'variant'> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props> &
  Props;

export function Alert({
  severity,
  variant,
  className: extClassName,
  level,
  border,
  rounded,
  pad,
  onClose,
  icon,
  message,
  banner,
  important,
  cta,
  ctaHref,
  ctaTarget,
  ...restProps
}: AlertProps) {
  const className = cn(
    sharedVariants({ level, border, rounded, pad }),
    variants({
      severity,
      variant,
      banner,
      class: extClassName,
    }),
  );

  // Determine which icon to show
  const displayIcon = icon !== undefined ? icon : severity && defaultIcons[severity];

  // Determine if we should show icon
  const showIcon = displayIcon !== null && displayIcon !== undefined;

  return (
    <div className={className} role="alert" {...restProps}>
      {showIcon && (
        <div className={css.icon}>
          <SolarProvider value={{ size: 20 }}>{displayIcon}</SolarProvider>
        </div>
      )}
      <p className={css.content}>
        {important && (
          <strong className={css.title}>{important === true ? 'Important' : important}: </strong>
        )}
        {message && <span className={css.description}>{message}</span>}
        {cta ? (
          <a className={css.cta} href={ctaHref} target={ctaTarget}>
            {cta}
          </a>
        ) : null}
      </p>
      {onClose && (
        <button type="button" className={css.close} onClick={onClose} aria-label="Close alert">
          <CloseCircle weight="BoldDuotone" color="currentColor" size={16} />
        </button>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
