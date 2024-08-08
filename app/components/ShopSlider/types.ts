import type {MutableRefObject} from 'react';
import type SlickSlider from 'react-slick';
import type {Settings} from 'react-slick';

export type ArrowPosition = {
  horizontal?: 'top' | 'bottom';
  vertical?: 'left' | 'center' | 'right';
};
export interface SliderProps {
  children: React.ReactNode;
  settings?: Settings;
  arrowPosition?: ArrowPosition;
  className?: string;
  hideArrow?: boolean;
}

export interface ArrowProps {
  arrowPosition?: ArrowPosition;
  sliderRef: MutableRefObject<SlickSlider | undefined>;
  activeIndex: number;
}
