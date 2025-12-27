import type { Meta, StoryObj } from '@storybook/react-vite';

import { sharedArgTypes } from '../@shared/cva';

import { Microphone } from '../icons';
import { Alert } from './component';
import { severityOptions, variantOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    severity: { control: 'select', options: severityOptions },
    variant: { control: 'select', options: variantOptions },
    banner: { control: 'boolean' },
    important: { control: 'boolean' },
    onClose: { action: 'closed' },
    icon: { control: false },
    // Exclude variant from sharedArgTypes to avoid conflict
    pad: sharedArgTypes.pad,
    level: sharedArgTypes.level,
    border: sharedArgTypes.border,
    rounded: sharedArgTypes.rounded,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    important: true,
    severity: 'info',
    message: 'Please remove access for any device that you do not recognize',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {},
};
export const Warn: Story = {
  args: {
    severity: 'warn',
  },
};
export const Error: Story = {
  args: {
    severity: 'error',
  },
};

export const Banner: Story = {
  args: {
    severity: 'info',
    variant: 'banner',
    important: undefined,
    message: 'Keep your account secure:',
    cta: 'Enable 2FA and withdrawal whitelist.',
    ctaHref: '#',
    ctaTarget: '_blank',
  },
};

export const WithTitle: Story = {
  args: {
    important: 'Notice',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Microphone />,
    important: 'Record',
    message: 'Please record a voice message to confirm your identity',
  },
};
