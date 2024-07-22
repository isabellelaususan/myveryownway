import {Image} from '@shopify/hydrogen';
import React, {useEffect, useRef, useState} from 'react';
import Slider from '../SliderAnimation/SliderAnimation';
import type {MixMatchProps} from './types';

const optionsData = {
  Straps: [
    'Mini',
    'Short',
    'Adjustable',
    'Nylon',
    'Curly',
    'Long Curly',
    'Classy',
    'Pearl',
  ],
  Accessories: [
    'Accessories',
    'Flower',
    'Star',
    'Heart',
    'Curvy',
    'Zigzag',
    'Music Note',
    'Butterfly',
    'Moon',
    'Clover',
    'Alphabet',
  ],
  Bag: ['Pouch', 'Boxie'],
  Pouches: ['Tulip', 'Boxie'],
} as {
  Straps: string[];
  Pouches: string[];
  Bag: string[];
  Accessories: string[];
};

const MixMatch = ({type}: MixMatchProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    option: string,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionClick(option);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options = optionsData[type as keyof typeof optionsData] || [];

  return (
    <div className="p-7 pt-0" ref={dropdownRef}>
      <div className="min-w-60 relative top-0 flex justify-center">
        <div
          role="button"
          tabIndex={0}
          className="select bg-black text-white flex justify-between items-center rounded-full px-7 py-2 mb-5 transition-all duration-300 text-[32px] w-full font-MontserratBold capitalize cursor-pointer"
          onClick={handleSelectClick}
          onKeyDown={(e) => handleKeyDown(e as any, '')}
        >
          {selectedOption || type}
          <div className="w-9 h-9 bg-softPeach flex justify-center items-center rounded-full pointer-events-none">
            <Image
              srcSet="/icons/downArrow.svg"
              className={`transition-all duration-300 pointer-events-none rotate-90 ${
                isMenuOpen ? '!rotate-0' : ''
              }`}
              width={20}
            />
          </div>
        </div>
        <ul
          className={`absolute w-full top-16 left-2/4 text-2xl opacity-0 hidden bg-black text-white rounded-[19px] transform -translate-x-1/2 transition duration-200 z-10 font-MontserratRegular ${
            isMenuOpen ? '!block !opacity-100' : ''
          }`}
        >
          {options.map((option: string, index: number) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={`${option}-${index}`}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={index}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => handleKeyDown(e, option)}
              className="hover:bg-lightGreen py-2 px-10 rounded-[19px] cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <Slider type={type} />
    </div>
  );
};

MixMatch.displayName = 'MixMatch';

export default MixMatch;
