import {Slot} from '@radix-ui/react-slot';
import React from 'react';
import {socialMedia} from './constants';
import type {FooterProps} from './types';

type CardElement = HTMLElement | HTMLDivElement;

const Card = React.forwardRef<CardElement, FooterProps>(
  ({children, heading, email, tel, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className="flex border-t-2 w-full"
        ref={ref as React.LegacyRef<HTMLDivElement>}
        {...props}
      >
        <div className="border-r-2 w-3/5 pt-56 pl-60 pb-20 relative">
          <img
            src="/assets/icons/black-zigzag.svg"
            alt="blackZigzag"
            className="absolute left-0"
            width={150}
          />
          <img
            src="/assets/icons/black-heart.svg"
            alt="blackHeart"
            className="absolute top-16 right-56"
            width={160}
          />
          <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
          <div className="flex flex-col">
            <a
              href="mailto:myveryownway.official@gmail.com"
              className="text-2xl mb-3"
            >
              myveryownway.official@gmail.com
            </a>
            <a href="tel:(+66) 90-969-3000" className="text-2xl font-medium">
              <span className="font-bold">Tel.</span> (+66) 90-969-3000
            </a>
          </div>
        </div>
        <div className="w-3/5 pt-56 pl-80 relative">
          <img
            src="/assets/icons/curvround.svg"
            alt="curvround"
            width={140}
            className="absolute left-20"
          />
          <img
            src="/assets/icons/half-round.svg"
            alt="curvround"
            width={140}
            className="absolute left-96 top-0"
          />
          <ul className="text-2xl px-14 grid grid-cols-2 gap-7">
            {socialMedia.map((menu, index: number) => (
              <div key={menu.label} className="flex gap-3">
                <img src={menu.icon} alt="icon" width={40} />
                <li key={index}>{menu.label}</li>
              </div>
            ))}
          </ul>
        </div>
      </Comp>
    );
  },
);
Card.displayName = 'Card';

export default Card;
