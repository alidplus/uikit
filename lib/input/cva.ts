import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const sizesConfig = {
  sm: css.small,
  default: css.default,
  lg: css.large,
} as const;

export const variants = cva(css.input, {
  variants: {
    size: sizesConfig,
    error: {
      true: css.error,
    },
    disabled: {
      true: css.disabled,
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const sizeOptions = Object.keys(sizesConfig);
