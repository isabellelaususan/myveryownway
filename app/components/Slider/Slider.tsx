import {Image} from '@shopify/hydrogen';
import type {MyVeryProps} from './types';

function Slider({mySlider}: MyVeryProps) {
  return (
    <div className="overflow-hidden flex lg:border-y-[3px] border-y-2 border-black lg:py-7 md:py-5 py-2.5">
      <div className="flex lg:gap-14 md:gap-10 gap-2.5 animate-marquee">
        {mySlider.map((slider) => (
          <div
            key={slider.id}
            className="flex shrink-0 w-auto items-center lg:gap-14 md:gap-10 gap-2.5"
          >
            <Image
              alt={slider.alt}
              srcSet={slider.image}
              className="lg:w-[45px] w-7"
              width={45}
            />
            <div className="lg:text-[30px] md:text-2xl text-base font-MontserratBold">
              {slider.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
