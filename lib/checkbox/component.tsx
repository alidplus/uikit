import { variants, type IVariants } from './cva';
import cn from 'classnames';
import { type ComponentProps, type ReactNode, useRef, useEffect, useId } from 'react';
import css from './styles.module.scss';
import { Unread } from '../icons/component';

interface Props extends Omit<ComponentProps<'input'>, 'size'> {
  label?: ReactNode;
  indeterminate?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type CheckboxProps = TExternalVariants & Props;

export function Checkbox({
  size,
  className: extClassName,
  label,
  indeterminate,
  id,
  ...restProps
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const isChecked = restProps.checked ?? restProps.defaultChecked;
  const isDisabled = restProps.disabled;
  
  useEffect(() => {
    if (checkboxRef.current && indeterminate !== undefined) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  
  const checkboxClassName = cn(
    css.checkbox,
    variants({
      size: size,
    }),
    {
      [css.checked]: isChecked && !indeterminate,
      [css.indeterminate]: indeterminate,
      [css.disabled]: isDisabled,
    },
  );
  
  const wrapperClassName = cn(
    css.root,
    extClassName,
  );

  return (
    <div className={wrapperClassName}>
      <div className={css.checkboxWrapper}>
        <input
          ref={checkboxRef}
          type="checkbox"
          id={checkboxId}
          className={checkboxClassName}
          {...restProps}
        />        
        {label && (
          <label htmlFor={checkboxId} className={css.label}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
}

Checkbox.displayName = 'Checkbox';

