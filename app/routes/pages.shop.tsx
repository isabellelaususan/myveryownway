import {Link, useLoaderData, type MetaFunction} from '@remix-run/react';
import {
  Image,
  Money,
  Pagination,
  getPaginationVariables,
} from '@shopify/hydrogen';
import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useState} from 'react';
import type {ProductItemFragment} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export const meta: MetaFunction<typeof loader> = () => {
  return [{title: `Hydrogen | Products`}];
};

export async function loader({request, context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const {products} = await storefront.query(CATALOG_QUERY, {
    variables: {...paginationVariables},
  });

  return json({products});
}

const tailwindClasses = [
  'hover:bg-darkYellow active:bg-lightPink',
  'hover:bg-pink',
  'hover:bg-[#93C300]',
  'hover:bg-skyBlue',
  'hover:bg-[#FF4AB4]',
  'hover:bg-yellow',
];

export const shop = [
  {
    title: 'BAGS',
  },
  {
    title: 'STRAPS',
  },
  {
    title: 'POUCHES',
  },
  {
    title: 'ACCESSORIES',
  },
  {
    title: 'Wallets',
  },
  {
    title: 'Clothing',
  },
];

export default function Collection() {
  const {products} = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="md:py-24 py-[55px] relative">
      <Image
        srcSet="/icons/lightGreenShape.svg"
        alt="lightGreenShape"
        width={232}
        className="absolute md:top-[30%] top-36 md:-left-24 -left-12 2xl:w-[232px] md:w-[180px] w-[87px] -z-10"
      />
      <div className="2xl:max-w-[1616px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
        <div className="md:flex block">
          <div className="flex flex-col self-start md:gap-4 gap-2 md:w-[22%] w-full font-MontserratBold 2xl:text-[32px] text-2xl md:sticky top-[50px] md:pl-0 pl-14">
            {shop.map((tab, index) => (
              <button
                key={index}
                className={`hover:bg-fullGreen rounded-full md:px-[30px] px-[22px] md:py-2.5 py-1 cursor-pointer w-fit ${
                  // activeTab === index ? 'bg-fullGreen' : ''
                  tailwindClasses[index % tailwindClasses.length]
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab?.title}
              </button>
            ))}
          </div>
          <Pagination connection={products}>
            {({nodes, isLoading, PreviousLink, NextLink}) => (
              <>
                <PreviousLink>
                  {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                </PreviousLink>
                <ProductsGrid products={nodes} />
                <NextLink>
                  {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                </NextLink>
              </>
            )}
          </Pagination>
        </div>
      </div>
      <Image
        srcSet="/icons/pinkLine.svg"
        alt="pinkLine"
        width={241}
        className="absolute bottom-40 2xl:left-40 left-28 rotate-[7deg] 2xl:w-[241px] w-[170px] -z-10"
      />
      <Image
        srcSet="/icons/redRoundShape.svg"
        alt="redRoundShape"
        width={328}
        className="absolute md:top-52 top-[74px] md:-right-28 -right-20 2xl:w-[328px] md:w-[238px] w-32 -z-10"
      />
    </section>
  );
}

function ProductsGrid({products}: {products: ProductItemFragment[]}) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-2.5 2xl:pl-24 md:mt-0 mt-11">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        );
      })}
    </div>
  );
}

function ProductItem({
  product,
  loading,
}: {
  product: ProductItemFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <Link
      className="md:border-[3px] border-2 border-black md:rounded-[45px] rounded-[18px]"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
          className="md:rounded-t-[42px] rounded-t-[16px]"
        />
      )}
      <div className="md:py-7 md:px-8 px-2.5 py-2.5 flex items-end justify-between gap-3 border-t-2 border-black bg-softPeach  md:rounded-b-[45px] rounded-b-[16px]">
        <div>
          <h4 className="flex flex-wrap font-MontserratBold md:text-2xl text-sm md:pb-4 pb-1.5">
            {product.title}
          </h4>
          <small>
            <Money
              className="md:text-2xl text-xs font-MontserratSemiBold"
              data={product.priceRange.minVariantPrice}
            />
          </small>
        </div>
        <Link
          to="/"
          className="bg-fullGreen rounded-full md:w-12 w-7 md:h-12 h-7 flex justify-center cursor-pointer flex-shrink-0"
        >
          <Image
            srcSet="/icons/shop.svg"
            width={22}
            alt="shop"
            className="md:w-[22px] w-4"
          />
        </Link>
      </div>
    </Link>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/2024-01/objects/product
const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_ITEM_FRAGMENT}
` as const;
