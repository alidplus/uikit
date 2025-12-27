import { AltArrowRight } from '@solar-icons/react';
import cn from 'classnames';
import { type ComponentProps, type ComponentType } from 'react';
import { sharedVariants, type ISharedVariants } from '../@shared/cva';
import { Pressible } from '../main';
import { itemVariants, variants, type IVariants } from './cva';

export interface IBreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
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
      {items.map((item, idx) => (
        <>
          {idx > 0 && <AltArrowRight />}
          <Pressible
            key={item.label}
            href={item.href}
            as={LinkComponent}
            className={itemVariants({
              active: item.isActive,
              disabled: item.isDisabled,
            })}
          >
            {item.icon}
            {item.label}
          </Pressible>
        </>
      ))}
    </nav>
  );
}

Breadcrumb.displayName = 'Breadcrumb';
