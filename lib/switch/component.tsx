import cn from 'classnames';
import { type ComponentProps, type ReactNode, useId } from 'react';
import css from './styles.module.scss';
import { variants, type IVariants } from './cva';

interface Props extends Omit<ComponentProps<'input'>, 'size'> {
  label?: ReactNode;
  text?: ReactNode;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type SwitchProps = TExternalVariants & Props;

export function Switch({
  size,
  className: extClassName,
  label,
  text,
  id,
  ...restProps
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id || generatedId;
  const isChecked = restProps.checked ?? restProps.defaultChecked;
  const isDisabled = restProps.disabled;
  
  const switchClassName = cn(
    css.switch,
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
        <label htmlFor={switchId} className={css.label}>
          {label}
        </label>
      )}
      <div className={css.switchWrapper}>
        <input
          type="checkbox"
          role="switch"
          id={switchId}
          className={switchClassName}
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

Switch.displayName = 'Switch';
