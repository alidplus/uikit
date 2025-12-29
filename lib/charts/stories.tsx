import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ActivityGaugeLg,
  ActivityGaugeMd,
  ActivityGaugeSm,
  ActivityGaugeXs,
  BarChart01,
  BarChart02,
  BarChart03,
  LineChart01,
  LineChart02,
  LineChart03,
  LineChart04,
  PieChartLg,
  PieChartMd,
  PieChartSm,
  PieChartXxs,
  PieChartXs,
  RadarChart,
} from './samples';

const meta: Meta = {
  title: 'Components/Charts',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Line Charts
export const LineChart01Story: Story = {
  render: () => <LineChart01 />,
};

export const LineChart02Story: Story = {
  render: () => <LineChart02 />,
};

export const LineChart03Story: Story = {
  render: () => <LineChart03 />,
};

export const LineChart04Story: Story = {
  render: () => <LineChart04 />,
};

// Bar Charts
export const BarChart01Story: Story = {
  render: () => <BarChart01 />,
};

export const BarChart02Story: Story = {
  render: () => <BarChart02 />,
};

export const BarChart03Story: Story = {
  render: () => <BarChart03 />,
};

// Activity Gauges
export const ActivityGaugeXsStory: Story = {
  render: () => <ActivityGaugeXs />,
};

export const ActivityGaugeSmStory: Story = {
  render: () => <ActivityGaugeSm />,
};

export const ActivityGaugeMdStory: Story = {
  render: () => <ActivityGaugeMd />,
};

export const ActivityGaugeLgStory: Story = {
  render: () => <ActivityGaugeLg />,
};

// Pie Charts
export const PieChartXxsStory: Story = {
  render: () => <PieChartXxs />,
};

export const PieChartXsStory: Story = {
  render: () => <PieChartXs />,
};

export const PieChartSmStory: Story = {
  render: () => <PieChartSm />,
};

export const PieChartMdStory: Story = {
  render: () => <PieChartMd />,
};

export const PieChartLgStory: Story = {
  render: () => <PieChartLg />,
};

// Radar Chart
export const RadarChartStory: Story = {
  render: () => <RadarChart />,
};

