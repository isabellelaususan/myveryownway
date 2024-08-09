import {useState, type FC, type SVGProps} from 'react';

const Favorite: FC<SVGProps<SVGSVGElement>> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="27"
        cy="27"
        r="25.5"
        stroke="#0D0A01"
        strokeWidth="3"
        className={`hover:fill-[#E60874] ${
          isClicked ? 'fill-[#E60874] ' : 'fill-current'
        }`}
        onClick={handleClick}
      />
      <path
        d="M26.2914 40.76L26.2893 40.758C22.2698 36.9135 19.0504 33.8265 16.8185 30.9463C14.605 28.09 13.5 25.606 13.5 22.9918C13.5 18.694 16.652 15.5 20.525 15.5C22.738 15.5 24.9106 16.5949 26.3365 18.3473L27.5 19.7771L28.6635 18.3473C30.0894 16.5949 32.262 15.5 34.475 15.5C38.348 15.5 41.5 18.694 41.5 22.9918C41.5 25.606 40.395 28.09 38.1815 30.9463C35.9496 33.8265 32.7302 36.9135 28.7107 40.758L28.7086 40.76L27.5 41.9205L26.2914 40.76Z"
        stroke="#0D0A01"
        strokeWidth="3"
        className={`hover:fill-white ${
          isClicked ? 'fill-white ' : 'fill-current'
        }`}
        onClick={handleClick}
      />
    </svg>
  );
};

export default Favorite;
