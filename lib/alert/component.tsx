import {
  CheckCircle,
  CloseCircle,
  DangerTriangle,
  InfoCircle,
  SolarProvider,
} from '@solar-icons/react';
import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props {
  inline?: boolean;
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  title?: string;
  description?: string;
}

const defaultIcons: Record<NonNullable<Required<IVariants>['severity']>, React.ReactNode> = {
  info: <InfoCircle />,
  success: <CheckCircle />,
  warning: <DangerTriangle />,
  error: <CloseCircle />,
};

export type AlertProps = Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props> &
  Props;

export function Alert({
  size,
  severity,
  variant,
  className: extClassName,
  children,
  level,
  border,
  rounded,
  pad,
  inline,
  closable,
  onClose,
  icon,
  action,
  title,
  description,
  ...restProps
}: PropsWithChildren<AlertProps>) {
  const className = cn(
    sharedVariants({ level, border, rounded, pad, variant }),
    variants({
      size: size,
      severity: severity,
      class: extClassName,
    }),
    inline && css.inline,
  );

  // Determine which icon to show
  const displayIcon = icon !== undefined ? icon : severity && defaultIcons[severity];

  // Determine if we should show icon
  const showIcon = displayIcon !== null && displayIcon !== undefined;

  return (
    <div className={className} role="alert" {...restProps}>
      {showIcon && (
        <div className={css.icon}>
          <SolarProvider value={{ size: 35 }}>{displayIcon}</SolarProvider>
        </div>
      )}
      <div className={css.content}>
        {title && <div className={css.title}>{title}</div>}
        {description && <div className={css.description}>{description}</div>}
        {children && !title && !description && <div className={css.children}>{children}</div>}
      </div>
      {action && <div className={css.action}>{action}</div>}
      {closable && (
        <button type="button" className={css.close} onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
