import React, {useEffect, useRef, useState} from 'react';
import DownArrow from '~/assets/Icons/DownArrow';
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
  Bag: [
    'Daisy',
    'Iris',
    'Poppy',
    'Lily',
    'Tulip',
    'Party',
    'Jolly',
    'Dimsum',
    'Bossy',
    'Journey',
  ],
  Pouches: ['Boxie', 'Love', 'Round'],
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
    <div className="md:p-7 p-2 !pt-0" ref={dropdownRef}>
      <div className="md:min-w-60 min-w-20 relative top-0 flex justify-center">
        <div
          role="button"
          tabIndex={0}
          className={`select bg-black text-white md:border-[3px] border-[1px] border-black flex justify-between items-center rounded-full md:px-7 px-2 md:py-1.5 py-0 md:mb-5 mb-1 transition-all duration-300 md:text-[32px] text-[9px] w-full md:font-MontserratBold font-MontserratSemiBold capitalize cursor-pointer ${
            isMenuOpen ? '!bg-[#f4eded] !text-black' : ''
          }`}
          onClick={handleSelectClick}
          onKeyDown={(e) => handleKeyDown(e as any, '')}
        >
          {selectedOption || type}
          <div
            className={`md:w-9 w-2.5 md:h-9 h-2.5 bg-softPeach flex justify-center items-center rounded-full pointer-events-none ${
              isMenuOpen ? '!bg-black' : ''
            }`}
          >
            <DownArrow
              className={`text-black transition-all duration-300 pointer-events-none rotate-90 md:w-5 w-1.5 ${
                isMenuOpen ? 'text-white !rotate-0' : ''
              }`}
            />
          </div>
        </div>
        <ul
          className={`absolute w-full md:top-16 top-4 left-2/4 text-2xl opacity-0 hidden bg-black text-white md:rounded-[19px] rounded-lg transform -translate-x-1/2 transition duration-200 z-10 font-MontserratRegular ${
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
              className="hover:bg-lightGreen md:py-2 py-0.5 md:px-10 px-3 md:rounded-[19px] rounded-lg cursor-pointer md:text-2xl text-[10px] leading-normal"
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
