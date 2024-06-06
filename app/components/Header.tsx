import {NavLink} from '@remix-run/react';
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
    <header className="flex justify-between items-center border-black border-b-[3px] lg:font-MontserratBold font-MontserratRegular lg:px-0 px-10">
      <NavLink
        prefetch="intent"
        to="/"
        className="lg:py-7 lg:px-16 border-black lg:border-r-[3px]"
        end
      >
        <Image
          srcSet="/icons/round-logo.svg"
          className="lg:w-12 w-6"
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
      className="flex text-2xl 2xl:gap-[73px] gap-[23px] lg:px-14 font-Montserrat"
      role="navigation"
    >
      {viewport === 'mobile' && (
        <NavLink end onClick={closeAside} prefetch="intent" to="/">
          Home
        </NavLink>
      )}
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
            className={`font-500 rounded-full lg:text-xl text-lg lg:px-7 py-1 2xl:px-7 cursor-pointer hover:text-white hover:no-underline flex-shrink-0 ${
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
      className="flex lg:gap-8 gap-4 lg:py-[34px] py-8 lg:px-16 border-black lg:border-l-[3px]"
      role="navigation"
    >
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account">
        <Image srcSet="/icons/user.svg" width={36} className="lg:w-9 w-6" />
        {/* <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense> */}
      </NavLink>
      {/* <SearchToggle /> */}

      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3>☰</h3>
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
    <Image srcSet="/icons/cart.svg" width={36} className="lg:w-9 w-6" />
  );
}
