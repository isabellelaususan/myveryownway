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
    <div className="relative md:w-[249px] w-[75px] max-w-xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {images[type] &&
          images[type].map((image) => (
            <div
              key={image}
              className="md:min-w-full min-w-[75px] md:h-[253px] h-[75px] bg-center bg-contain"
              style={{backgroundImage: `url(${image})`}}
            />
          ))}
      </div>
      <div className="overflow-visible">
        <button
          className="flex items-center justify-center absolute top-1/2 left-2 transform -translate-y-1/2 bg-aqua hover:bg-brown md:w-11 w-3.5 md:h-11 h-3.5 rounded-full"
          onClick={goToPrevious}
        >
          <Image
            srcSet="/icons/prevArrow.svg"
            width={13}
            className="md:w-[13px] w-1.5"
          />
        </button>
        <button
          className="flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2 bg-aqua hover:bg-brown md:w-11 w-3.5 md:h-11 h-3.5 rounded-full"
          onClick={goToNext}
        >
          <Image
            srcSet="/icons/nextArrow.svg"
            width={13}
            className="md:w-[13px] w-1.5"
          />
        </button>
      </div>
    </div>
  );
};

export default ShopSliderAnimation;
