import type { Meta, StoryObj } from '@storybook/react-vite';

import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import { sharedArgTypes } from '../@shared/cva';
import { Container } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',

    viewport: {
      defaultViewport: 'desktop',
      options: {
        desktopXLarge: {
          name: 'X Large Desktop',
          styles: {
            height: '1373px',
            width: '2560px',
          },
          type: 'desktop',
        },
        desktopLarge: {
          name: 'Large Desktop',
          styles: {
            height: '1024px',
            width: '1440px',
          },
          type: 'desktop',
        },
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    ...sharedArgTypes,
    fluid: { control: 'boolean' },
    children: { control: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    pad: 'md',
    level: 'md',
    flex: 'vertical',
    children: (
      <>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </>
    ),
    fluid: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
