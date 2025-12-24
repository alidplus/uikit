import cn from 'classnames';
import { type ComponentProps, type ReactNode, useId } from 'react';
import css from './styles.module.scss';
import { variants, type IVariants } from './cva';

interface Props extends Omit<ComponentProps<'input'>, 'size'> {
  label?: ReactNode;
  text?: ReactNode;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type RadioProps = TExternalVariants & Props;

export function Radio({
  size,
  className: extClassName,
  label,
  text,
  id,
  ...restProps
}: RadioProps) {
  const generatedId = useId();
  const radioId = id || generatedId;
  const isChecked = restProps.checked ?? restProps.defaultChecked;
  const isDisabled = restProps.disabled;
  
  const radioClassName = cn(
    css.radio,
    variants({
      size: size,
    }),
    {
      [css.checked]: isChecked,
      [css.disabled]: isDisabled,
    },
    extClassName,
  );
  
  const wrapperClassName = cn(
    css.root,
    {
      [css.withLabel]: !!label,
    },
  );

  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={radioId} className={css.label}>
          {label}
        </label>
      )}
      <div className={css.radioWrapper}>
        <input
          type="radio"
          id={radioId}
          className={radioClassName}
          {...restProps}
        />
        {text && (
          <span className={css.text}>
            {text}
          </span>
        )}
      </div>
    </div>
  );
}

Radio.displayName = 'Radio';
