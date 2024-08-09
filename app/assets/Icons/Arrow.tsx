import type {FC, SVGProps} from 'react';

const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="31"
    viewBox="0 0 19 31"
    fill="none"
    {...props}
  >
    <path
      d="M15.3828 3.22607L2.91671 15.6385L15.3828 28.051"
      stroke="black"
      strokeWidth="5.36407"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
