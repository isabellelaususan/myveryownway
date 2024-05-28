import {clsx, type ClassValue} from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const getClassNames = (defaultClassName: string, ...rest: string[]) =>
  [defaultClassName, ...rest].filter((name) => name.trim() !== '').join(' ');
