'use client';

import { Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartLegendContent, ChartTooltipContent } from '../components';
import styles from './pie-charts.module.scss';

const pieChartData = [
  { name: 'Series 1', value: 200, className: styles.colorBrand600 },
  { name: 'Series 2', value: 350, className: styles.colorBrand500 },
  { name: 'Series 3', value: 100, className: styles.colorBrand400 },
  { name: 'Series 4', value: 120, className: styles.colorBrand300 },
  { name: 'Series 5', value: 230, className: styles.colorGray200 },
];

interface PieChartProps {
  data?: {
    name: string;
    value: number;
    className?: string;
  }[];
}

export const PieChartXxs = ({ data = pieChartData }: PieChartProps) => {
  return (
    <ResponsiveContainer height={120} className={styles.maxW525}>
      <RechartsPieChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
        <Tooltip content={<ChartTooltipContent isPieChart />} />
        <Pie
          isAnimationActive={false}
          startAngle={-270}
          endAngle={-630}
          stroke="none"
          data={data}
          dataKey="value"
          nameKey="name"
          fill="currentColor"
          innerRadius={30}
          outerRadius={60}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export const PieChartXs = ({ data = pieChartData }: PieChartProps) => {
  return (
    <ResponsiveContainer height={160} className={styles.maxW625}>
      <RechartsPieChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
        <Tooltip content={<ChartTooltipContent isPieChart />} />
        <Pie
          isAnimationActive={false}
          startAngle={-270}
          endAngle={-630}
          stroke="none"
          data={data}
          dataKey="value"
          nameKey="name"
          fill="currentColor"
          innerRadius={40}
          outerRadius={80}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export const PieChartSm = ({ data = pieChartData }: PieChartProps) => {
  return (
    <ResponsiveContainer height={200} className={styles.maxW725}>
      <RechartsPieChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
        <Tooltip content={<ChartTooltipContent isPieChart />} />
        <Pie
          isAnimationActive={false}
          startAngle={-270}
          endAngle={-630}
          stroke="none"
          data={data}
          dataKey="value"
          nameKey="name"
          fill="currentColor"
          innerRadius={50}
          outerRadius={100}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export const PieChartMd = ({ data = pieChartData }: PieChartProps) => {
  return (
    <ResponsiveContainer height={240} className={styles.maxW96}>
      <RechartsPieChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
        <Tooltip content={<ChartTooltipContent isPieChart />} />
        <Pie
          isAnimationActive={false}
          startAngle={-270}
          endAngle={-630}
          stroke="none"
          data={data}
          dataKey="value"
          nameKey="name"
          fill="currentColor"
          innerRadius={60}
          outerRadius={120}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export const PieChartLg = ({ data = pieChartData }: PieChartProps) => {
  return (
    <ResponsiveContainer height={280} className={styles.maxW96}>
      <RechartsPieChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
        <Tooltip content={<ChartTooltipContent isPieChart />} />
        <Pie
          isAnimationActive={false}
          startAngle={-270}
          endAngle={-630}
          stroke="none"
          data={data}
          dataKey="value"
          nameKey="name"
          fill="currentColor"
          innerRadius={70}
          outerRadius={140}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

