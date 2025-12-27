import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Drawer, type MenuItem } from './component';
import { sizeOptions } from './cva';

// Sample menu items with icons as props
const sampleMenuItems: MenuItem[][] = [
  [
    {
      id: '1',
      label: 'Dashboard',
      icon: React.createElement('span', null, '📊'),
    },
    {
      id: '2',
      label: 'Marketplace',
      icon: React.createElement('span', null, '🏪'),
    },
    {
      id: '3',
      label: 'My Asset',
      icon: React.createElement('span', null, '💼'),
    },
    {
      id: '4',
      label: 'Trade',
      icon: React.createElement('span', null, '💱'),
    },
  ],
  [
    {
      id: '5',
      label: 'Order History',
      icon: React.createElement('span', null, '📋'),
    },
    {
      id: '6',
      label: 'Funds History',
      icon: React.createElement('span', null, '💰'),
    },
  ],
  [
    {
      id: '7',
      label: 'Settings',
      icon: React.createElement('span', null, '⚙️'),
    },
    {
      id: '8',
      label: 'Identification',
      icon: React.createElement('span', null, '🆔'),
    },
    {
      id: '9',
      label: 'Security',
      icon: React.createElement('span', null, '🔒'),
    },
  ],
];

const sampleLogo = React.createElement(
  'div',
  {
    style: {
      width: '80px',
      height: '41px',
      background: '#b5ff00',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#151515',
      fontWeight: 'bold',
    },
  },
  'RVA',
);

const sampleUserProfile = (onLogoutClick?: () => void) =>
  React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        justifyContent: 'space-between',
        width: '100%',
      },
    },
    React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
      React.createElement('div', {
        style: {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#424242',
          border: '1px solid #424242',
        },
      }),
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column' } },
        React.createElement(
          'span',
          { style: { color: '#d6d6d6', fontSize: '16px', fontWeight: 500 } },
          'John.m',
        ),
        React.createElement(
          'span',
          { style: { color: '#a3a3a3', fontSize: '14px' } },
          'John.morgan@rva.com',
        ),
      ),
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        style: {
          background: 'none',
          border: 'none',
          padding: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a3a3a3',
          borderRadius: '4px',
          transition: 'background-color 0.2s ease',
        },
        onClick: onLogoutClick,
        'aria-label': 'Logout',
      },
      React.createElement(
        'span',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
          },
        },
        React.createElement(
          'svg',
          {
            width: '32',
            height: '32',
            viewBox: '0 0 32 32',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('path', {
            d: 'M12 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H12',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          React.createElement('path', {
            d: 'M21 22L27 16L21 10',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          React.createElement('path', {
            d: 'M27 16H10',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      ),
    ),
  );

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    open: { control: 'boolean' },
    showSearchOnMobile: { control: 'boolean' },
  },
  args: {
    open: true,
    logo: sampleLogo,
    menuItems: sampleMenuItems,
    userProfile: sampleUserProfile(),
    showSearchOnMobile: true,
    searchPlaceholder: 'Search here...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for stories with state
const DrawerWithState = (props: React.ComponentProps<typeof Drawer>) => {
  const [open, setOpen] = useState(props.open ?? true);
  return React.createElement(Drawer, {
    ...props,
    open: open,
    onSearchClick: () => setOpen((prev) => !prev),
    userProfile: sampleUserProfile(() => {
      console.log('Logout clicked');
    }),
  });
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DesktopOpen: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: true }),
  args: {
    open: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const DesktopClosed: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: false }),
  args: {
    open: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const TabletOpen: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: true }),
  args: {
    open: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const TabletClosed: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: false }),
  args: {
    open: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileOpen: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: true }),
  args: {
    open: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileClosed: Story = {
  render: (args) => React.createElement(DrawerWithState, { ...args, open: false }),
  args: {
    open: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
