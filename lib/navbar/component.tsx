import cn from 'classnames';
import { type ComponentProps, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface NavbarAction {
  id: string;
  label: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

export interface NavbarDropdown {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface Props extends ComponentProps<'nav'> {
  logo?: ReactNode;
  userAvatar?: ReactNode;
  actions?: NavbarAction[];
  dropdowns?: NavbarDropdown[];
  onSidebarToggle?: () => void;
  onNotificationClick?: () => void;
  onGlobeClick?: () => void;
  onThemeClick?: () => void;
  hasNotificationBadge?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type NavbarProps = TExternalVariants & Props;

export function Navbar({
  logo,
  userAvatar,
  actions = [],
  dropdowns = [],
  onSidebarToggle,
  onNotificationClick,
  onGlobeClick,
  onThemeClick,
  hasNotificationBadge = false,
  className: extClassName,
  ...restProps
}: NavbarProps) {
  const className = cn(variants(), extClassName);

  return (
    <nav className={className} {...restProps}>
      <div className={css.container}>
        {/* Left Section - Sidebar Toggle */}
        <button
          type="button"
          className={css.sidebarButton}
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
        >
          <span className={css.sidebarIcon} aria-hidden="true">
            {/* Desktop: Sidebar icon */}
            <svg
              className={css.desktopIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="11.25" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="16.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
            {/* Tablet/Mobile: Hamburger menu */}
            <svg
              className={css.mobileIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="11.25" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="16.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </span>
        </button>

        {/* Tablet/Mobile: Logo */}
        <div className={css.logoSection}>{logo}</div>

        {/* Desktop: Right Section - All actions, dropdowns, avatar, and icons */}
        <div className={css.desktopRightSection}>
          {/* Actions and Dropdowns */}
          <div className={css.desktopActions}>
            {actions.map((action) => (
              <button
                key={action.id}
                type="button"
                className={cn(css.actionButton, {
                  [css.actionPrimary]: action.variant === 'primary',
                  [css.actionSecondary]: action.variant === 'secondary' || !action.variant,
                  [css.actionTertiary]: action.variant === 'tertiary',
                })}
                onClick={action.onClick}
              >
                <span className={css.actionLabel}>{action.label}</span>
                {action.icon && <span className={css.actionIcon}>{action.icon}</span>}
              </button>
            ))}
            {dropdowns.map((dropdown) => (
              <button
                key={dropdown.id}
                type="button"
                className={css.dropdownButton}
                onClick={dropdown.onClick}
              >
                <span className={css.dropdownLabel}>{dropdown.label}</span>
                <span className={css.dropdownIcon} aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          {/* User Avatar */}
          {userAvatar && <div className={css.userAvatarSection}>{userAvatar}</div>}

          {/* Icons */}
          <div className={css.iconsSection}>
            {/* Notification Icon */}
            <button
              type="button"
              className={css.iconButton}
              onClick={onNotificationClick}
              aria-label="Notifications"
            >
              <span className={css.icon} aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {hasNotificationBadge && (
                <span className={css.notificationBadge} aria-hidden="true" />
              )}
            </button>

            {/* Desktop: Globe Icon */}
            <button
              type="button"
              className={css.iconButton}
              onClick={onGlobeClick}
              aria-label="Language"
            >
              <span className={css.icon} aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* Desktop: Theme Icon */}
            <button
              type="button"
              className={css.iconButton}
              onClick={onThemeClick}
              aria-label="Theme"
            >
              <span className={css.icon} aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.displayName = 'Navbar';
