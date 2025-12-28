import type { Meta, StoryObj } from '@storybook/react-vite';

import { UserCard } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    avatarSrc: { control: 'text' },
    name: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    avatarSrc: '/asvatar.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const WithoutStatus: Story = {
  args: {},
};

export const WithoutAvatar: Story = {
  args: {
    avatarSrc: undefined,
  },
};

export const LongName: Story = {
  args: {
    name: 'Very Long User Name That Should Truncate',
  },
};

export const Responsive: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', width: '100%' }}>
        <div style={{ width: '400px', border: '1px solid #424242', padding: '16px' }}>
          <p style={{ marginBottom: '8px', color: '#A3A3A3' }}>Wide (400px)</p>
          <Story />
        </div>
        <div style={{ width: '250px', border: '1px solid #424242', padding: '16px' }}>
          <p style={{ marginBottom: '8px', color: '#A3A3A3' }}>Medium (250px)</p>
          <Story />
        </div>
        <div style={{ width: '150px', border: '1px solid #424242', padding: '16px' }}>
          <p style={{ marginBottom: '8px', color: '#A3A3A3' }}>Medium (150px)</p>
          <Story />
        </div>
        <div style={{ width: '80px', border: '1px solid #424242', padding: '16px' }}>
          <p style={{ marginBottom: '8px', color: '#A3A3A3' }}>Small (&lt;100px)</p>
          <Story />
        </div>
      </div>
    ),
  ],
};
