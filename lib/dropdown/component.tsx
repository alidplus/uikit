import cn from 'classnames';
import { useEffect, useId, useRef, useState, type ComponentProps, type ReactNode } from 'react';
import { ArrowDown, InfoCircle } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface DropdownOption {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  value?: string;
}

interface Props extends Omit<ComponentProps<'div'>, 'onChange' | 'onSelect'> {
  label?: ReactNode;
  placeholder?: ReactNode;
  value?: string;
  defaultValue?: string;
  options: DropdownOption[];
  onChange?: (value: string) => void;
  onSelect?: (option: DropdownOption) => void;
  required?: boolean;
  hint?: ReactNode;
  showHint?: boolean;
  showLabel?: boolean;
  iconStart?: ReactNode;
  showIconStart?: boolean;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  controlled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type DropdownProps = TExternalVariants & Props;

export function Dropdown({
  label,
  placeholder = 'Placeholder',
  value: controlledValue,
  defaultValue,
  options,
  onChange,
  onSelect,
  required = false,
  hint,
  showHint = true,
  showLabel = true,
  iconStart,
  showIconStart = true,
  disabled = false,
  open: controlledOpen,
  defaultOpen = false,
  controlled = false,
  onOpenChange,
  className: extClassName,
  ...restProps
}: DropdownProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const generatedId = useId();
  const menuId = `dropdown-menu-${generatedId}`;
  const triggerId = `dropdown-trigger-${generatedId}`;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isControlled = controlled || controlledValue !== undefined;
  const value = isControlled ? (controlledValue ?? '') : internalValue;

  const isOpenControlled = controlled || controlledOpen !== undefined;
  const open = isOpenControlled ? (controlledOpen ?? false) : internalOpen;

  const selectedOption = options.find((opt) => opt.id === value || opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isOpenControlled) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, isOpenControlled, onOpenChange]);

  const handleToggle = () => {
    if (disabled) return;
    const newOpen = !open;
    if (!isOpenControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalValue(option.id);
    }
    onChange?.(option.id);
    onSelect?.(option);
    if (!isOpenControlled) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  };

  const className = cn(variants(), extClassName);
  const hasValue = !!selectedOption;
  const displayText = selectedOption ? selectedOption.label : placeholder;
  const isPlaceholder = !hasValue;

  return (
    <div className={className} ref={dropdownRef} {...restProps}>
      {showLabel && label && (
        <label htmlFor={triggerId} className={cn(css.label, { [css.labelDisabled]: disabled })}>
          {label}
          {required && <span className={css.required}>*</span>}
        </label>
      )}
      <div className={css.inputWrapper}>
        <button
          id={triggerId}
          type="button"
          className={cn(css.trigger, {
            [css.open]: open,
            [css.disabled]: disabled,
            [css.hasValue]: hasValue,
            [css.placeholder]: isPlaceholder,
          })}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={menuId}
        >
          {showIconStart && iconStart && (
            <span className={css.iconStart} aria-hidden="true">
              {iconStart}
            </span>
          )}
          {showIconStart && !iconStart && selectedOption?.icon && (
            <span className={css.iconStart} aria-hidden="true">
              {selectedOption.icon}
            </span>
          )}
          <span className={css.value}>
            {isPlaceholder ? (
              <>
                <span className={css.valueText}>{displayText}</span>
                <span className={css.placeholderText}>{placeholder}</span>
              </>
            ) : (
              <span className={css.valueText}>{displayText}</span>
            )}
          </span>
          <span className={css.iconEnd} aria-hidden="true">
            <ArrowDown />
          </span>
        </button>
        {open && !disabled && (
          <div
            id={menuId}
            className={css.menu}
            role="listbox"
            aria-labelledby={triggerId}
            ref={menuRef}
          >
            <div className={css.menuItems}>
              {options.map((option) => {
                const isSelected = value === option.id || value === option.value;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={cn(css.menuItem, {
                      [css.menuItemSelected]: isSelected,
                    })}
                    onClick={() => handleSelect(option)}
                  >
                    {option.icon && (
                      <span className={css.menuItemIcon} aria-hidden="true">
                        {option.icon}
                      </span>
                    )}
                    <span className={css.menuItemLabel}>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {showHint && hint && (
        <div className={css.hint}>
          <span className={css.hintIcon} aria-hidden="true">
            <InfoCircle />
          </span>
          <span className={cn(css.hintText, { [css.hintDisabled]: disabled })}>{hint}</span>
        </div>
      )}
    </div>
  );
}

Dropdown.displayName = 'Dropdown';
