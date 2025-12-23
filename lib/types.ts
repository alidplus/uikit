import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface DataProps<T> {
  data: T;
}

export interface ValueProps<T> {
  value?: T;
}

export interface InputProps<T> extends ValueProps<T> {
  onChange: Dispatch<SetStateAction<T>>;
}

export interface IOptionValue<T extends string = string> {
  value: T;
  label?: string;
  icon?: ReactNode;
  text?: string;
  disabled?: boolean;
  onClick?: VoidFunction;
}
