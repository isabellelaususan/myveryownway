import {Link, NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {HeaderQuery} from 'storefrontapi.generated';
import {useRootLoaderData} from '~/lib/root-data';
import type {LayoutProps} from './Layout';

type HeaderProps = Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>;

type Viewport = 'desktop' | 'mobile';

const tailwindClasses = [
  'hover:bg-lightPink active:bg-lightPink',
  'hover:bg-orange',
  'hover:bg-mixMatch',
  'hover:bg-darkYellow',
  'hover:bg-electricViolet',
  'hover:bg-skyBlue',
];

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const {shop, menu} = header;

  return (
    <header className="flex justify-between items-center border-black md:border-b-[3px] border-b-2 lg:font-MontserratBold font-MontserratRegular lg:px-0 md:px-10 px-[30px]">
      <NavLink
        prefetch="intent"
        to="/"
        className="lg:py-7 2xl:px-16 lg:px-7 border-black lg:border-r-[3px]"
        end
      >
        <Image
          srcSet={shop?.brand?.logo?.image?.url}
          className="lg:w-12 md:w-6 w-[32px]"
          width={48}
        />
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
  viewport: Viewport;
}) {
  const {publicStoreDomain} = useRootLoaderData();
  const className = `header-menu-${viewport}`;

  function closeAside(event: React.MouseEvent<HTMLAnchorElement>) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav
      className={`flex md:flex-row flex-col items-start md:text-2xl text-3xl 2xl:gap-[53px] gap-[23px] lg:px-14 font-MontserratBold ${
        viewport === 'mobile' ? '' : 'header-desktop-menu'
      }`}
      role="navigation"
    >
      {viewport === 'mobile' && <></>}
      {menu?.items.map((item, index) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className={`font-500 rounded-full 2xl:text-[26px] lg:text-[22px] md:text-lg text-3xl lg:px-7 py-1 px-7 cursor-pointer hover:text-white hover:no-underline flex-shrink-0 ${
              tailwindClasses[index % tailwindClasses.length]
            }`}
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav
      className="flex md:justify-normal justify-between items-center ml-4 lg:gap-8 gap-4 lg:py-[34px] md:py-8 py-3 2xl:px-16 lg:px-7 border-black lg:border-l-[3px] md:w-auto w-[-webkit-fill-available]"
      role="navigation"
    >
      <HeaderMenuMobileToggle />
      <div className="flex gap-4">
        {/* <SearchToggle /> */}

        <CartToggle cart={cart} />
      </div>
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a
      className="header-menu-mobile-toggle relative z-20"
      href="#mobile-menu-aside"
    >
      <Image srcSet="/icons/barIcon.svg" alt="barIcon" width={18} />
    </a>
  );
}

function SearchToggle() {
  return <a href="#search-aside">Search</a>;
}

function CartBadge({count}: {count: number}) {
  return <a href="#cart-aside">Cart {count}</a>;
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    // <Suspense fallback={<CartBadge count={0} />}>
    //   <Await resolve={cart}>
    //     {(cart) => {
    //       if (!cart) return <CartBadge count={0} />;
    //       return <CartBadge count={cart.totalQuantity || 0} />;
    //     }}
    //   </Await>
    // </Suspense>

    <div className="flex md:gap-10 gap-5">
      <Link to="/account/login">
        <Image
          srcSet="/icons/user.svg"
          alt="cart"
          width={36}
          className="lg:w-9 md:w-6 w-5"
        />
      </Link>
      <Link to="/cart">
        <Image
          srcSet="/icons/cart.svg"
          alt="cart"
          width={36}
          className="lg:w-9 md:w-6 w-5"
        />
      </Link>
    </div>
  );
}
