import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import * as React from 'react';
import {cn} from '~/utils';

const buttonVariants = cva(
  'whitespace-nowrap font-MontserratBold rounded-full uppercase px-10 sm:py-4 py-1 lg:text-[32px] md:text-2xl text-sm shadow-custom cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        shop: 'bg-fullGreen hover:bg-shop lg:px-10 px-7 sm:!shadow-[8px_10px_0px_0px_#0e0d0d] !shadow-[4px_6px_0px_0px_#0e0d0d]',
        mixMatch:
          'bg-orange hover:bg-connect lg:!px-20 md:!px-14 !px-4 sm:!shadow-[8px_10px_0px_0px_#0e0d0d] !shadow-[4px_6px_0px_0px_#0e0d0d]',
        connect:
          'bg-cerulean hover:bg-connect lg:px-16 md:px-9 px-4 lg:text-[32px] md:text-2xl text-[11px] sm:!shadow-[8px_10px_0px_0px_#0e0d0d] !shadow-[3px_4px_0px_0px_#0e0d0d]',
        tag: 'bg-pink hover:bg-tag lg:px-20 md:px-11 px-6 lg:text-[32px] md:text-2xl text-xs sm:!shadow-[8px_10px_0px_0px_#0e0d0d] !shadow-[3px_4px_0px_0px_#0e0d0d]',
        buy: 'bg-fullGreen text-white hover:bg-buyHover shadow-none',
        cart: 'bg-transparent hover:bg-black hover:text-white border-8 border-black shadow-none',
        add: 'bg-transparent hover:bg-orange text-orange hover:text-white border-2 border-orange shadow-none py-4',
        addBlack:
          'bg-transparent hover:bg-fullGreen text-fullGreen hover:text-white border-4 border-fullGreen hover:border-fullGreen shadow-none',
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
