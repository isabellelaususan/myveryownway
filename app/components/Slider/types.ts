// interface navMenu {
//   label?: string;
//   path?: string;
//   className?: string;
// }
// export interface HeaderProps extends React.PropsWithChildren {
//   navMenu: navMenu;
// }

export type myVeryLogo = {
  id: number;
  image: string;
  alt: string;
  label: string;
};

export interface MyVeryProps {
  mySlider: myVeryLogo[];
}
