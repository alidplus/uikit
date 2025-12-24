import type { Meta, StoryObj } from '@storybook/react-vite';

import { Home2 } from '../icons';
import { Breadcrumb, type IBreadcrumbItem } from './component';
import { sizeOptions } from './cva';

const sampleItems: IBreadcrumbItem[] = [
  { label: 'Home', href: '/', icon: <Home2 /> },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics', isActive: true },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    items: {
      table: {
        disable: true,
      },
    },
    linkComponent: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    items: sampleItems,
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    items: sampleItems,
  },
};

// Example with default anchor tag (no linkComponent prop)
export const WithDisabledItem: Story = {
  args: {
    items: [
      sampleItems[0],
      { label: 'Disabled', href: '/disabled', isDisabled: true },
      sampleItems[1],
      sampleItems[2],
    ],
  },
};
