import cn from 'classnames';
import { type ComponentProps, type ReactNode } from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'nav'> {
  previousTitle?: ReactNode;
  nextTitle?: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type PaginationProps = TExternalVariants & Props;

export function Pagination({
  size,
  className: extClassName,
  previousTitle,
  nextTitle,
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
  ...restProps
}: PaginationProps) {
  const className = cn(
    css.root,
    variants({
      size: size,
    }),
    extClassName,
  );

  return (
    <nav className={className} {...restProps}>
      <button
        type="button"
        className={cn(css.item, css.previous, {
          [css.disabled]: previousDisabled,
        })}
        onClick={onPrevious}
        disabled={previousDisabled}
        aria-label="Previous"
      >
        <span className={css.label}>Previous</span>
        <div className={css.content}>
          {previousTitle && <span className={css.title}>{previousTitle}</span>}
        </div>
        <span className={css.icon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 14L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <button
        type="button"
        className={cn(css.item, css.next, {
          [css.disabled]: nextDisabled,
        })}
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next"
      >
        <span className={css.label}>Next</span>
        <div className={css.content}>
          {nextTitle && <span className={css.title}>{nextTitle}</span>}
        </div>
        <span className={css.icon} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 14L12 10.5L8.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </nav>
  );
}

Pagination.displayName = 'Pagination';
