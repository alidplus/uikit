import cn from 'classnames';
import { type ComponentProps, type ComponentType } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { AltArrowRight, Home, SolarProvider } from '../icons';
import { Pressible } from '../main';
import { itemVariants, variants, type IVariants } from './cva';
import css from './styles.module.scss';

export interface IBreadcrumbItem {
  label?: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  title?: string;
}

// Default link component - a simple anchor tag
const DefaultLink = ({
  href,
  children,
  ...props
}: { href: string; children: React.ReactNode } & ComponentProps<'a'>) => (
  <a href={href} {...props}>
    {children}
  </a>
);

interface Props {
  items: IBreadcrumbItem[];
  linkComponent?: ComponentType<{ href: string; children: React.ReactNode } & ComponentProps<'a'>>;
}

export type BreadcrumbProps = Omit<ISharedVariants, keyof Props> &
  Omit<IVariants, keyof Props> &
  Omit<ComponentProps<'nav'>, keyof Props> &
  Props;

export function Breadcrumb({
  className: extClassName,
  level,
  pad,
  border,
  rounded,
  items,
  title,
  linkComponent: LinkComponent = DefaultLink,
  ...restProps
}: BreadcrumbProps) {
  const className = cn(
    sharedVariants({
      level,
      pad,
      border,
      rounded,
    }),
    variants({
      class: extClassName,
    }),
  );
  return (
    <nav className={className} {...restProps}>
      {title && (
        <div className={css.titleContainer}>
          <p className={css.titleText}>{title}</p>
        </div>
      )}
      <Pressible href="/" as={LinkComponent} className={itemVariants({})}>
        <Home color="var(--interaction-neutral-bg-neutral-default, #292929)" size={20} />
      </Pressible>
      {items.map((item) => (
        <>
          <AltArrowRight color="var(--color-text-text-placeholder, #737373)" size={20} />
          <Pressible
            key={item.label}
            href={item.href}
            as={LinkComponent}
            className={itemVariants({
              active: item.isActive,
              disabled: item.isDisabled,
            })}
          >
            {item.icon ? (
              <SolarProvider value={{ size: 20, color: 'var(--color-text-text-tertiary)' }}>
                {item.icon}
              </SolarProvider>
            ) : null}
            {item.label}
          </Pressible>
        </>
      ))}
    </nav>
  );
}

Breadcrumb.displayName = 'Breadcrumb';
