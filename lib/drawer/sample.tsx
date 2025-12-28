import React from 'react';
import { Chart } from '../icons';
import type { MenuItem } from './component';

// Sample menu items with icons as props
export const sampleMenuItems: MenuItem[][] = [
  [
    {
      id: '1',
      label: 'Dashboard',
      icon: <Chart />,
    },
    {
      id: '2',
      label: 'Marketplace',
      icon: <Chart />,
    },
    {
      id: '3',
      label: 'My Asset',
      icon: <Chart />,
    },
    {
      id: '4',
      label: 'Trade',
      icon: <Chart />,
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
      icon: <Chart />,
    },
    {
      id: '8',
      label: 'Identification',
      icon: <Chart />,
    },
    {
      id: '9',
      label: 'Security',
      icon: <Chart />,
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

export const sampleUserProfile = React.createElement(
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
