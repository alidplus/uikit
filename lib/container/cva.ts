import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

export const variants = cva(css.container, {
  variants: {
    fluid: {
      true: css.fluid,
    },
  },
  defaultVariants: {},
});

export type IVariants = VariantProps<typeof variants>;
