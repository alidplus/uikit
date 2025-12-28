import {
  BitcoinCard,
  BuyCrypto,
  CardCoin,
  SettingsMinimalistic,
  ShieldCheck,
  ShieldUser,
  Shop,
  Trade,
  Widget2,
} from '../icons';
import { Avatar } from '../main';
import { UserCard } from '../user-card/component';
import type { MenuItem } from './component';

// Sample menu items with icons as props
export const sampleMenuItems: MenuItem[][] = [
  [
    {
      id: '1',
      label: 'Dashboard',
      icon: <Widget2 weight="BoldDuotone" />,
    },
    {
      id: '2',
      label: 'Marketplace',
      icon: <Shop />,
    },
    {
      id: '3',
      label: 'My Asset',
      icon: <BitcoinCard />,
    },
    {
      id: '4',
      label: 'Trade',
      icon: <Trade />,
    },
  ],
  [
    {
      id: '5',
      label: 'Order History',
      icon: <BuyCrypto />,
    },
    {
      id: '6',
      label: 'Funds History',
      icon: <CardCoin />,
    },
  ],
  [
    {
      id: '7',
      label: 'Settings',
      icon: <SettingsMinimalistic />,
    },
    {
      id: '8',
      label: 'Identification',
      icon: <ShieldUser />,
    },
    {
      id: '9',
      label: 'Security',
      icon: <ShieldCheck />,
    },
  ],
];

export const sidebarLogo = (
  <figure
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#151515',
    }}
  >
    <img src="/logo.webp" alt="RVA" style={{ height: '100%', objectFit: 'contain' }} />
  </figure>
);

export const navbarLogo = (
  <figure
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#151515',
    }}
  >
    <img src="/logo.webp" alt="RVA" style={{ height: '100%', objectFit: 'contain' }} />
  </figure>
);

export const sampleUserProfile = (
  <UserCard avatarSrc="/avatar.jpg" name="John Doe" email="john.doe@example.com" />
);

export const sampleUserAvatar = <Avatar name="John Doe" src="/avatar.jpg" size="sm" />;
