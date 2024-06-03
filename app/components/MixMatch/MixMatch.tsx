import {Image} from '@shopify/hydrogen';
import React, {useEffect, useRef, useState} from 'react';
import Slider from '../SliderAnimation/SliderAnimation';
import type {MixMatchProps} from './types';

const optionsData = {
  strap: ['Strap 1', 'Strap 2', 'Strap 3'],
  pouch: ['Pouch 1', 'Pouch 2', 'Pouch 3'],
  bag: ['Bag 1', 'Bag 2', 'Bag 3'],
  accessories: ['Accessories 1', 'Accessories 2', 'Accessories 3'],
} as {
  strap: string[];
  pouch: string[];
  bag: string[];
  accessories: string[];
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

  const options = optionsData[type] || [];

  return (
    <div className="w-2/4" ref={dropdownRef}>
      <div className="min-w-60 relative top-0 mt-10 mb-[17px] flex justify-center">
        <div
          role="button"
          tabIndex={0}
          className="select bg-black text-white flex justify-center items-center rounded-full px-7 py-2 transition-all duration-300 text-2xl w-auto gap-6 font-MontserratBold capitalize cursor-pointer"
          onClick={handleSelectClick}
          onKeyDown={(e) => handleKeyDown(e as any, '')}
        >
          {selectedOption || type}
          <div className="w-9 h-9 bg-softPeach flex justify-center items-center rounded-full pointer-events-none">
            <Image
              srcSet="/icons/downArrow.svg"
              className={`transition-all duration-300 pointer-events-none ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
              width={20}
            />
          </div>
        </div>
        <ul
          className={`absolute top-16 left-2/4 px-2 py-1 w-[-webkit-fill-available] opacity-0 hidden bg-black text-white rounded-md transform -translate-x-1/2 transition duration-200 z-10 font-MontserratRegular ${
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
              className="hover:bg-[#2a2d35] my-1 py-3 px-2 rounded-md cursor-pointer"
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
