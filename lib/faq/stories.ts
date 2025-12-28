import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Faq } from './component';

const meta: Meta<typeof Faq> = {
  title: 'Components/Faq',
  component: Faq,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    controlled: { control: 'boolean' },
  },
  args: {
    question: 'Why do I need to complete Identity Verification?',
    answer:
      'Identity verification (KYC) is the process where users provide personal information, ID photos, and complete a face scan to confirm their identity on RVA Exchange.',
    defaultOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    defaultOpen: false,
  },
};

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
};

const FaqWithState = (props: React.ComponentProps<typeof Faq>) => {
  const [open, setOpen] = React.useState(false);
  return React.createElement(Faq, {
    ...props,
    open: open,
    controlled: true,
    onToggle: setOpen,
  });
};

export const Controlled: Story = {
  render: (args) => {
    return React.createElement(FaqWithState, args);
  },
};

export const Multiple: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '557px' } },
      React.createElement(Faq, {
        question: 'Why do I need to complete Identity Verification?',
        answer:
          'Identity verification (KYC) is the process where users provide personal information, ID photos, and complete a face scan to confirm their identity on RVA Exchange.',
        defaultOpen: false,
      }),
      React.createElement(Faq, {
        question: 'How long does the verification process take?',
        answer:
          'The verification process typically takes 24-48 hours. However, it can take longer during peak times or if additional documentation is required.',
        defaultOpen: true,
      }),
      React.createElement(Faq, {
        question: 'What documents do I need for verification?',
        answer:
          "You will need a valid government-issued ID (passport, driver's license, or national ID card) and a clear photo of yourself holding the ID.",
        defaultOpen: false,
      }),
    );
  },
};
