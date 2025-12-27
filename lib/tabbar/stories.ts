import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TabBar } from './component';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {
    controlled: { control: 'boolean' },
  },
  args: {
    tabs: [
      {
        id: 'orders1',
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
      {
        id: 'orders2',
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
      {
        id: 'orders3',
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
      {
        id: 'orders4',
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
      {
        id: 'orders5',
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
    defaultValue: 'orders1',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const TabBarWithState = (props: React.ComponentProps<typeof TabBar>) => {
  const [value, setValue] = React.useState(props.defaultValue || props.tabs[0]?.id || '');
  return React.createElement(TabBar, {
    ...props,
    value: value,
    controlled: true,
    onChange: setValue,
  });
};

export const Controlled: Story = {
  render: (args) => {
    return React.createElement(TabBarWithState, args);
  },
};

export const WithoutIcons: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ],
  },
};

export const TwoTabs: Story = {
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
    ],
  },
};
