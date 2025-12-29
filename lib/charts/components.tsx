'use client';

import cx from 'classnames';
import type { TooltipProps } from 'recharts';
import type { Props as LegendContentProps } from 'recharts/types/component/DefaultLegendContent';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { Props as DotProps } from 'recharts/types/shape/Dot';
import styles from './styles.module.scss';

/**
 * Renders the legend content for a chart.
 * @param reversed - Whether to reverse the payload.
 * @param payload - The payload of the legend.
 * @param align - The alignment of the legend.
 * @param layout - The layout of the legend.
 * @param className - The class name of the legend.
 * @returns The legend content.
 */
export const ChartLegendContent = ({
  reversed,
  payload,
  align,
  layout,
  className,
}: LegendContentProps & { reversed?: boolean; className?: string }) => {
  payload = reversed ? payload?.toReversed() : payload;

  return (
    <ul
      className={cx(
        styles.legend,
        layout === 'vertical'
          ? cx(styles.vertical, {
              [styles.alignCenter]: align === 'center',
              [styles.alignRight]: align === 'right',
              [styles.alignLeft]: align === 'left',
            })
          : cx(styles.horizontal, {
              [styles.alignCenter]: align === 'center',
              [styles.alignRight]: align === 'right',
              [styles.alignLeft]: align === 'left',
            }),
        className,
      )}
    >
      {payload?.map((entry, index) => (
        <li className={styles.legendItem} key={index}>
          <span
            className={cx(styles.legendDot, (entry.payload as { className?: string })?.className)}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

interface ChartTooltipContentProps extends TooltipProps<ValueType, NameType> {
  isRadialChart?: boolean;
  isPieChart?: boolean;
  label?: string;
  // We have to use `any` here because the `payload` prop is not typed correctly in the `recharts` library.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const ChartTooltipContent = ({
  active,
  payload,
  label,
  isRadialChart,
  isPieChart,
  formatter,
  labelFormatter,
}: ChartTooltipContentProps) => {
  const canRender = active && payload && payload.length;

  if (!canRender) {
    return null;
  }

  const isSingleDataPoint = payload.length === 1;

  // If it's a single data point, we use the value as the title and
  // the name as the secondary title.
  let title = isSingleDataPoint
    ? isRadialChart
      ? payload[0].value
      : isPieChart
        ? payload[0].value
        : payload[0].value
    : label;
  let secondaryTitle = isSingleDataPoint
    ? isRadialChart
      ? payload[0].payload.name
      : isPieChart
        ? payload[0].name
        : label
    : payload;

  title =
    isSingleDataPoint && formatter
      ? formatter(title, payload?.[0].name || label, payload[0], 0, payload)
      : labelFormatter
        ? labelFormatter(title, payload)
        : title;
  secondaryTitle =
    isSingleDataPoint && labelFormatter ? labelFormatter(secondaryTitle, payload) : secondaryTitle;

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipTitle}>{title}</p>

      {!secondaryTitle ? null : Array.isArray(secondaryTitle) ? (
        <div>
          {secondaryTitle.map((entry, index) => (
            <p key={index} className={styles.tooltipText}>
              {`${entry.name}: ${formatter ? formatter(entry.value, entry.name, entry, index, entry.payload) : entry.value}`}
            </p>
          ))}
        </div>
      ) : (
        <p className={styles.tooltipText}>{secondaryTitle}</p>
      )}
    </div>
  );
};

interface ChartActiveDotProps extends DotProps {
  // We have to use `any` here because the `payload` prop is not typed correctly in the `recharts` library.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const ChartActiveDot = ({ cx = 0, cy = 0 }: ChartActiveDotProps) => {
  const size = 12;

  return (
    <svg
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
    >
      <rect x="2" y="2" width="8" height="8" rx="6" className={styles.activeDot} strokeWidth="2" />
    </svg>
  );
};
