import cn from 'classnames';
import { type ComponentProps } from 'react';
import { AltArrowLeft, AltArrowRight } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'nav'> {
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
        <AltArrowLeft className={css.icon} aria-hidden="true" />
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
        <AltArrowRight className={css.icon} aria-hidden="true" />
      </button>
    </nav>
  );
}

Pagination.displayName = 'Pagination';
