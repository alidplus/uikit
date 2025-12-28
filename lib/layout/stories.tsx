import type { Meta, StoryObj } from '@storybook/react-vite';

import classNames from 'classnames';
import { useState } from 'react';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import { Container } from '../container/component';
import {
  navbarLogo,
  sampleMenuItems,
  sampleUserAvatar,
  sampleUserProfile,
  sidebarLogo,
} from '../drawer/sample';
import { Drawer, Paper } from '../main';
import { Navbar } from '../navbar/component';
import { DashboardLayout } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DashboardLayout> = {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
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
          <Drawer
            menuItems={sampleMenuItems}
            showSearchOnMobile={true}
            searchPlaceholder={'Search here...'}
          >
            {sampleUserProfile}
          </Drawer>
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

export const WithToggle: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <DashboardLayout>
        {sidebarLogo}
        <header style={{ background: 'gray' }}>
          <Navbar
            onSidebarToggle={() => setOpen(!open)}
            logo={navbarLogo}
            userAvatar={sampleUserAvatar}
            hasNotificationBadge
          />
        </header>
        <Drawer
          className={classNames({ open })}
          expand={open}
          menuItems={sampleMenuItems}
          showSearchOnMobile={true}
          searchPlaceholder={'Search here...'}
        >
          {sampleUserProfile}
        </Drawer>
        <article onClick={() => setOpen(false)}>
          <Container pad="md" flex="vertical" gap="lg">
            <Paper pad="lg" border={1} level="sm" rounded="sm">
              <p>body</p>
              <p>body</p>
              <p>body</p>
              <p>body</p>
            </Paper>
            <Paper pad="lg" border={1} level="sm" rounded="sm">
              <p>body</p>
              <p>body</p>
              <p>body</p>
              <p>body</p>
            </Paper>
            <Paper pad="lg" border={1} level="sm" rounded="sm">
              <p>body</p>
              <p>body</p>
              <p>body</p>
              <p>body</p>
            </Paper>
            <Paper pad="lg" border={1} level="sm" rounded="sm">
              <p>body</p>
              <p>body</p>
              <p>body</p>
              <p>body</p>
            </Paper>
            <Paper pad="lg" border={1} level="sm" rounded="sm">
              <p>body</p>
              <p>body</p>
              <p>body</p>
              <p>body</p>
            </Paper>
          </Container>
        </article>
        <footer>prices</footer>
      </DashboardLayout>
    );
  },
  args: {},
};
