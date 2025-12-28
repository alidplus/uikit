import { ArrowDown } from '@solar-icons/react';
import cn from 'classnames';
import { useEffect, useId, useRef, useState, type ComponentProps, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface FilterOption {
  id: string;
  label: ReactNode;
  value?: string;
}

interface Props extends Omit<ComponentProps<'div'>, 'onChange' | 'onSelect' | 'title'> {
  title?: ReactNode;
  value?: string;
  defaultValue?: string;
  options: FilterOption[];
  onChange?: (value: string) => void;
  onSelect?: (option: FilterOption) => void;
  showTitle?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  controlled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type FilterProps = TExternalVariants & Props;

export function Filter({
  title = 'status',
  value: controlledValue,
  defaultValue,
  options,
  onChange,
  onSelect,
  showTitle = false,
  open: controlledOpen,
  defaultOpen = false,
  controlled = false,
  onOpenChange,
  className: extClassName,
  ...restProps
}: FilterProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.id || '');
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const generatedId = useId();
  const menuId = `filter-menu-${generatedId}`;
  const triggerId = `filter-trigger-${generatedId}`;
  const filterRef = useRef<HTMLDivElement>(null);

  const isControlled = controlled || controlledValue !== undefined;
  const value = isControlled ? (controlledValue ?? options[0]?.id) || '' : internalValue;

  const isOpenControlled = controlled || controlledOpen !== undefined;
  const open = isOpenControlled ? (controlledOpen ?? false) : internalOpen;

  const selectedOption =
    options.find((opt) => opt.id === value || opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
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
    const newOpen = !open;
    if (!isOpenControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleSelect = (option: FilterOption) => {
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

  return (
    <div className={className} ref={filterRef} {...restProps}>
      <div className={css.container}>
        {showTitle && title && (
          <button
            type="button"
            className={css.titleButton}
            aria-label={typeof title === 'string' ? title : 'Filter title'}
          >
            {title}
          </button>
        )}
        <button
          id={triggerId}
          type="button"
          className={cn(css.optionsButton, {
            [css.open]: open,
            [css.withTitle]: showTitle,
          })}
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={menuId}
        >
          <span className={css.optionsText}>{selectedOption?.label || 'All'}</span>
          <span className={css.arrowIcon} aria-hidden="true">
            <ArrowDown />
          </span>
        </button>
      </div>
      {open && (
        <div
          id={menuId}
          className={cn(css.menu, {
            [css.menuWithTitle]: showTitle,
          })}
          role="listbox"
          aria-labelledby={triggerId}
        >
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
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

Filter.displayName = 'Filter';
