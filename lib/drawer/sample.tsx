import {
  Card,
  Chart,
  Routing3,
  SettingsMinimalistic,
  ShieldCheck,
  ShieldUser,
  Shop,
  Widget2,
} from '../icons';
import { UserCard } from '../user-card/component';
import type { MenuItem } from './component';

// Sample menu items with icons as props
export const sampleMenuItems: MenuItem[][] = [
  [
    {
      id: '1',
      label: 'Dashboard',
      icon: <Widget2 />,
    },
    {
      id: '2',
      label: 'Marketplace',
      icon: <Shop />,
    },
    {
      id: '3',
      label: 'My Asset',
      icon: <Card />,
    },
    {
      id: '4',
      label: 'Trade',
      icon: <Routing3 />,
    },
  ],
  [
    {
      id: '5',
      label: 'Order History',
      icon: <Chart />,
    },
    {
      id: '6',
      label: 'Funds History',
      icon: <Chart />,
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

export const sampleLogo = (
  <figure
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#151515',
      padding: 8,
    }}
  >
    <img src="/logo-dark.png" alt="RVA" style={{ height: '100%', objectFit: 'contain' }} />
  </figure>
);

export const sampleUserProfile = (
  <UserCard avatarSrc="/avatar.jpg" name="John Doe" email="john.doe@example.com" />
);
