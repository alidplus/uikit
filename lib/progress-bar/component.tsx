import cn from 'classnames';
import { useMemo, type ComponentProps } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'div'> {
  value?: number;
  max?: number;
  label?: 'none' | 'right' | 'bottom' | 'inside' | 'top-floating' | 'bottom-floating';
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type ProgressBarProps = TExternalVariants & Props;

export function ProgressBar({
  value = 0,
  max = 100,
  label = 'none',
  className: extClassName,
  ...restProps
}: ProgressBarProps) {
  const percentage = useMemo(() => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    return Math.round((clampedValue / max) * 100);
  }, [value, max]);

  // Ensure 0% shows as 0 width, not a small amount
  const progressWidth = percentage === 0 ? '0' : `${percentage}%`;

  const className = cn(
    css.root,
    variants({
      label,
    }),
    extClassName,
  );

  const labelText = `${percentage}%`;

  // Calculate tooltip offset based on percentage
  const getTooltipOffset = () => {
    if (percentage === 0) return { right: '50%', transform: 'translateX(50%)' };
    if (percentage === 10 || percentage === 70) return { right: '-20px' };
    if (
      percentage === 20 ||
      percentage === 30 ||
      percentage === 40 ||
      percentage === 50 ||
      percentage === 60 ||
      percentage === 80 ||
      percentage === 90
    )
      return { right: '-21px' };
    if (percentage === 100) return { right: '-24px' };
    return { right: '-20px' };
  };

  return (
    <div className={className} {...restProps}>
      <div className={css.progressBar}>
        <div className={css.track}>
          <div
            className={css.progress}
            style={{ width: progressWidth }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={`Progress: ${percentage}%`}
            data-percentage={percentage}
          >
            {label === 'inside' && <span className={css.insideLabel}>{labelText}</span>}
            {label === 'top-floating' && percentage !== 0 && (
              <div className={css.floatingTooltip} data-position="top" style={getTooltipOffset()}>
                <div className={css.tooltipContent}>
                  <span className={css.tooltipText}>{labelText}</span>
                </div>
              </div>
            )}
            {label === 'bottom-floating' && percentage !== 0 && (
              <div
                className={css.floatingTooltip}
                data-position="bottom"
                style={getTooltipOffset()}
              >
                <div className={css.tooltipContent}>
                  <span className={css.tooltipText}>{labelText}</span>
                </div>
              </div>
            )}
            {(label === 'top-floating' || label === 'bottom-floating') && percentage !== 0 && (
              <div className={css.indicator} />
            )}
          </div>
          {/* Tooltip for 0% - positioned at left edge like other percentages */}
          {label === 'top-floating' && percentage === 0 && (
            <div className={css.floatingTooltip} data-position="top" data-zero="true">
              <div className={css.tooltipContent}>
                <span className={css.tooltipText}>{labelText}</span>
              </div>
            </div>
          )}
          {label === 'bottom-floating' && percentage === 0 && (
            <div className={css.floatingTooltip} data-position="bottom" data-zero="true">
              <div className={css.tooltipContent}>
                <span className={css.tooltipText}>{labelText}</span>
              </div>
            </div>
          )}
          {/* Indicator for 0% floating - positioned at left edge */}
          {(label === 'top-floating' || label === 'bottom-floating') && percentage === 0 && (
            <div className={css.indicator} data-zero="true" />
          )}
        </div>
        {label === 'right' && (
          <div className={css.rightLabel}>
            <span className={css.labelText}>{labelText}</span>
          </div>
        )}
        {label === 'bottom' && (
          <div className={css.bottomLabel}>
            <span className={css.labelText}>{labelText}</span>
          </div>
        )}
      </div>
    </div>
  );
}

ProgressBar.displayName = 'ProgressBar';
