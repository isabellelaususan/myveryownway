import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import * as React from 'react';
import {cn} from '~/utils';

const buttonVariants = cva(
  'whitespace-nowrap font-MontserratBold rounded-full uppercase px-10 py-2.5 text-[32px] shadow-custom cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        shop: 'bg-fullGreen hover:bg-shop',
        mixMatch: 'bg-orange hover:bg-connect px-20',
        connect: 'bg-cerulean hover:bg-connect px-16',
        tag: 'bg-pink hover:bg-tag px-20',
        buy: 'bg-orange hover:bg-connect shadow-none',
        cart: 'bg-transparent hover:bg-black hover:text-white border-8 border-black shadow-none',
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({variant, className}))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
