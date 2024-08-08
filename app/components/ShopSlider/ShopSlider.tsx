'use client';
import type {FC} from 'react';
import {useRef, useState} from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {Arrows} from './Arrows';
import {defaultSettings} from './config';
import {_arrowPosition} from './constants';
import type {SliderProps} from './types';

const ShopSlider: FC<SliderProps> = ({
  children,
  settings,
  arrowPosition = _arrowPosition,
  className = '',
  hideArrow = false,
}) => {
  const _settings = defaultSettings(settings);
  const ref = useRef<SlickSlider>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {!hideArrow && arrowPosition.horizontal !== 'bottom' && (
        <Arrows
          sliderRef={ref}
          arrowPosition={arrowPosition}
          activeIndex={activeIndex}
        />
      )}
      <SlickSlider
        ref={ref}
        {..._settings}
        className={className}
        beforeChange={(_, next) => setActiveIndex(next)}
      >
        {children}
      </SlickSlider>
      {!hideArrow && arrowPosition.horizontal === 'bottom' && (
        <Arrows
          sliderRef={ref}
          arrowPosition={arrowPosition}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
};

export default ShopSlider;
