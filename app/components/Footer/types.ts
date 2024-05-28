export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  asChild?: boolean;
  img?: string | undefined;
  heading: string;
  email: string;
  tel: string;
}
