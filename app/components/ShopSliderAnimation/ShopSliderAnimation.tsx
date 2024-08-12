import {Image} from '@shopify/hydrogen';
import {useState} from 'react';

const images = {
  Straps: [
    '/Shop/mixMatch/strap.png',
    '/Shop/mixMatch/strap.png',
    '/Shop/mixMatch/strap.png',
  ],
  Accessories: [
    '/Shop/mixMatch/accessories.png',
    '/Shop/mixMatch/accessories.png',
    '/Shop/mixMatch/accessories.png',
  ],
  Bag: [
    '/Shop/mixMatch/pouch.png',
    '/Shop/mixMatch/pouch.png',
    '/Shop/mixMatch/pouch.png',
  ],
  Pouches: [
    '/Shop/mixMatch/bag.png',
    '/Shop/mixMatch/bag.png',
    '/Shop/mixMatch/bag.png',
  ],
};

type ImageTypes = keyof typeof images;

interface SliderProps {
  type: ImageTypes;
}

const ShopSliderAnimation = ({type}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images[type].length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images[type].length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative 2xl:w-[249px] md:w-[200px] w-[75px] max-w-xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {images[type] &&
          images[type].map((image) => (
            <div
              key={image}
              className="md:min-w-full min-w-[75px] 2xl:h-[253px] md:h-[203px] h-[75px] bg-center bg-contain"
              style={{backgroundImage: `url(${image})`}}
            />
          ))}
      </div>
      <div className="overflow-visible">
        <button
          className="flex items-center justify-center absolute top-1/2 left-2 transform -translate-y-1/2 bg-aqua hover:bg-brown 2xl:w-11 w-8 2xl:h-11 h-8 rounded-full"
          onClick={goToPrevious}
        >
          <Image
            srcSet="/icons/prevArrow.svg"
            width={13}
            className="2xl:w-[13px] w-2"
          />
        </button>
        <button
          className="flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2 bg-aqua hover:bg-brown 2xl:w-11 w-8 2xl:h-11 h-8 rounded-full"
          onClick={goToNext}
        >
          <Image
            srcSet="/icons/nextArrow.svg"
            width={13}
            className="2xl:w-[13px] w-2"
          />
        </button>
      </div>
    </div>
  );
};

export default ShopSliderAnimation;
