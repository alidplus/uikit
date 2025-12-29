import type { Meta, StoryObj } from '@storybook/react-vite';

import React from 'react';
import { fn } from 'storybook/test';
import { Pagination } from './component';
import { breakpointOptions, shapeOptions, typeOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: 'select', options: typeOptions },
    shape: { control: 'select', options: shapeOptions },
    breakpoint: { control: 'select', options: breakpointOptions },
    currentPage: { control: 'number', min: 1 },
    totalPages: { control: 'number', min: 1 },
    onPageChange: { action: 'page changed' },
    onPrevious: { action: 'previous clicked' },
    onNext: { action: 'next clicked' },
    previousDisabled: { control: 'boolean' },
    nextDisabled: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    totalPages: 10,
    onPageChange: fn(),
    onPrevious: fn(),
    onNext: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Controlled Pagination Wrapper
const PaginationWithState = (
  props: React.ComponentProps<typeof Pagination> & { initialPage?: number },
) => {
  const [currentPage, setCurrentPage] = React.useState(props.initialPage ?? 1);

  return React.createElement(Pagination, {
    ...props,
    currentPage: currentPage,
    onPageChange: (page: number) => {
      setCurrentPage(page);
      props.onPageChange?.(page);
    },
    onPrevious: () => {
      if (currentPage > 1) {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        props.onPageChange?.(newPage);
        props.onPrevious?.();
      }
    },
    onNext: () => {
      const totalPages = props.totalPages ?? 10;
      if (currentPage < totalPages) {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        props.onPageChange?.(newPage);
        props.onNext?.();
      }
    },
  });
};

// Page Default - Circle - Desktop
export const PageDefaultCircleDesktop: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

// Page Default - Square - Mobile
export const PageDefaultSquareMobile: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'page-default',
    shape: 'square',
    breakpoint: 'mobile',
  },
};

// Card Minimal Right Aligned
export const CardMinimalRight: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'card-minimal-right',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

// Card Minimal Left Aligned
export const CardMinimalLeft: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'card-minimal-left',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

// Card Minimal Center Aligned
export const CardMinimalCenter: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'card-minimal-center',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

// Card Button Group - Desktop
export const CardButtonGroupDesktop: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'card-button-group',
    shape: 'square',
    breakpoint: 'desktop',
  },
};

// Card Button Group - Mobile
export const CardButtonGroupMobile: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'card-button-group',
    shape: 'square',
    breakpoint: 'mobile',
  },
};

// Different Page States
export const PageDefaultMiddlePage: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, { ...args, initialPage: 5 });
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

export const PageDefaultLastPage: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, { ...args, initialPage: 10 });
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

export const PageDefaultFirstPage: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, { ...args, initialPage: 1 });
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
  },
};

// Disabled States
export const PageDefaultPreviousDisabled: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, { ...args, initialPage: 1 });
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
    previousDisabled: true,
  },
};

export const PageDefaultNextDisabled: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, { ...args, initialPage: 10 });
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
    nextDisabled: true,
  },
};

// Few Pages
export const PageDefaultFewPages: Story = {
  render: (args) => {
    return React.createElement(PaginationWithState, args);
  },
  args: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
    totalPages: 5,
  },
};
