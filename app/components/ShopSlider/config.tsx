export const defaultSettings = (settings: any) => ({
  className: 'mt-[25px]',
  dots: false,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <></>,
  prevArrow: <></>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
      },
    },
  ],
  ...settings,
});
