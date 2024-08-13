import React, {useEffect, useRef, useState} from 'react';
import DownArrow from '~/assets/Icons/DownArrow';
import ShopSliderAnimation from '../ShopSliderAnimation/ShopSliderAnimation';
import type {MixMatchProps} from './types';

const optionsData = {
  Straps: [
    'Mini',
    'Short',
    'Adjustable',
    'Nylon',
    'Curly',
    // 'Long Curly',
    // 'Classy',
    // 'Chain',
    // 'Pearl',
  ],
  Accessories: [
    'Flower',
    'Star',
    'Heart',
    'Curvy',
    // 'Zigzag',
    // 'Music Note',
    // 'Butterfly',
    // 'Moon',
    // 'Clover',
    // 'Alphabet',
  ],
  Bag: [
    'Daisy',
    'Iris',
    'Poppy',
    'Lily',
    'Tulip',
    // 'Party',
    // 'Jolly',
    // 'Dimsum',
    // 'Bossy',
    // 'Journey',
  ],
  Pouches: ['Boxie', 'Love', 'Round'],
} as {
  Straps: string[];
  Pouches: string[];
  Bag: string[];
  Accessories: string[];
};

const tailwindClasses = [
  'hover:bg-[#00BE5C]',
  'hover:bg-[#FA8526]',
  'hover:bg-[#00AFE3]',
  'hover:bg-[#83BC29]',
  'hover:bg-[#903BF8]',
  'hover:bg-[#F5AD2C]',
  'hover:bg-[#FE88FB]',
  'hover:bg-[#00AFE3]',
];

const ShopMixMatch = ({type, className, ...props}: MixMatchProps) => {
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
    <div className="2xl:p-7 p-4 !pt-0" ref={dropdownRef} {...props}>
      <div className="2xl:min-w-60 min-w-56 relative top-0 flex justify-center">
        <div
          role="button"
          tabIndex={0}
          className={`select bg-black text-white md:border-[3px] border-[1px] border-black flex justify-between items-center rounded-full md:px-5 px-2 md:py-1 py-0 md:mb-5 mb-1 transition-all duration-300 2xl:text-[28px] md:text-xl text-[9px] w-full md:font-MontserratBold font-MontserratSemiBold capitalize cursor-pointer leading-none ${
            isMenuOpen ? '!bg-[#f4eded] !text-black' : ''
          }`}
          onClick={handleSelectClick}
          onKeyDown={(e) => handleKeyDown(e as any, '')}
        >
          {selectedOption || type}
          <div
            className={`2xl:w-9 w-7 2xl:h-9 h-7 bg-softPeach flex justify-center items-center rounded-full pointer-events-none ${
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
          className={`absolute w-full md:top-14 top-4 left-2/4 text-2xl opacity-0 hidden bg-black text-white md:rounded-[30px] rounded-lg transform -translate-x-1/2 transition duration-200 z-10 font-MontserratRegular ${
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
              className={`2xl:py-2 py-1.5 md:px-10 px-3 md:rounded-[30px] rounded-lg cursor-pointer 2xl:text-2xl text-xl leading-normal ${
                tailwindClasses[index % tailwindClasses.length]
              }`}
            >
              <div className="[transition:transform_.2s] hover:[transform:_scale(1.1)]">
                {option}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ShopSliderAnimation type={type} />
    </div>
  );
};

ShopMixMatch.displayName = 'ShopMixMatch';

export default ShopMixMatch;
