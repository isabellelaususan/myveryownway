import {Slot} from '@radix-ui/react-slot';
import React from 'react';
import type {ProductProps} from './types';

type CardElement = HTMLElement | HTMLDivElement;

const ProductView = React.forwardRef<CardElement, ProductProps>(
  ({img, bagName, price, icon, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className="border-[3px] border-black rounded-[45px]"
        ref={ref as React.LegacyRef<HTMLDivElement>}
        {...props}
      >
        <div>
          <img src={img} alt="shop" className="rounded-t-[42px]" />
        </div>
        <div className="py-7 px-12 flex items-end justify-between border-t-2 border-black">
          <div>
            <h4 className="text-4xl mb-4 font-bold">{bagName}</h4>
            <p className="text-xl font-medium">{price}</p>
          </div>
          <div className="bg-fullGreen rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
            <img src={icon} alt="shop" />
          </div>
        </div>
      </Comp>
    );
  },
);
ProductView.displayName = 'ProductView';

export default ProductView;
