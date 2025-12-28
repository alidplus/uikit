import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Avatar } from '../main';
import { Navbar, type NavbarAction, type NavbarDropdown } from './component';

// Sample logo
const sampleLogo = React.createElement(
  'div',
  {
    style: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '24px',
      fontWeight: 700,
      color: '#b5ff00',
      letterSpacing: '0.5px',
    },
  },
  'RVA',
);

// Sample user avatar
const sampleUserAvatar = <Avatar name="John Doe" src="/avatar.jpg" size="sm" />;

// Sample actions
const sampleActions: NavbarAction[] = [
  {
    id: 'deposit',
    label: 'Deposit',
    variant: 'primary',
    icon: React.createElement(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('path', {
        d: 'M10 4V16M10 4L6 8M10 4L14 8',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
  {
    id: 'withdraw',
    label: 'Withdraw',
    variant: 'secondary',
    icon: React.createElement(
      'svg',
      {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('path', {
        d: 'M10 16V4M10 16L6 12M10 16L14 12',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
];

// Sample dropdowns
const sampleDropdowns: NavbarDropdown[] = [
  {
    id: 'markets',
    label: 'Markets',
    icon: React.createElement(
      'svg',
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('path', {
        d: 'M4 6L8 10L12 6',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
  {
    id: 'assets',
    label: 'Assets',
    icon: React.createElement(
      'svg',
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('path', {
        d: 'M4 6L8 10L12 6',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onSidebarToggle: { action: 'sidebar toggled' },
    onNotificationClick: { action: 'notification clicked' },
    onGlobeClick: { action: 'globe clicked' },
    onThemeClick: { action: 'theme clicked' },
    hasNotificationBadge: { control: 'boolean' },
  },
  args: {
    logo: sampleLogo,
    userAvatar: sampleUserAvatar,
    actions: sampleActions,
    dropdowns: sampleDropdowns,
    hasNotificationBadge: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Desktop: Story = {
  args: {
    logo: sampleLogo,
    userAvatar: sampleUserAvatar,
    actions: sampleActions,
    dropdowns: sampleDropdowns,
    hasNotificationBadge: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Tablet: Story = {
  args: {
    logo: sampleLogo,
    hasNotificationBadge: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Mobile: Story = {
  args: {
    logo: sampleLogo,
    hasNotificationBadge: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithoutNotificationBadge: Story = {
  args: {
    logo: sampleLogo,
    userAvatar: sampleUserAvatar,
    actions: sampleActions,
    dropdowns: sampleDropdowns,
    hasNotificationBadge: false,
  },
};

export const WithAllActions: Story = {
  args: {
    logo: sampleLogo,
    userAvatar: sampleUserAvatar,
    actions: [
      ...sampleActions,
      {
        id: 'markets-action',
        label: 'Markets',
        variant: 'tertiary',
      },
      {
        id: 'assets-action',
        label: 'Assets',
        variant: 'tertiary',
      },
    ],
    hasNotificationBadge: true,
  },
};

export const Minimal: Story = {
  args: {
    logo: sampleLogo,
    hasNotificationBadge: false,
  },
};
