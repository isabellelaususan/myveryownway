import {NavLink, useLoaderData, type MetaFunction} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import Button from '~/components/Button';
import Slider from '~/components/Slider';
import {myVeryLogo} from '~/components/Slider/constants';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home relative">
      <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} />
    </div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <>
      <section className="lg:pt-40 pt-12 relative">
        <Image
          srcSet="/icons/orangeBox.svg"
          alt="orangeBox"
          width={272}
          className="absolute sm:-left-20 -left-8 lg:top-96 md:top-20 sm:top-16 top-0 2xl:w-[272px] md:w-[172px] w-16 z-10"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
          <div className="flex sm:flex-row flex-col">
            <div className="sm:order-1 order-2 lg:w-[39%] w-full text-left sm:pl-0 pl-9">
              <h1 className="2xl:text-[85px] lg:text-[75px] md:text-6xl text-5xl lg:leading-[6rem] md:leading-[4rem] leading-[3.5rem] font-MontserratSemiBold uppercase">
                freedom <br />
                <span className="font-MontserratExtraBold italic">
                  Of CHOICE
                </span>
              </h1>
              <p className="lg:text-[32px] md:text-2xl text-lg md:leading-9 leading-6 py-8 font-MontserratSemiBold">
                Let Your Creativity Run Free <br /> And Express Your Style With{' '}
                <br />
                Your Very Own Bag
              </p>
              <Button
                variant="shop"
                className="rotate-[350deg] block ml-auto sm:mr-24 mr-8"
              >
                <NavLink to="/pages/shop">shop now</NavLink>
              </Button>
            </div>
            <div className="sm:order-2 order-1 lg:w-[61%] w-full 2xl:pl-60 lg:pl-36 pt-0">
              <div className="relative">
                <Image
                  srcSet="/icons/skyLogo.svg"
                  alt="sky-logo"
                  width={71}
                  className="absolute lg:w-[71px] sm:w-[60px] w-9 lg:top-32 md:top-24 top-12 lg:-left-8 sm:left-[60px] left-2.5"
                />
                <Image
                  srcSet="/Shop/hero-section.png"
                  alt="hero-section"
                  width={634}
                  className="block m-auto lg:w-[634px] md:w-[534px] w-[294px]"
                />
                <div className="shape">
                  <Image
                    srcSet="/icons/pinkCurve.svg"
                    alt="pinkCurve"
                    width={216}
                    className="absolute lg:w-[216px] md:w-[190px] w-[77px] lg:right-8 md:right-32 right-16 md:top-16 top-6 -z-10"
                  />
                  <Image
                    srcSet="/icons/greenBox.svg"
                    alt="greenBox"
                    width={152}
                    className="absolute lg:w-[152px] md:w-[134px] w-[64px] lg:-right-20 md:right-8 right-0 lg:top-[21rem] md:top-72 top-40 -z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          srcSet="/icons/creamStar.svg"
          alt="creamStar"
          width={241}
          className="absolute lg:-right-16 md:-right-16 right-8 lg:top-72 md:top-48 top-16 2xl:block lg:hidden block z-10 2xl:w-[201px] md:w-[184px] w-[51px] rotate-[14deg]"
        />
      </section>

      <div className="sm:sticky sm:top-0 sm:-z-10 sm:-mt-[140px] absolute top-[26rem] -left-4">
        <Image
          srcSet="/icons/yellowRound.svg"
          alt="yelloRound"
          width={121}
          className="block lg:m-auto -mt-36 lg:w-[121px] sm:w-[100px] w-[52px] ml-10"
        />
      </div>

      {/* Logo Slider */}
      <section className="lg:mt-40 md:mt-28 mt-16">
        <Slider mySlider={myVeryLogo} />
      </section>

      {/* very own  */}
      <section className="lg:pt-28 lg:pb-32 py-16 relative">
        <div className="sm:hidden block">
          <Image
            srcSet="/icons/greenWave.svg"
            alt="greenWave"
            width="65"
            className="absolute top-[22%]"
          />
          <Image
            srcSet="/icons/yellowHalf.svg"
            alt="yellowHalf"
            width="75"
            className="absolute top-[35%] right-0"
          />{' '}
          <Image
            srcSet="/icons/pinkPipe.svg"
            alt="pinkPipe"
            width="52"
            className="absolute top-2/3"
          />
        </div>
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
          <div className="md:mb-28 mb-20 relative">
            <h1 className="lg:text-[53px] md:text-[40px] text-[22px] text-center font-MontserratBold sm:leading-[60px] leading-6">
              HOW TO PICK <br /> YOUR VERY OWN
            </h1>
            <Image
              srcSet="/icons/veryHeadLine.svg"
              alt="veryHeadLine"
              className="block m-auto md:!w-24 !w-16 lg:mt-4 md:mt-0 mt-2"
            />
            <div className="absolute lg:top-28 md:top-28 top-12 lg:left-[62%] md:left-[63%] left-[65%]">
              <Image
                srcSet="/icons/veryPickHand.svg"
                alt="veryPickHand"
                className="md:!w-[84px] !w-14 absolute md:-top-12 -top-8 md:left-24 left-12 right-0 z-10"
              />
              <div className="relative">
                <Image
                  srcSet="/icons/veyGreenBox.svg"
                  alt="veyGreenBox"
                  className="md:!w-36 !w-[75px]"
                />
                <h4 className="md:text-4xl text-[22px] absolute md:top-6 top-1 md:left-6 left-3 rotate-[340deg] font-MontserratBold">
                  BAG
                </h4>
              </div>
            </div>
          </div>

          <div>
            <Image
              srcSet="/icons/greenRound.svg"
              alt="greenRound"
              width={232}
              className="absolute lg:-left-32 md:-left-16 -left-10 md:top-40 sm:top-24 -top-60 2xl:w-[232px] lg:w-[200px] md:w-[106px] w-[67px] z-10"
            />
            <Image
              srcSet="/icons/blueBox.svg"
              alt="blueBox"
              width={247}
              className="absolute right-0 sm:top-20 -top-36 2xl:w-[99px] lg::w-[80px] md:w-[70px] w-[30px] z-10"
            />
          </div>

          <div>
            <ul className="m-0 lg:flex md:block flex lg:flex-row flex-col md:gap-14 gap-[70px]">
              <li className="float-left lg:w-1/4 md:w-1/2 w-full text-center flex flex-col gap-5 relative sm:after:content-none after:absolute after:content after:bg-black after:h-0.5 after:w-[100px] after:left-1/2 after:-bottom-10 after:transform after:-translate-x-1/2 after:-translate-y-1/2">
                <Image
                  srcSet="/Shop/veryOwn/pickDesign.png"
                  alt="pickDesign"
                  className="object-contain sm:h-[240px] h-32"
                />
                <div className="sm:flex flex-col items-center justify-center gap-5">
                  <h4 className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratBold italic sm:pb-0 pb-4">
                    Step 1
                  </h4>
                  <p className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratSemiBold sm:leading-10 leading-6">
                    Pick Your <span className="block"> Bag Design</span>
                  </p>
                </div>
              </li>
              <li className="float-left lg:w-1/4 md:w-1/2 w-full lg:mt-0 md:mt-56 text-center flex flex-col gap-5 relative sm:after:content-none after:absolute after:content after:bg-black after:h-0.5 after:w-[100px] after:left-1/2 after:-bottom-10 after:transform after:-translate-x-1/2 after:-translate-y-1/2">
                <Image
                  srcSet="/Shop/veryOwn/pickStrap.png"
                  alt="pickStrap"
                  className="object-contain sm:h-[240px] h-32"
                />
                <div className="sm:flex flex-col items-center justify-center gap-5">
                  <h4 className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratBold italic sm:pb-0 pb-4">
                    Step 2
                  </h4>
                  <p className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratSemiBold sm:leading-10 leading-6">
                    Pick Your <span className="block"> Strap(s)</span>
                  </p>
                </div>
              </li>
              <li className="float-left lg:w-1/4 md:w-1/2 w-full lg:mt-0 md:-mt-20 text-center flex flex-col gap-5 relative sm:after:content-none after:absolute after:content after:bg-black after:h-0.5 after:w-[100px] after:left-1/2 after:-bottom-10 after:transform after:-translate-x-1/2 after:-translate-y-1/2">
                <Image
                  srcSet="/Shop/veryOwn/pickPouch.png"
                  alt="pickPouch"
                  className="object-contain sm:h-[240px] h-32"
                />
                <div className="sm:flex flex-col items-center justify-center gap-5">
                  <h4 className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratBold italic sm:flex-shrink-0 sm:pb-0 pb-4">
                    Step 3
                  </h4>
                  <p className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratSemiBold sm:leading-10 leading-6">
                    Pick Your Pouch{' '}
                    <span className="block"> And Accessories</span>
                  </p>
                </div>
              </li>
              <li className="float-left lg:w-1/4 md:w-1/2 w-full lg:mt-0 md:mt-48 text-center flex flex-col gap-5">
                <Image
                  srcSet="/Shop/veryOwn/enjoyBag.png"
                  alt="enjoyBag"
                  className="object-contain sm:h-[240px] h-32"
                />
                <div className="sm:flex flex-col items-center justify-center gap-5">
                  <h4 className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratBold italic sm:pb-0 pb-4">
                    Step 4
                  </h4>
                  <p className="2xl:text-[32px] xl:text-[28px] lg:text-[32px] text-lg font-MontserratSemiBold sm:leading-10 leading-6">
                    Enjoy Your <span className="block"> Very Own Bag!</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative md:mt-20 mt-12">
            <Image
              srcSet="/icons/blueLine.svg"
              alt="blueLine"
              width={241}
              className="absolute lg:left-36 -left-14 lg:top-4 -top-40 2xl:w-[241px] w-[200px] md:block hidden"
            />
            <Button variant="mixMatch" className="block m-auto">
              <NavLink to="/pages/mix-match">Mix & Match Now</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery>;
}) {
  return (
    // <div className="recommended-products">
    //   <h2>Recommended Products</h2>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Await resolve={products}>
    //       {({products}) => (
    //         <div className="recommended-products-grid">
    //           {products.nodes.map((product) => (
    //             <Link
    //               key={product.id}
    //               className="recommended-product"
    //               to={`/products/${product.handle}`}
    //             >
    //               <Image
    //                 data={product.images.nodes[0]}
    //                 aspectRatio="1/1"
    //                 sizes="(min-width: 45em) 20vw, 50vw"
    //               />
    //               <h4>{product.title}</h4>
    //               <small>
    //                 <Money data={product.priceRange.minVariantPrice} />
    //               </small>
    //             </Link>
    //           ))}
    //         </div>
    //       )}
    //     </Await>
    //   </Suspense>
    //   <br />
    // </div>
    <></>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
