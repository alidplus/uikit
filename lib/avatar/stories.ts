import type { Meta, StoryObj } from '@storybook/react-vite';

import { bordersOptions, paddingOptions, roundedOptions, shadowsOptions } from '../@shared/cva';
import { Avatar } from './component';
import { sizeOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pad: { control: 'select', options: paddingOptions },
    size: { control: 'select', options: sizeOptions },
    level: { control: 'select', options: shadowsOptions },
    border: { control: 'select', options: bordersOptions },
    rounded: { control: 'select', options: roundedOptions },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    src: 'https://picsum.photos/200',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
