import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { sharedArgTypes } from '../@shared/cva';
import { Pressible } from './component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Pressible> = {
  title: 'Components/Pressible',
  component: Pressible,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pad: sharedArgTypes.pad,
    level: sharedArgTypes.level,
    border: sharedArgTypes.border,
    rounded: sharedArgTypes.rounded,
  },
  args: { children: 'lorem ipsum', pad: 'md', level: 'md' },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

// Default Button usage (no as prop)
export const AsButton: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Button clicked!'),
  },
};

// With anchor tag
export const AsAnchor: Story = {
  args: {
    as: 'a',
    href: 'https://example.com',
    children: 'Visit Example',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

// Example showing how to use with Next.js Link
// Note: This is just a demonstration - in a real Next.js app, you would:
// import Link from 'next/link';
// <Pressible as={Link} href="/about">About</Pressible>
export const WithNextJsLink: Story = {
  args: {
    children: 'About (Next.js Link)',
  },
  render: (args) => {
    // Mock Next.js Link component for Storybook demonstration
    const MockNextLink = ({
      href,
      children,
      className,
      ...props
    }: {
      href: string;
      children: React.ReactNode;
      className?: string;
    } & React.ComponentProps<'a'>) => {
      return React.createElement(
        'a',
        { href, className, ...props, 'data-link-type': 'nextjs' },
        children,
      );
    };
    return React.createElement(Pressible, { ...args, as: MockNextLink, href: '/about' });
  },
};

// Example showing how to use with React Router Link
// Note: This is just a demonstration - in a real React Router app, you would:
// import { Link } from 'react-router-dom';
// <Pressible as={Link} to="/about">About</Pressible>
export const WithReactRouterLink: Story = {
  args: {
    children: 'About (React Router Link)',
  },
  render: (args) => {
    // Mock React Router Link component for Storybook demonstration
    const MockRouterLink = ({
      to,
      children,
      className,
      ...props
    }: {
      to: string;
      children: React.ReactNode;
      className?: string;
    } & React.ComponentProps<'a'>) => {
      return React.createElement(
        'a',
        { href: to, className, ...props, 'data-link-type': 'react-router' },
        children,
      );
    };
    return React.createElement(Pressible, { ...args, as: MockRouterLink, to: '/about' });
  },
};
