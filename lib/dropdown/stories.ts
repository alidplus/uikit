import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Dropdown } from './component';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    controlled: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    showHint: { control: 'boolean' },
    showIconStart: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Title',
    placeholder: 'Placeholder',
    required: true,
    hint: 'This is hint text!',
    showLabel: true,
    showHint: true,
    showIconStart: true,
    options: [
      {
        id: 'option1',
        label: 'Placeholder',
        icon: React.createElement(
          'svg',
          {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '10',
            fill: '#F3BA2F',
          }),
        ),
      },
      {
        id: 'option2',
        label: 'Placeholder',
        icon: React.createElement(
          'svg',
          {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '10',
            fill: '#F3BA2F',
          }),
        ),
      },
      {
        id: 'option3',
        label: 'Placeholder',
        icon: React.createElement(
          'svg',
          {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '10',
            fill: '#F3BA2F',
          }),
        ),
      },
      {
        id: 'option4',
        label: 'Placeholder',
        icon: React.createElement(
          'svg',
          {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          React.createElement('circle', {
            cx: '12',
            cy: '12',
            r: '10',
            fill: '#F3BA2F',
          }),
        ),
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    defaultValue: 'option1',
  },
};

export const Hover: Story = {
  args: {},
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const DropdownWithState = (props: React.ComponentProps<typeof Dropdown>) => {
  const [value, setValue] = React.useState(props.defaultValue || '');
  const [open, setOpen] = React.useState(props.defaultOpen || false);
  return React.createElement(Dropdown, {
    ...props,
    value: value,
    open: open,
    controlled: true,
    onChange: setValue,
    onOpenChange: setOpen,
  });
};

export const Controlled: Story = {
  render: (args) => {
    return React.createElement(DropdownWithState, args);
  },
};

export const WithoutIcon: Story = {
  args: {
    showIconStart: false,
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
      { id: 'option3', label: 'Option 3' },
    ],
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
  },
};

export const WithoutHint: Story = {
  args: {
    showHint: false,
  },
};

export const NotRequired: Story = {
  args: {
    required: false,
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      id: `option${i + 1}`,
      label: `Option ${i + 1}`,
      icon: React.createElement(
        'svg',
        {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        React.createElement('circle', {
          cx: '12',
          cy: '12',
          r: '10',
          fill: '#F3BA2F',
        }),
      ),
    })),
  },
};
