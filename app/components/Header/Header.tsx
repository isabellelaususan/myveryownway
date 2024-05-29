import type {HeaderProps} from './types';

function Header({navMenu}: HeaderProps) {
  return (
    <header className="flex items-center border-black border-b-[3px]">
      <div className="p-12 border-black border-r-[3px]">
        <img src="/icons/round-logo.svg" width="52" />
      </div>
      <nav>
        <ul className="flex text-2xl gap-[73px] px-14">
          {navMenu.map((menu, index: number) => (
            <li
              key={index}
              className={`font-700 rounded-full px-7 py-1 hover:text-white cursor-pointer ${menu.className}`}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-[55px] px-14 py-12 border-black border-l-[3px]">
        <img src="/icons/user.svg" />
        <img src="/icons/cart.svg" />
      </div>
    </header>
  );
}

export default Header;
