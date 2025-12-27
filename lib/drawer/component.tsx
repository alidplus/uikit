import cn from 'classnames';
import {
  useCallback,
  useState,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

interface Props extends ComponentProps<'aside'> {
  open?: boolean;
  logo?: ReactNode;
  menuItems?: MenuItem[][];
  searchBar?: ReactNode;
  userProfile?: ReactNode;
  showSearchOnMobile?: boolean;
  onMenuItemClick?: (itemId: string) => void;
  onSearchClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type DrawerProps = TExternalVariants & Props;

export function Drawer({
  size,
  className: extClassName,
  children,
  open = true,
  logo,
  menuItems = [],
  searchBar,
  userProfile,
  showSearchOnMobile = true,
  onMenuItemClick,
  onSearchClick,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search here...',
  ...restProps
}: PropsWithChildren<DrawerProps>) {
  // Track active menu item internally
  // Initialize with first item that has active: true, or first item if none are active
  const allItems = menuItems.flat();
  const initialActiveItem = allItems.find((item) => item.active) || allItems[0];
  const [activeItemId, setActiveItemId] = useState<string | null>(initialActiveItem?.id || null);

  const handleItemClick = useCallback(
    (item: MenuItem) => {
      setActiveItemId(item.id);
      if (item.onClick) {
        item.onClick();
      }
      if (onMenuItemClick) {
        onMenuItemClick(item.id);
      }
    },
    [onMenuItemClick],
  );

  const className = cn(
    css.root,
    variants({
      size: size,
    }),
    {
      [css.open]: open,
      [css.closed]: !open,
    },
    extClassName,
  );

  return (
    <aside className={className} {...restProps}>
      {children ? (
        children
      ) : (
        <>
          {/* Logo Section */}
          {/* Desktop: Show when open, always show when closed */}
          {/* Tablet/Mobile: Show when open, hide when closed */}
          {logo && <div className={css.logoSection}>{logo}</div>}

          {/* Search Bar - Mobile/Tablet when open, Tablet when closed (icon only) */}
          {showSearchOnMobile && (
            <div className={css.searchSection}>
              {searchBar ? (
                <div
                  onClick={onSearchClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSearchClick?.();
                    }
                  }}
                >
                  {searchBar}
                </div>
              ) : (
                <div className={css.searchWrapper}>
                  <button
                    type="button"
                    className={css.searchButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSearchClick?.();
                    }}
                    title="Search"
                  >
                    <span className={css.searchIcon} aria-hidden="true">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 21L16.65 16.65"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <input
                    type="text"
                    className={css.searchInput}
                    placeholder={searchPlaceholder}
                    value={searchValue || ''}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          )}

          {/* Menu Items - Show on tablet closed (icons only), hide on mobile closed */}
          {menuItems.map((group, groupIndex) => (
            <div key={groupIndex} className={css.menuGroup}>
              {groupIndex > 0 && <div className={css.divider} />}
              <div className={css.menuItems}>
                {group.map((item) => {
                  const isActive = activeItemId === item.id || item.active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={cn(css.menuItem, {
                        [css.active]: isActive,
                      })}
                      onClick={() => handleItemClick(item)}
                      title={!open ? item.label : undefined}
                    >
                      {item.icon && <span className={css.icon}>{item.icon}</span>}
                      {open && <span className={css.label}>{item.label}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* User Profile Section */}
          {/* Desktop: Never show */}
          {/* Tablet: Show when open (full), show when closed (profile picture + logout button only) */}
          {/* Mobile: Show when open only, hide when closed */}
          {userProfile && (
            <>
              <div className={css.divider} />
              <div
                className={cn(css.userSection, {
                  [css.desktopHidden]: true,
                  [css.tabletClosed]: !open,
                  [css.mobileHidden]: !open,
                })}
              >
                {userProfile}
              </div>
            </>
          )}
        </>
      )}
    </aside>
  );
}

Drawer.displayName = 'Drawer';
