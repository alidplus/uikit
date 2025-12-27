import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const severityConfig = {
  alert: css.alert,
  error: css.alert,
  info: css.info,
  warn: css.warn,
} as const;

const variantConfig = {
  block: css.block,
  inline: css.inline,
  banner: css.banner,
} as const;

export const variants = cva(css.root, {
  variants: {
    severity: severityConfig,
    variant: variantConfig,
    banner: {
      true: css.banner,
    },
  },
  defaultVariants: {},
});

export type IVariants = VariantProps<typeof variants>;

export const severityOptions = Object.keys(severityConfig);
export const variantOptions = Object.keys(variantConfig);
