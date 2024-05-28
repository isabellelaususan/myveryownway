import {Slot} from '@radix-ui/react-slot';
import React from 'react';
import type {CardProps} from './types';

type CardElement = HTMLElement | HTMLDivElement;

const Card = React.forwardRef<CardElement, CardProps>(
  ({children, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className="border-[3px] border-black rounded-[45px]"
        ref={ref as React.LegacyRef<HTMLDivElement>}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Card.displayName = 'Card';

export default Card;
