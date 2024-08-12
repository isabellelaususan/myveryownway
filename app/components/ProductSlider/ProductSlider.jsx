import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {useEffect, useRef} from 'react';

const images = [
  '/Shop/Product/IrisBag_1.png',
  '/Shop/Product/IrisBag_2.png',
  '/Shop/Product/IrisBag_3.png',
  '/Shop/Product/IrisBag_4.png',
];

const ProductSlider = () => {
  const primarySliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  useEffect(() => {
    if (primarySliderRef.current && thumbnailSliderRef.current) {
      primarySliderRef.current.sync(thumbnailSliderRef.current.splide);
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[475px] mx-auto">
        {/* Primary Slider */}
        <Splide
          ref={primarySliderRef}
          options={{
            type: 'fade',
            heightRatio: 0.5,
            pagination: false,
            arrows: false,
            cover: true,
          }}
          className="mb-8"
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-auto mx-auto"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Thumbnails Slider */}
        <Splide
          ref={thumbnailSliderRef}
          options={{
            rewind: true,
            fixedWidth: 150,
            fixedHeight: 152,
            isNavigation: true,
            gap: 12,
            focus: 'center',
            pagination: false,
            cover: true,
            breakpoints: {
              600: {
                fixedWidth: 66,
                fixedHeight: 40,
              },
            },
          }}
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="w-full h-auto"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ProductSlider;
