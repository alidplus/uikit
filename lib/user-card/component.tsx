import cn from 'classnames';
import { type ComponentProps } from 'react';
import type { ISharedVariants } from '../@shared/cva';
import { Avatar, type AvatarProps } from '../avatar/component';
import { Logout3 } from '../icons';
import { Button } from '../main';
import css from './styles.module.scss';

interface Props {
  avatarSrc?: string;
  name?: string;
  email?: string;
  size?: AvatarProps['size'];
}

export type UserCardProps = Omit<ISharedVariants, keyof Props> &
  Omit<ComponentProps<'div'>, keyof Props> &
  Props;

export function UserCard({ className, avatarSrc, name, email, size, ...restProps }: UserCardProps) {
  return (
    <div className={cn(css.root, className)} {...restProps}>
      <div className={css.wrapper}>
        <Avatar className={css.avatar} src={avatarSrc} size={size} name={name ?? email} />
        <div className={css.content}>
          {name && <span>{name}</span>}
          {email && <span title={email}>{email}</span>}
        </div>
        <Button
          variant="secondary"
          rounded="rounded"
          className={css.logout}
          size="sm"
          icStart={<Logout3 size={16} />}
        />
      </div>
    </div>
  );
}

UserCard.displayName = 'UserCard';
