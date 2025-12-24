import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const variantsConfig = {
  primary: css.primary,
  secondary: css.secondary,
  tertiary: css.tertiary,
  destructive: css.destructive,
} as const;

const sizesConfig = {
  sm: css.small,
  lg: css.large,
} as const;

const iconOnlyConfig = {
  true: css.iconOnly,
} as const;

export const variants = cva(css.btn, {
  variants: {
    variant: variantsConfig,
    disabled: {
      true: css.disabled,
    },
    size: sizesConfig,
    outline: {
      true: css.outline,
    },
    block: {
      true: css.block,
    },
    loading: {
      true: css.loading,
    },
    hasIconStart: {
      true: css.hasIconStart,
    },
    hasIconEnd: {
      true: css.hasIconEnd,
    },
    iconOnly: {
      true: css.iconOnly,
    }
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const sizeOptions = Object.keys(sizesConfig);
export const variantOptions = Object.keys(variantsConfig);
export const iconoptions = Object.keys(iconOnlyConfig);
