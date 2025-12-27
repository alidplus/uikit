import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends Omit<ComponentProps<'div'>, 'title'> {
  title: ReactNode;
  description: ReactNode;
  primaryButton?: {
    text: ReactNode;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: ReactNode;
    onClick?: () => void;
  };
  onClose?: () => void;
  showClose?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type FaqAlertProps = TExternalVariants & Props;

export function FaqAlert({
  title,
  description,
  primaryButton,
  secondaryButton,
  onClose,
  showClose = true,
  className: extClassName,
  ...restProps
}: PropsWithChildren<FaqAlertProps>) {
  const className = cn(variants(), extClassName);

  return (
    <div className={className} {...restProps}>
      {showClose && (
        <button type="button" className={css.closeButton} onClick={onClose} aria-label="Close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <div className={css.content}>
        <h6 className={css.title}>{title}</h6>
        <div className={css.description}>{description}</div>
        {(primaryButton || secondaryButton) && (
          <div className={css.buttons}>
            {primaryButton && (
              <button type="button" className={css.primaryButton} onClick={primaryButton.onClick}>
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <button
                type="button"
                className={css.secondaryButton}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

FaqAlert.displayName = 'FaqAlert';
