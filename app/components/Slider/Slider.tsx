import type {MyVeryProps} from './types';

function Slider({mySlider}: MyVeryProps) {
  return (
    <div className="overflow-hidden flex border-y-[3px] border-black py-7">
      <div className="flex gap-14 animate-marquee">
        {mySlider.map((slider) => (
          <div
            key={slider.id}
            className="flex shrink-0 w-auto items-center gap-14"
          >
            <img
              alt={slider.alt}
              src={slider.image}
              className="w-auto"
              height={45}
              width={45}
            />
            <div className="text-[30px] font-MontserratBold">
              {slider.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
