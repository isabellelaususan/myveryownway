export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
  children?: string | React.ReactNode;
  bagName: React.ReactNode;
  price: React.ReactNode;
  asChild?: boolean;
  img?: string;
  icon?: string | React.ReactNode;
}
