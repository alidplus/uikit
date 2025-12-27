import { cva, type VariantProps } from 'class-variance-authority';
import css from './styles.module.scss';

export const variants = cva(css.root);

export type IVariants = VariantProps<typeof variants>;
