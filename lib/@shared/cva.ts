import { cva, type VariantProps } from 'class-variance-authority';
import border from './border.module.scss';
import flex from './flex.module.scss';
import padding from './padding.module.scss';
import radius from './radius.module.scss';
import shadow from './shadow.module.scss';
import variant from './variant.module.scss';

const flexConfig = {
  vertical: flex.vertical,
  horizontal: flex.horizontal,
  center: flex.center,
} as const;

const shadowsConfig = {
  none: shadow.none,
  xs: shadow.xs,
  sm: shadow.sm,
  md: shadow.md,
  lg: shadow.lg,
  xl: shadow.xl,
} as const;

const bordersConfig = {
  none: border.none,
  1: border.border1,
  2: border.border2,
  3: border.border3,
  4: border.border4,
  5: border.border5,
} as const;

const roundedConfig = {
  none: radius.none,
  xxs: radius.xxs,
  xs: radius.xs,
  sm: radius.sm,
  md: radius.md,
  lg: radius.lg,
  xl: radius.xl,
  xxl: radius.xxl,
  xxxl: radius.xxxl,
  rounded: radius.rounded,
} as const;

const paddingConfig = {
  none: padding.none,
  xs: padding.xs,
  sm: padding.sm,
  md: padding.md,
  lg: padding.lg,
  xl: padding.xl,
} as const;

const variantsConfig = {
  primary: variant.primary,
} as const;

export const sharedVariants = cva('', {
  variants: {
    variant: variantsConfig,
    pad: paddingConfig,
    level: shadowsConfig,
    border: bordersConfig,
    rounded: roundedConfig,
    flex: flexConfig,
  },
});

export type ISharedVariants = VariantProps<typeof sharedVariants>;

export const sharedArgTypes = {
  pad: { control: 'select', options: Object.keys(paddingConfig) },
  level: { control: 'select', options: Object.keys(shadowsConfig) },
  border: { control: 'select', options: Object.keys(bordersConfig) },
  rounded: { control: 'select', options: Object.keys(roundedConfig) },
  variant: { control: 'select', options: Object.keys(variantsConfig) },
  flex: { control: 'select', options: Object.keys(flexConfig) },
} as const;
