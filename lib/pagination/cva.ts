import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

const typeConfig = {
  'page-default': css.pageDefault,
  'card-minimal-right': css.cardMinimalRight,
  'card-minimal-left': css.cardMinimalLeft,
  'card-minimal-center': css.cardMinimalCenter,
  'card-button-group': css.cardButtonGroup,
} as const;

const shapeConfig = {
  circle: css.circle,
  square: css.square,
} as const;

const breakpointConfig = {
  desktop: css.desktop,
  mobile: css.mobile,
} as const;

export const variants = cva('', {
  variants: {
    type: typeConfig,
    shape: shapeConfig,
    breakpoint: breakpointConfig,
  },
  defaultVariants: {
    type: 'page-default',
    shape: 'circle',
    breakpoint: 'desktop',
  },
});

export type IVariants = VariantProps<typeof variants>;

export const typeOptions = Object.keys(typeConfig);
export const shapeOptions = Object.keys(shapeConfig);
export const breakpointOptions = Object.keys(breakpointConfig);
