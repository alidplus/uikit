import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TabSwitch } from './component';

const meta: Meta<typeof TabSwitch> = {
  title: 'Components/TabSwitch',
  component: TabSwitch,
  tags: ['autodocs'],
  argTypes: {
    controlled: { control: 'boolean' },
  },
  args: {
    tabs: [
      {
        id: 'transactions',
        label: 'Transactions',
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
            d: 'M16 10L4 10M4 10L7 7M4 10L7 13',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      },
      {
        id: 'orders',
        label: 'Orders',
        icon: React.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '10',
            cy: '10',
            r: '8.5',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          React.createElement('path', {
            d: 'M10 6V10L12 12',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      },
    ],
    defaultValue: 'transactions',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const TabSwitchWithState = (props: React.ComponentProps<typeof TabSwitch>) => {
  const [value, setValue] = React.useState(props.defaultValue || props.tabs[0]?.id || '');
  return React.createElement(TabSwitch, {
    ...props,
    value: value,
    controlled: true,
    onChange: setValue,
  });
};

export const Controlled: Story = {
  render: (args) => {
    return React.createElement(TabSwitchWithState, args);
  },
};

export const WithoutIcons: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
    ],
  },
};

export const ThreeTabs: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        icon: React.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '10',
            cy: '10',
            r: '8.5',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        icon: React.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '10',
            cy: '10',
            r: '8.5',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        icon: React.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '10',
            cy: '10',
            r: '8.5',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        ),
      },
    ],
  },
};
