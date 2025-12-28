import cn from 'classnames';
import { type ComponentProps, type ReactNode } from 'react';
import { AltArrowDown, Bell, Global, HamburgerMenu, Magnifer, Moon, Siderbar } from '../icons';
import { Button } from '../main';
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
        <Button
          type="button"
          variant="secondary"
          className={css.sidebarButton}
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
          icStart={
            <>
              {/* Desktop: Sidebar icon */}
              <Siderbar className={css.desktopIcon} />
              {/* Tablet/Mobile: Hamburger menu */}
              <HamburgerMenu className={css.mobileIcon} />
            </>
          }
          iconOnly
        />

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
                  <AltArrowDown />
                </span>
              </button>
            ))}
          </div>

          {/* User Avatar */}

          {/* Icons */}
          <div className={css.iconsSection}>
            {userAvatar && (
              <Button
                type="button"
                onClick={onNotificationClick}
                aria-label="Notifications"
                variant="tertiary"
                size="sm"
                iconOnly
                className={css.userAvatarSection}
                icStart={userAvatar}
              ></Button>
            )}
            {/* Desktop: Magnifer Icon */}
            <Button
              type="button"
              className={css.iconButton}
              variant="tertiary"
              size="sm"
              iconOnly
              aria-label="Language"
              icStart={<Magnifer />}
            />

            {/* Notification Icon */}
            <Button
              type="button"
              className={css.iconButton}
              onClick={onNotificationClick}
              aria-label="Notifications"
              variant="tertiary"
              size="sm"
              iconOnly
              icStart={<Bell />}
            >
              {hasNotificationBadge && (
                <span className={css.notificationBadge} aria-hidden="true" />
              )}
            </Button>

            {/* Desktop: Globe Icon */}
            <Button
              type="button"
              className={css.iconButton}
              variant="tertiary"
              size="sm"
              iconOnly
              onClick={onGlobeClick}
              aria-label="Language"
              icStart={<Global />}
            />

            {/* Desktop: Theme Icon */}
            <Button
              type="button"
              className={css.iconButton}
              variant="tertiary"
              size="sm"
              iconOnly
              onClick={onThemeClick}
              aria-label="Theme"
              icStart={<Moon />}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.displayName = 'Navbar';
