import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {useRootLoaderData} from '~/lib/root-data';
import {socialMedia} from './Footer/constants';

export function Footer({
  menu,
  shop,
}: FooterQuery & {shop: HeaderQuery['shop']}) {
  return (
    <footer className="md:border-t-[3px] border-t-2 lg:overflow-auto overflow-clip">
      {/* {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )} */}
      <div className="lg:flex block lg:px-0 lg:py-0">
        <div className="lg:border-r-[3px] border-r-0 md:border-b-0 border-b-2 sm:w-[52%] w-full lg:pt-56 2xl:pl-60 lg:pl-44 lg:pb-20 px-16 py-9 relative">
          <Image
            srcSet="/icons/black-zigzag.svg"
            alt="blackZigzag"
            className="absolute lg:left-0 md:-left-32 left-0 lg:top-auto md:top-0 top-11 bottom-40 2xl:w-[130px] md:w-[100px] w-10"
            width={130}
          />
          <Image
            srcSet="/icons/black-heart.svg"
            alt="blackHeart"
            className="absolute lg:top-16 md:top-0 top-2.5 2xl:right-64 lg:right-44 md:-right-[26rem] right-12 2xl:w-[142px] md:w-[130px] w-11"
            width={150}
          />
          <h2 className="sm:text-3xl text-xs font-bold sm:mb-8 mb-3 font-MontserratExtraBold">
            CONTACT US
          </h2>
          <div className="flex flex-col">
            <NavLink
              to="mailto:myveryownway.official@gmail.com"
              className="sm:text-2xl text-xs sm:mb-3 mb-1 hover:no-underline font-MontserratRegular cursor-pointer"
            >
              myveryownway.official@gmail.com
            </NavLink>
            <NavLink
              to="tel:(+66) 90-969-3000"
              className="sm:text-2xl text-xs hover:no-underline font-MontserratRegular cursor-pointer"
            >
              <span className="font-bold font-MontserratBold">Tel.</span> (+66)
              90-969-3000
            </NavLink>
          </div>
        </div>
        <div className="sm:w-[48%] w-full lg:pt-56 2xl:pl-80 lg:pl-48 px-16 py-9 relative">
          <Image
            srcSet="/icons/curvround.svg"
            alt="curvRound"
            width={140}
            className="absolute 2xl:left-20 lg:left-12 md:-left-40 left-2.5 md:bottom-0 bottom-9 lg:top-48 2xl:w-[140px] md:w-[110px] w-[35px]"
          />
          <Image
            srcSet="/icons/half-round.svg"
            alt="half-round"
            width={189}
            className="absolute md:left-96 -top-[2px] left-auto md:right-auto right-8 md:w-[189px] w-[55px]"
          />
          <ul className="sm:text-2xl text-xs lg:px-14 grid grid-cols-2 lg:gap-7 gap-y-4 md:gap-x-44 gap-x-8 font-MontserratBold">
            {socialMedia.map((menu, index: number) => (
              <div
                key={menu.label}
                className="flex items-center sm:gap-3 gap-2.5"
              >
                <img
                  src={menu.icon}
                  alt="icon"
                  width={40}
                  className="md:w-10 w-6"
                />
                <NavLink
                  to={menu.path}
                  key={index}
                  className="hover:no-underline cursor-pointer"
                  target="_blank"
                >
                  {menu.label}
                </NavLink>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black w-full sm:h-16 h-4"></div>
    </footer>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a
            href={url}
            key={item.id}
            rel="noopener noreferrer"
            target="_blank"
            className="text-black"
          >
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            // style={activeLinkStyle}
            className="text-black"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
