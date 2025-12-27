import type { Meta, StoryObj } from '@storybook/react-vite';

import { Paper } from '../main';
import { DashboardLayout } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DashboardLayout> = {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    children: (
      <>
        <Paper asChild pad="md">
          <header>header</header>
        </Paper>
        <Paper asChild flex="vertical">
          <aside>
            <div>Sidebar content</div>
          </aside>
        </Paper>
        <Paper asChild border={1}>
          <article>
            <div>
              {new Array(50).fill(0).map((_, index) => (
                <p key={index}>content {index}</p>
              ))}
            </div>
          </article>
        </Paper>
        <Paper asChild pad="md">
          <footer>footer</footer>
        </Paper>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Minimal: Story = {
  args: {
    children: (
      <>
        <header></header>
        <aside></aside>
        <article></article>
        <footer></footer>
      </>
    ),
  },
};
