import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const typeConfig = {
  'line-simple': css.lineSimpleType,
  'line-spinner': css.lineSpinnerType,
  'dot-circle': css.dotCircleType,
} as const;

const sizeConfig = {
  sm: css.small,
  md: css.medium,
  lg: css.large,
  xl: css.xlarge,
} as const;

export const variants = cva('', {
  variants: {
    type: typeConfig,
    size: sizeConfig,
  },
  defaultVariants: {
    type: 'line-simple',
    size: 'md',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const typeOptions = Object.keys(typeConfig);
export const sizeOptions = Object.keys(sizeConfig);
