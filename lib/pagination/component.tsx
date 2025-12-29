import cn from 'classnames';
import { useMemo, type ComponentProps } from 'react';
import { Button } from '../buttons/component';
import { AltArrowLeft, AltArrowRight } from '../icons';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends ComponentProps<'nav'> {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  type?:
    | 'page-default'
    | 'card-minimal-right'
    | 'card-minimal-left'
    | 'card-minimal-center'
    | 'card-button-group';
  shape?: 'circle' | 'square';
  breakpoint?: 'desktop' | 'mobile';
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type PaginationProps = TExternalVariants & Props;

// Helper function to generate page numbers with ellipsis
function generatePageNumbers(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    if (currentPage <= 3) {
      // Near the start: 1, 2, 3, ..., 8, 9, 10
      for (let i = 2; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      // Near the end: 1, 2, ..., 7, 8, 9, 10
      pages.push(2);
      pages.push('ellipsis');
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // In the middle: 1, 2, ..., 5, 6, 7, ..., 9, 10
      pages.push(2);
      pages.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    }
  }

  return pages;
}

export function Pagination({
  type = 'page-default',
  shape = 'circle',
  breakpoint = 'desktop',
  currentPage: currentPageProp,
  totalPages = 10,
  onPageChange,
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
  className: extClassName,
  ...restProps
}: PaginationProps) {
  const currentPage = currentPageProp ?? 1;

  const pageNumbers = useMemo(
    () => generatePageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    } else if (onPageChange && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (onPageChange && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: string | number) => {
    if (onPageChange) {
      onPageChange(Number(page));
    }
  };

  const isPreviousDisabled = previousDisabled ?? currentPage === 1;
  const isNextDisabled = nextDisabled ?? currentPage === totalPages;

  const className = cn(
    css.root,
    variants({
      type,
      shape,
      breakpoint,
    }),
    extClassName,
  );

  // Page default - Circle - Desktop
  if (type === 'page-default' && shape === 'circle' && breakpoint === 'desktop') {
    return (
      <nav className={className} {...restProps}>
        <div className={css.buttonWrap}>
          <button
            type="button"
            className={css.navButton}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
            aria-label="Previous"
          >
            <AltArrowLeft className={css.navIcon} />
            <span className={css.navText}>Previous</span>
          </button>
        </div>

        <div className={css.pageNumbers}>
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <div key={`ellipsis-${index}`} className={css.pageNumber}>
                  <span className={css.pageText}>...</span>
                </div>
              );
            }
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                className={cn(css.pageNumber, {
                  [css.pageActive]: isActive,
                })}
                onClick={() => handlePageClick(page)}
                aria-label={`Page ${page}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={css.pageText}>{page}</span>
              </button>
            );
          })}
        </div>

        <div className={css.buttonWrap}>
          <button
            type="button"
            className={css.navButton}
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Next"
          >
            <span className={css.navText}>Next</span>
            <AltArrowRight className={css.navIcon} />
          </button>
        </div>
      </nav>
    );
  }

  // Page default - Square - Mobile
  if (type === 'page-default' && shape === 'square' && breakpoint === 'mobile') {
    return (
      <nav className={className} {...restProps}>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          iconOnly
          className={css.iconButton}
          onClick={handlePrevious}
          disabled={isPreviousDisabled}
          aria-label="Previous"
          icStart={<AltArrowLeft />}
        />
        <span className={css.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          iconOnly
          className={css.iconButton}
          onClick={handleNext}
          disabled={isNextDisabled}
          aria-label="Next"
          icStart={<AltArrowRight />}
        />
      </nav>
    );
  }

  // Card minimal right aligned
  if (type === 'card-minimal-right') {
    return (
      <nav className={className} {...restProps}>
        <span className={css.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <div className={css.actions}>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </nav>
    );
  }

  // Card minimal left aligned
  if (type === 'card-minimal-left') {
    return (
      <nav className={className} {...restProps}>
        <div className={css.actions}>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
        <span className={css.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
      </nav>
    );
  }

  // Card minimal center aligned
  if (type === 'card-minimal-center') {
    return (
      <nav className={className} {...restProps}>
        <div className={css.buttonWrap}>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            Previous
          </Button>
        </div>
        <span className={css.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <div className={css.buttonWrap}>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className={css.actionButton}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </nav>
    );
  }

  // Card button group center aligned
  if (type === 'card-button-group') {
    const isMobile = breakpoint === 'mobile';
    const mobilePageNumbers =
      totalPages <= 5
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : [1, 2, 'ellipsis', totalPages - 1, totalPages];

    return (
      <nav className={className} {...restProps}>
        <div className={css.buttonGroup}>
          <button
            type="button"
            className={cn(css.groupButton, css.groupNavButton)}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
            aria-label="Previous"
          >
            {isMobile ? (
              <AltArrowLeft className={css.groupIcon} />
            ) : (
              <>
                <AltArrowLeft className={css.groupIcon} />
                <span className={css.groupNavText}>Previous</span>
              </>
            )}
          </button>

          {(isMobile ? mobilePageNumbers : pageNumbers).map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <div key={`ellipsis-${index}`} className={css.groupButton}>
                  <span className={css.groupPageText}>...</span>
                </div>
              );
            }
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                className={cn(css.groupButton, {
                  [css.groupButtonActive]: isActive,
                })}
                onClick={() => handlePageClick(page)}
                aria-label={`Page ${page}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={css.groupPageText}>{page}</span>
              </button>
            );
          })}

          {!isMobile && (
            <button
              type="button"
              className={cn(css.groupButton, css.groupNavButton)}
              onClick={handleNext}
              disabled={isNextDisabled}
              aria-label="Next"
            >
              <span className={css.groupNavText}>Next</span>
              <AltArrowRight className={css.groupIcon} />
            </button>
          )}

          {isMobile && (
            <button
              type="button"
              className={cn(css.groupButton, css.groupNavButton)}
              onClick={handleNext}
              disabled={isNextDisabled}
              aria-label="Next"
            >
              <AltArrowRight className={css.groupIcon} />
            </button>
          )}
        </div>
      </nav>
    );
  }

  return null;
}

Pagination.displayName = 'Pagination';
