import cn from 'classnames';
import { useId, useState, type ComponentProps, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
}

interface Props extends Omit<ComponentProps<'div'>, 'onChange'> {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  controlled?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type TabSwitchProps = TExternalVariants & Props;

export function TabSwitch({
  tabs,
  value: controlledValue,
  defaultValue,
  onChange,
  controlled = false,
  className: extClassName,
  ...restProps
}: TabSwitchProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || tabs[0]?.id || '');
  const generatedId = useId();
  const tabSwitchId = `tab-switch-${generatedId}`;

  const isControlled = controlled || controlledValue !== undefined;
  const value = isControlled ? (controlledValue ?? '') : internalValue;

  const handleTabClick = (tabId: string) => {
    if (!isControlled) {
      setInternalValue(tabId);
    }
    onChange?.(tabId);
  };

  const className = cn(variants(), extClassName);

  return (
    <div
      className={className}
      role="tablist"
      aria-label="Tab switch"
      id={tabSwitchId}
      {...restProps}
    >
      {tabs.map((tab) => {
        const isSelected = value === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`${tabSwitchId}-panel-${tab.id}`}
            id={`${tabSwitchId}-tab-${tab.id}`}
            className={cn(css.tab, {
              [css.selected]: isSelected,
            })}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.icon && (
              <span className={css.icon} aria-hidden="true">
                {tab.icon}
              </span>
            )}
            <span className={css.label}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

TabSwitch.displayName = 'TabSwitch';
