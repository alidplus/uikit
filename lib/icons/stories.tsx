import type { Meta, StoryObj } from '@storybook/react-vite';

import { Gamepad } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Gamepad> = {
  title: 'Components/Icon',
  component: Gamepad,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'number' },
    weight: { control: 'select', options: ['Broken', 'LineDuotone', 'Linear', 'Outline', 'Bold', 'BoldDuotone'] },
    mirrored: { control: 'boolean' },
    color: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { size: 32, weight: 'Linear', mirrored: false, color: 'currentColor' },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};