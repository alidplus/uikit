import cn from 'classnames';
import { type ComponentProps } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'div'> {
  type?: 'line-simple' | 'line-spinner' | 'dot-circle';
  supportingText?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type SpinnerProps = TExternalVariants & Props;

export function Spinner({
  type = 'line-simple',
  size = 'md',
  supportingText = true,
  className: extClassName,
  ...restProps
}: SpinnerProps) {
  const className = cn(
    css.root,
    variants({
      type,
      size,
    }),
    extClassName,
  );

  const isSmall = size === 'sm' || size === 'md';
  const textSize = isSmall ? css.textSmall : css.textLarge;

  return (
    <div className={className} {...restProps}>
      <div className={css.content}>
        <div className={css.spinner}>
          {type === 'line-simple' && (
            <div className={css.lineSimple}>
              <svg
                className={css.spinnerSvg}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={css.circleTrack}
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle
                  className={css.circleArc}
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#b5ff00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="44 176"
                  strokeDashoffset="0"
                  transform="rotate(-90 32 32)"
                />
              </svg>
            </div>
          )}
          {type === 'line-spinner' && (
            <div className={css.lineSpinner}>
              <svg
                className={css.spinnerSvg}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={css.circleTrack}
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                />
                <circle
                  className={css.circleArc}
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#b5ff00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  strokeDashoffset="0"
                  transform="rotate(-90 32 32)"
                />
              </svg>
            </div>
          )}
          {type === 'dot-circle' && (
            <div className={css.dotCircle}>
              <svg
                className={css.spinnerSvg}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 360) / 8;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 24;
                  const cx = 32 + radius * Math.sin(radian);
                  const cy = 32 - radius * Math.cos(radian);
                  return (
                    <circle
                      key={i}
                      className={css.dot}
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill="#b5ff00"
                      style={{
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  );
                })}
              </svg>
            </div>
          )}
        </div>
        {supportingText && <p className={cn(css.supportingText, textSize)}>Loading...</p>}
      </div>
    </div>
  );
}

Spinner.displayName = 'Spinner';
