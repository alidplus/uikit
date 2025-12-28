import { CheckCircle, DangerCircle } from '@solar-icons/react';
import cn from 'classnames';
import { useId, type ComponentProps, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends Omit<ComponentProps<'input'>, 'size'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  suffix?: ReactNode;
  showLabel?: boolean;
  showHint?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type InputProps = TExternalVariants & Props;

export function Input({
  size,
  label,
  hint,
  error,
  iconStart,
  iconEnd,
  suffix,
  showLabel = true,
  showHint = true,
  className: extClassName,
  disabled,
  ...restProps
}: InputProps) {
  const generatedId = useId();
  const inputId = `input-${generatedId}`;
  const hintId = `input-hint-${generatedId}`;
  const hasError = !!error;
  const isDisabled = disabled;

  const inputClassName = cn(
    variants({
      size: size,
      error: hasError,
      disabled: isDisabled,
    }),
    extClassName,
  );

  const containerClassName = cn(css.inputContainer, {
    [css.error]: hasError,
    [css.disabled]: isDisabled,
    [css.small]: size === 'sm',
    [css.default]: size === 'default',
    [css.large]: size === 'lg',
  });

  const wrapperClassName = cn(css.wrapper);

  return (
    <div className={wrapperClassName}>
      {showLabel && label && (
        <label htmlFor={inputId} className={cn(css.label, { [css.labelDisabled]: isDisabled })}>
          {label}
        </label>
      )}
      <div className={css.inputWrapper}>
        <div className={containerClassName}>
          {iconStart && <span className={css.iconStart}>{iconStart}</span>}
          <input
            id={inputId}
            className={inputClassName}
            disabled={isDisabled}
            aria-describedby={hint || error ? hintId : undefined}
            aria-invalid={hasError}
            {...restProps}
          />
          {suffix && <span className={css.suffix}>{suffix}</span>}
          {iconEnd && <span className={css.iconEnd}>{iconEnd}</span>}
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

Input.displayName = 'Input';
