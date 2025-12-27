import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Filter } from './component';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    controlled: { control: 'boolean' },
    showTitle: { control: 'boolean' },
  },
  args: {
    title: 'status',
    showTitle: false,
    options: [
      { id: 'all', label: 'All' },
      { id: '1month', label: '1 month' },
      { id: '1week', label: '1 Week' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithTitle: Story = {
  args: {
    showTitle: true,
  },
};

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
};

export const OpenWithTitle: Story = {
  args: {
    showTitle: true,
    defaultOpen: true,
  },
};

export const Selected: Story = {
  args: {
    defaultValue: '1month',
  },
};

export const SelectedWithTitle: Story = {
  args: {
    showTitle: true,
    defaultValue: '1month',
  },
};

const FilterWithState = (props: React.ComponentProps<typeof Filter>) => {
  const [value, setValue] = React.useState(props.defaultValue || props.options[0]?.id || '');
  const [open, setOpen] = React.useState(props.defaultOpen || false);
  return React.createElement(Filter, {
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
    return React.createElement(FilterWithState, args);
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 10 }, (_, i) => ({
      id: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
};

export const CustomTitle: Story = {
  args: {
    showTitle: true,
    title: 'Category',
  },
};
