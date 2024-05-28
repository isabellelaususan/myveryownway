// interface navMenu {
//   label?: string;
//   path?: string;
//   className?: string;
// }
// export interface HeaderProps extends React.PropsWithChildren {
//   navMenu: navMenu;
// }

export type NavMenuProps = {label: string; path: string; className: string};

export interface HeaderProps {
  navMenu: NavMenuProps[];
}
