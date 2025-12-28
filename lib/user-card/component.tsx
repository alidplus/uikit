import cn from 'classnames';
import { type ComponentProps, type PropsWithChildren } from 'react';
import { variants, type IVariants } from './cva';

interface Props extends ComponentProps<'span'> {}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type UserCardProps = TExternalVariants & Props;

export function UserCard({
  size,
  className: extClassName,
  children,
  ...restProps
}: PropsWithChildren<UserCardProps>) {
  const className = cn(
    variants({
      size: size,
      class: extClassName,
    }),
  );
  return (
    <span className={className} {...restProps}>
      {children}
    </span>
  );
}

UserCard.displayName = 'UserCard';
