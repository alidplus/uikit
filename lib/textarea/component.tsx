import cn from 'classnames';
import { useId, type ComponentProps, type ReactNode } from 'react';
import { CheckCircle, DangerCircle } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends Omit<ComponentProps<'textarea'>, 'size'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  iconStart?: ReactNode;
  showLabel?: boolean;
  showHint?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TextareaProps = TExternalVariants & Props;

export function Textarea({
  size,
  label,
  hint,
  error,
  iconStart,
  showLabel = true,
  showHint = true,
  className: extClassName,
  disabled,
  ...restProps
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = `textarea-${generatedId}`;
  const hintId = `textarea-hint-${generatedId}`;
  const hasError = !!error;
  const isDisabled = disabled;

  const className = cn(
    variants({
      size: size,
      error: hasError,
      disabled: isDisabled,
    }),
    extClassName,
  );

  const wrapperClassName = cn(css.wrapper);

  return (
    <div className={wrapperClassName}>
      {showLabel && label && (
        <label htmlFor={textareaId} className={cn(css.label, { [css.labelDisabled]: isDisabled })}>
          {label}
        </label>
      )}
      <div className={css.inputWrapper}>
        <div
          className={cn(css.inputContainer, { [css.error]: hasError, [css.disabled]: isDisabled })}
        >
          {iconStart && <span className={css.iconStart}>{iconStart}</span>}
          <textarea
            id={textareaId}
            className={className}
            disabled={isDisabled}
            aria-describedby={hint || error ? hintId : undefined}
            aria-invalid={hasError}
            {...restProps}
          />
        </div>
        {showHint && (hint || error) && (
          <div className={css.hint} id={hintId}>
            <span className={css.hintIcon} aria-hidden="true">
              {hasError ? <DangerCircle /> : <CheckCircle />}
            </span>
            <span
              className={cn(css.hintText, {
                [css.hintError]: hasError,
                [css.hintDisabled]: isDisabled,
              })}
            >
              {error || hint}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

Textarea.displayName = 'Textarea';
