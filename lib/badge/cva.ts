import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const variantConfig = {
  default: css.default,
  brand: css.brand,
  completed: css.completed,
  pending: css.pending,
  failed: css.failed,
} as const;

export const variants = cva(css.root, {
  variants: {
    variant: variantConfig,
    outline: {
      true: css.outline,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const variantOptions = Object.keys(variantConfig);
