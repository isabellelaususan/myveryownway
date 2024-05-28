import type {ButtonHTMLAttributes} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  link?: boolean;
  className?: string;
}
