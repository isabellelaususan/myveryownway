import type {FC, SVGProps} from 'react';

const Star: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    {...props}
  >
    <path
      d="M21.406 41.3138C24.8649 30.6367 31.3313 24.1162 41.5977 20.6839C31.5483 17.4449 25.1101 10.9921 21.4269 0.65625C17.6621 10.952 11.3271 17.5131 0.940152 20.6954C11.6539 23.8914 18.0348 30.6373 21.4065 41.3138H21.406Z"
      fill="currentColor"
    />
  </svg>
);

export default Star;
