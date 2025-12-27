import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { sharedArgTypes } from '../@shared/cva';
import { Button } from '../buttons/component';

import { Alert } from './component';
import { sizeOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    severity: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    // variant: { control: 'select', options: ['filled', 'outlined', 'text'] },
    inline: { control: 'boolean' },
    closable: { control: 'boolean' },
    onClose: { action: 'closed' },
    action: { control: false },
    icon: { control: false },
    // Exclude variant from sharedArgTypes to avoid conflict
    pad: sharedArgTypes.pad,
    level: sharedArgTypes.level,
    border: sharedArgTypes.border,
    rounded: sharedArgTypes.rounded,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: 'This is an alert message',
    onClose: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const WithTitle: Story = {
  args: {
    title: 'Alert Title',
    description: 'This is a description of the alert message.',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    title: 'Information',
    description: 'This is an informational message.',
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    title: 'Success',
    description: 'Your action was completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    title: 'Warning',
    description: 'Please review this warning before proceeding.',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    title: 'Error',
    description: 'An error occurred. Please try again.',
  },
};

export const Filled: Story = {
  args: {
    // variant: 'filled',
    severity: 'info',
    title: 'Filled Alert',
    description: 'This alert uses the filled variant.',
  },
};

export const Outlined: Story = {
  args: {
    // variant: 'outlined',
    severity: 'info',
    title: 'Outlined Alert',
    description: 'This alert uses the outlined variant.',
  },
};

export const Text: Story = {
  args: {
    // variant: 'text',
    severity: 'info',
    title: 'Text Alert',
    description: 'This alert uses the text variant.',
  },
};

export const Closable: Story = {
  args: {
    closable: true,
    severity: 'info',
    title: 'Closable Alert',
    description: 'You can close this alert by clicking the × button.',
  },
};

export const WithAction: Story = {
  render: (args) => (
    <Alert
      {...args}
      severity="info"
      title="Alert with Action"
      description="This alert includes an action button."
      action={<Button size="sm">Action</Button>}
    />
  ),
};

export const WithCustomIcon: Story = {
  render: (args) => (
    <Alert
      {...args}
      severity="info"
      title="Custom Icon"
      description="This alert uses a custom icon instead of the default."
      icon={<span>⭐</span>}
    />
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    severity: 'info',
    title: 'Small Alert',
    description: 'This is a small-sized alert.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    severity: 'info',
    title: 'Large Alert',
    description: 'This is a large-sized alert.',
  },
};

export const Inline: Story = {
  args: {
    inline: true,
    severity: 'info',
    children: 'This is an inline alert message.',
  },
};

export const Complete: Story = {
  render: (args) => (
    <Alert
      {...args}
      severity="success"
      // variant="filled"
      size="lg"
      title="Complete Example"
      description="This alert demonstrates all features: title, description, severity, variant, size, action, and close button."
      action={
        <Button size="sm" variant="secondary">
          Learn More
        </Button>
      }
      closable
    />
  ),
};

export const SuccessWithAction: Story = {
  render: (args) => (
    <Alert
      {...args}
      severity="success"
      title="Payment Successful"
      description="Your payment has been processed successfully."
      action={
        <Button size="sm" variant="secondary">
          View Receipt
        </Button>
      }
      closable
    />
  ),
};

export const ErrorWithAction: Story = {
  render: (args) => (
    <Alert
      {...args}
      severity="error"
      title="Upload Failed"
      description="The file could not be uploaded. Please try again."
      action={
        <Button size="sm" variant="destructive">
          Retry
        </Button>
      }
      closable
    />
  ),
};

export const WarningClosable: Story = {
  args: {
    severity: 'warning',
    // variant: 'outlined',
    title: 'Session Expiring',
    description: 'Your session will expire in 5 minutes. Please save your work.',
    closable: true,
  },
};
