import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const sizesConfig = {
  sm: css.small,
  lg: css.large,
} as const;

const severityConfig = {
  info: css.info,
  success: css.success,
  warning: css.warning,
  error: css.error,
} as const;

const variantConfig = {
  filled: css.filled,
  outlined: css.outlined,
  text: css.text,
} as const;

export const variants = cva(css.root, {
  variants: {
    size: sizesConfig,
    severity: severityConfig,
    variant: variantConfig,
  },
  defaultVariants: {},
});

export type IVariants = VariantProps<typeof variants>;

export const sizeOptions = Object.keys(sizesConfig);
