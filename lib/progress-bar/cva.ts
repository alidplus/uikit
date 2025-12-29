import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const labelConfig = {
  none: css.labelNone,
  right: css.labelRight,
  bottom: css.labelBottom,
  inside: css.labelInside,
  'top-floating': css.labelTopFloating,
  'bottom-floating': css.labelBottomFloating,
} as const;

export const variants = cva('', {
  variants: {
    label: labelConfig,
  },
  defaultVariants: {
    label: 'none',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const labelOptions = Object.keys(labelConfig);
