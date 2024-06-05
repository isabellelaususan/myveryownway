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
          className="absolute -left-20 lg:top-96 top-20 2xl:w-[272px] w-[172px] -z-10"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="lg:flex">
            <div className="lg:w-[39%] w-full lg:text-left text-center">
              <h1 className="2xl:text-[85px] lg:text-[75px] text-6xl lg:leading-[6rem] leading-[4rem] font-MontserratSemiBold uppercase">
                freedom <br />
                <span className="font-MontserratExtraBold italic">
                  Of CHOICE
                </span>
              </h1>
              <p className="lg:text-[32px] text-2xl leading-9 py-8 font-MontserratSemiBold">
                Let Your Creativity Run Free <br /> And Express Your Style With{' '}
                <br />
                Your Very Own Bag
              </p>
              <Button
                variant="shop"
                className="rotate-[350deg] block ml-auto mr-24"
              >
                <NavLink to="/pages/shop">shop now</NavLink>
              </Button>
            </div>
            <div className="lg:w-[61%] w-full 2xl:pl-60 lg:pl-36">
              <div className="relative">
                <Image
                  srcSet="/icons/skyLogo.svg"
                  alt="sky-logo"
                  width={71}
                  className="absolute lg:w-[71px] w-[60px] lg:top-32 top-24 lg:-left-8 left-[60px]"
                />
                <Image
                  srcSet="/Shop/hero-section.png"
                  alt="hero-section"
                  width={634}
                  className="block m-auto lg:w-[634px] w-[534px]"
                />
                <div className="shape">
                  <Image
                    srcSet="/icons/pinkCurve.svg"
                    alt="pinkCurve"
                    width={216}
                    className="absolute lg:w-[216px] w-[190px] lg:right-8 right-32 top-16 -z-10"
                  />
                  <Image
                    srcSet="/icons/greenBox.svg"
                    alt="greenBox"
                    width={152}
                    className="absolute lg:w-[152px] w-[134px] lg:-right-20 right-8 lg:top-[21rem] top-72 -z-10"
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
          className="absolute lg:-right-24 -right-16 lg:top-72 top-48 2xl:block lg:hidden block -z-10 2xl:w-[241px] w-[184px]"
        />
      </section>

      <div className="sticky top-0 -z-10">
        <Image
          srcSet="/icons/yellowRound.svg"
          alt="yelloRound"
          width={121}
          className="block lg:m-auto -mt-36 lg:w-[121px] w-[100px] ml-10"
        />
      </div>

      {/* Logo Slider */}
      <section className="lg:mt-40 mt-28">
        <Slider mySlider={myVeryLogo} />
      </section>

      {/* very own  */}
      <section className="lg:pt-28 lg:pb-32 py-[50px] relative">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="mb-28 relative">
            <h1 className="text-5xl text-center font-MontserratBold">
              HOW TO PICK <br /> YOUR VERY OWN
            </h1>
            <Image
              srcSet="/icons/veryHeadLine.svg"
              alt="veryHeadLine"
              className="block m-auto !w-24 mt-4"
            />
            <div className="absolute top-24 left-[59%]">
              <Image
                srcSet="/icons/veryPickHand.svg"
                alt="veryPickHand"
                className="!w-[84px] absolute -top-12 left-24 right-0 z-10"
              />
              <div className="relative">
                <Image
                  srcSet="/icons/veyGreenBox.svg"
                  alt="veyGreenBox"
                  className="!w-36"
                />
                <h4 className="text-4xl absolute top-6 left-6 rotate-[340deg] font-MontserratBold">
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
              className="absolute lg:-left-32 -left-16 top-40 2xl:w-[232px] lg:w-[200px] w-[106px]"
            />
            <Image
              srcSet="/icons/blueBox.svg"
              alt="blueBox"
              className="!w-auto absolute -right-28 top-20 2xl:block hidden"
            />
          </div>

          <div className="flex">
            <ul className="m-0 lg:flex block gap-14">
              <li className="float-left lg:w-1/4 w-1/2 text-center flex flex-col gap-5">
                <Image
                  srcSet="/Shop/veryOwn/pickDesign.png"
                  alt="pickDesign"
                  className="object-contain h-[240px]"
                />
                <h4 className="text-2xl font-MontserratBold italic">Step 1</h4>
                <p className="text-2xl font-MontserratSemiBold leading-6">
                  Pick Your <br /> Bag Design
                </p>
              </li>
              <li className="float-left lg:w-1/4 w-1/2 lg:mt-0 mt-56 text-center flex flex-col gap-5">
                <Image
                  srcSet="/Shop/veryOwn/pickStrap.png"
                  alt="pickStrap"
                  className="object-contain h-[240px]"
                />
                <h4 className="text-2xl font-MontserratBold italic">Step 2</h4>
                <p className="text-2xl font-MontserratSemiBold leading-6">
                  Pick Your <br /> Strap(s)
                </p>
              </li>
              <li className="float-left lg:w-1/4 w-1/2 lg:mt-0 -mt-20 text-center flex flex-col gap-5">
                <Image
                  srcSet="/Shop/veryOwn/pickPouch.png"
                  alt="pickPouch"
                  className="object-contain h-[240px]"
                />
                <h4 className="text-2xl font-MontserratBold italic">Step 3</h4>
                <p className="text-2xl font-MontserratSemiBold leading-6">
                  Pick Your Pouch <br /> And Accessories
                </p>
              </li>
              <li className="float-left lg:w-1/4 w-1/2 lg:mt-0 mt-48 text-center flex flex-col gap-5">
                <Image
                  srcSet="/Shop/veryOwn/enjoyBag.png"
                  alt="enjoyBag"
                  className="object-contain h-[240px]"
                />
                <h4 className="text-2xl font-MontserratBold italic">Step 4</h4>
                <p className="text-2xl font-MontserratSemiBold leading-6">
                  Enjoy Your <br /> Very Own Bag!
                </p>
              </li>
            </ul>
          </div>
          <div className="relative mt-20">
            <Image
              srcSet="/icons/pinkLine.svg"
              alt="pinkLine"
              width={241}
              className="absolute lg:left-36 -left-14 lg:top-4 -top-40 2xl:w-[241px] w-[200px]"
            />
            <Button variant="mixMatch" className="block m-auto">
              <NavLink to="/">Mix & Match Now</NavLink>
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
