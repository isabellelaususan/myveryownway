export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  asChild?: boolean;
  img?: string | undefined;
}
