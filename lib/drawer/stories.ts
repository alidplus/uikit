import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './component';
import { sampleLogo, sampleMenuItems, sampleUserProfile } from './sample';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    expand: { control: 'boolean' },
    showSearchOnMobile: { control: 'boolean' },
    logo: { control: false },
    menuItems: { control: false },
    children: { control: false },
  },
  args: {
    expand: false,
    logo: sampleLogo,
    menuItems: sampleMenuItems,
    children: sampleUserProfile,
    showSearchOnMobile: true,
    searchPlaceholder: 'Search here...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DesktopOpen: Story = {
  args: {
    expand: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const DesktopClosed: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const TabletOpen: Story = {
  args: {
    expand: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const TabletClosed: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileOpen: Story = {
  args: {
    expand: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileClosed: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
