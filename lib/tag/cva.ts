import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const sizesConfig = {
  sm: css.small,
  lg: css.large,
} as const;

export const variants = cva(css.root, {
  variants: {
    size: sizesConfig,
  },
  defaultVariants: {
  },
});

export type IVariants = VariantProps<typeof variants>;

export const sizeOptions = Object.keys(sizesConfig);

