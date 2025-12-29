'use client';

import cx from 'classnames';
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartLegendContent, ChartTooltipContent } from '../components';
import styles from './activity-gauges.module.scss';

const radialData = [
  { name: 'Series 3', value: 660, className: styles.colorBrand400 },
  { name: 'Series 2', value: 774, className: styles.colorBrand600 },
  { name: 'Series 1', value: 866, className: styles.colorBrand700 },
];

interface ActivityGaugeProps {
  title?: string;
  subtitle?: string;
  data?: {
    name: string;
    value: number;
    className?: string;
  }[];
}

export const ActivityGaugeXs = ({
  title = '1,000',
  subtitle = 'Active users',
  data = radialData,
}: ActivityGaugeProps) => {
  return (
    <ResponsiveContainer height={220}>
      <RadialBarChart
        data={data}
        accessibilityLayer
        innerRadius={52}
        outerRadius={86}
        startAngle={90}
        endAngle={360 + 90}
        className={styles.radialBarChart}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          content={<ChartLegendContent />}
        />
        <Tooltip content={<ChartTooltipContent isRadialChart />} />
        <RadialBar
          isAnimationActive={false}
          dataKey="value"
          cornerRadius={99}
          fill="currentColor"
          background={{ className: styles.fillGray100 }}
        />
        {(title || subtitle) && (
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            {subtitle && (
              <tspan
                x="50%"
                dy={title ? '-1.175em' : '1%'}
                className={cx(styles.fillCurrent, styles.textTertiary, styles.textXs, styles.fontMedium)}
              >
                {subtitle}
              </tspan>
            )}
            {title && (
              <tspan
                x="50%"
                dy={subtitle ? '1.25em' : '1%'}
                className={cx(styles.fillCurrent, styles.textPrimary, styles.textXl, styles.fontSemibold)}
              >
                {title}
              </tspan>
            )}
          </text>
        )}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export const ActivityGaugeSm = ({
  title = '1,000',
  subtitle = 'Active users',
  data = radialData,
}: ActivityGaugeProps) => {
  return (
    <ResponsiveContainer height={268}>
      <RadialBarChart
        data={data}
        accessibilityLayer
        innerRadius={61}
        outerRadius={110}
        startAngle={90}
        endAngle={360 + 90}
        className={styles.radialBarChart}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          content={<ChartLegendContent />}
        />
        <Tooltip content={<ChartTooltipContent isRadialChart />} />
        <RadialBar
          isAnimationActive={false}
          dataKey="value"
          cornerRadius={99}
          fill="currentColor"
          background={{ className: styles.fillGray100 }}
        />
        {(title || subtitle) && (
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            {subtitle && (
              <tspan
                x="50%"
                dy={title ? '-1.35em' : '1%'}
                className={cx(styles.fillCurrent, styles.textTertiary, styles.textXs, styles.fontMedium)}
              >
                {subtitle}
              </tspan>
            )}
            {title && (
              <tspan
                x="50%"
                dy={subtitle ? '1.15em' : '1%'}
                className={cx(styles.fillCurrent, styles.textPrimary, styles.textDisplayXs, styles.fontSemibold)}
              >
                {title}
              </tspan>
            )}
          </text>
        )}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export const ActivityGaugeMd = ({
  title = '1,000',
  subtitle = 'Active users',
  data = radialData,
}: ActivityGaugeProps) => {
  return (
    <ResponsiveContainer height={312}>
      <RadialBarChart
        data={data}
        accessibilityLayer
        innerRadius={74}
        outerRadius={132}
        startAngle={90}
        endAngle={360 + 90}
        className={styles.radialBarChart}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          content={<ChartLegendContent />}
        />
        <Tooltip content={<ChartTooltipContent isRadialChart />} />
        <RadialBar
          isAnimationActive={false}
          dataKey="value"
          cornerRadius={99}
          fill="currentColor"
          background={{ className: styles.fillGray100 }}
        />
        {(title || subtitle) && (
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            {subtitle && (
              <tspan
                x="50%"
                dy={title ? '-1.45em' : '1%'}
                className={cx(styles.fillCurrent, styles.textTertiary, styles.textSm, styles.fontMedium)}
              >
                {subtitle}
              </tspan>
            )}
            {title && (
              <tspan
                x="50%"
                dy={subtitle ? '1.075em' : '1%'}
                className={cx(styles.fillCurrent, styles.textPrimary, styles.textDisplaySm, styles.fontSemibold)}
              >
                {title}
              </tspan>
            )}
          </text>
        )}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export const ActivityGaugeLg = ({
  title = '1,000',
  subtitle = 'Active users',
  data = radialData,
}: ActivityGaugeProps) => {
  return (
    <ResponsiveContainer height={356}>
      <RadialBarChart
        data={data}
        accessibilityLayer
        innerRadius={84}
        outerRadius={154}
        startAngle={90}
        endAngle={360 + 90}
        className={styles.radialBarChart}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          content={<ChartLegendContent />}
        />
        <Tooltip content={<ChartTooltipContent isRadialChart />} />
        <RadialBar
          isAnimationActive={false}
          dataKey="value"
          cornerRadius={99}
          fill="currentColor"
          background={{ className: styles.fillGray100 }}
        />
        {(title || subtitle) && (
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            {subtitle && (
              <tspan
                x="50%"
                dy={title ? '-1.4em' : '1%'}
                className={cx(styles.fillCurrent, styles.textTertiary, styles.textSm, styles.fontMedium)}
              >
                {subtitle}
              </tspan>
            )}
            {title && (
              <tspan
                x="50%"
                dy={subtitle ? '1em' : '1%'}
                className={cx(styles.fillCurrent, styles.textPrimary, styles.textDisplayMd, styles.fontSemibold)}
              >
                {title}
              </tspan>
            )}
          </text>
        )}
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

