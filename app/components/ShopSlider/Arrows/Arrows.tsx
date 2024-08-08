import type {FC} from 'react';
import Arrow from '~/assets/Icons/Arrow';
import {cn} from '~/utils';
import {_arrowPosition, verticalPosition} from '../constants';
import type {ArrowProps} from '../types';

const Arrows: FC<ArrowProps> = ({
  sliderRef,
  arrowPosition = _arrowPosition,
}) => (
  <>
    <div
      className={cn(
        'flex flex-row items-center gap-[18px] md:absolute bottom-[8rem] left-auto justify-center right-0 xl:bottom-[4rem] -z-0 md:mt-0 mt-4',
        arrowPosition.vertical
          ? verticalPosition[arrowPosition.vertical]
          : 'justify-end md:flex hidden',
      )}
    >
      <div className="text-white hover:text-secondary cursor-pointer">
        <Arrow
          className="rotate-180 w-6 h-6"
          onClick={() => sliderRef?.current?.slickPrev()}
        />
      </div>
      <div className="text-white hover:text-secondary cursor-pointer">
        <Arrow
          className="w-6 h-6"
          onClick={() => sliderRef?.current?.slickNext()}
        />
      </div>
    </div>
  </>
);

export default Arrows;
