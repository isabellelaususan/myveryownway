import {Image} from '@shopify/hydrogen';
import {useState} from 'react';

const images = {
  Mini: [
    '/Shop/mixMatch/strap.png',
    '/Shop/mixMatch/strap.png',
    '/Shop/mixMatch/strap.png',
  ],
  Round: [
    '/Shop/mixMatch/pouch.png',
    '/Shop/mixMatch/pouch.png',
    '/Shop/mixMatch/pouch.png',
  ],
  Tulip: [
    '/Shop/mixMatch/bag.png',
    '/Shop/mixMatch/bag.png',
    '/Shop/mixMatch/bag.png',
  ],
  Zigzag: [
    '/Shop/mixMatch/accessories.png',
    '/Shop/mixMatch/accessories.png',
    '/Shop/mixMatch/accessories.png',
  ],
};

type ImageTypes = keyof typeof images;

interface SliderProps {
  type: ImageTypes;
}

const Slider = ({type}: SliderProps) => {
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
    <div className="relative w-[300px] max-w-xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{transform: `translateX(-${currentIndex * 100}%)`}}
      >
        {images[type] &&
          images[type].map((image) => (
            <div
              key={image}
              className="min-w-full h-[305px] bg-center bg-contain"
              style={{backgroundImage: `url(${image})`}}
            />
          ))}
      </div>
      <div className="overflow-visible">
        <button
          className="flex items-center justify-center absolute top-1/2 left-2 transform -translate-y-1/2 bg-brown w-11 h-11 rounded-full"
          onClick={goToPrevious}
        >
          <Image srcSet="/icons/prevArrow.svg" width={13} />
        </button>
        <button
          className="flex items-center justify-center absolute top-1/2 right-2 transform -translate-y-1/2 bg-aqua w-11 h-11 rounded-full"
          onClick={goToNext}
        >
          <Image srcSet="/icons/nextArrow.svg" width={13} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
