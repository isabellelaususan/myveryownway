import {Image} from '@shopify/hydrogen';
import type {MyVeryProps} from './types';

function Slider({mySlider}: MyVeryProps) {
  return (
    <div className="overflow-hidden flex border-y-[3px] border-black lg:py-7 py-5">
      <div className="flex lg:gap-14 gap-10 animate-marquee">
        {mySlider.map((slider) => (
          <div
            key={slider.id}
            className="flex shrink-0 w-auto items-center lg:gap-14 gap-10"
          >
            <Image
              alt={slider.alt}
              srcSet={slider.image}
              className="lg:w-[45px] w-7"
              width={45}
            />
            <div className="lg:text-[30px] text-2xl font-MontserratBold">
              {slider.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
