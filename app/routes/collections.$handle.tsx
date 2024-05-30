import {Link, useLoaderData, type MetaFunction} from '@remix-run/react';
import {
  Image,
  Money,
  Pagination,
  getPaginationVariables,
} from '@shopify/hydrogen';
import {json, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useState} from 'react';
import type {ProductItemFragment} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection});
}

export const shop = [
  {
    title: 'ALL',
  },
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
];

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <Image
        srcSet="/icons/lightGreenShape.svg"
        alt="lightGreenShape"
        width={232}
        className="absolute top-[30%] -left-24 2xl:w-[232px] w-[180px]"
      />
      <div className="2xl:max-w-[1616px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
        <div className="flex gap-28">
          {/* <h1>{collection.title}</h1> */}
          {/* <p className="collection-description">{collection.description}</p> */}
          <div className="flex flex-col self-start gap-4 w-[22%] font-MontserratBold 2xl:text-[32px] text-2xl sticky top-[50px] ">
            {shop.map((shopTab, index) => (
              <button
                key={index}
                className={`hover:bg-fullGreen rounded-full px-4 py-1 w-fit cursor-pointer ${
                  activeTab === index ? 'bg-fullGreen' : ''
                }`}
                onClick={() => setActiveTab(index)}
              >
                {shopTab?.title}
              </button>
            ))}
          </div>
          <Pagination connection={collection.products}>
            {({nodes, isLoading, PreviousLink, NextLink}) => (
              <div>
                <PreviousLink>
                  {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                </PreviousLink>
                <ProductsGrid products={nodes} />
                <br />
                <NextLink>
                  {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                </NextLink>
              </div>
            )}
          </Pagination>
        </div>
      </div>
      <Image
        srcSet="/icons/pinkLine.svg"
        alt="pinkLine"
        width={241}
        className="absolute bottom-40 2xl:left-40 left-28 rotate-[145deg] 2xl:w-[241px] w-[170px]"
      />
      <Image
        srcSet="/icons/redRoundShape.svg"
        alt="redRoundShape"
        width={328}
        className="absolute bottom-52 -right-28 2xl:w-[328px] w-[238px]"
      />
    </section>
  );
}

function ProductsGrid({products}: {products: ProductItemFragment[]}) {
  return (
    <div className="grid grid-cols-3 2xl:gap-12 gap-8">
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
      className="border-[3px] border-black rounded-[45px]"
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
          className="rounded-t-[42px]"
        />
      )}
      <div className="py-7 2xl:px-8 px-6 flex items-end justify-between gap-3 border-t-2 border-black">
        <div>
          <h4 className="block font-MontserratBold 2xl:text-2xl text-xl 2xl:pb-4 pb-2 whitespace-nowrap overflow-hidden text-ellipsis 2xl:w-[220px] w-[170px]">
            {product.title}
          </h4>
          <small>
            <Money
              className="2xl:text-2xl text-xl font-MontserratSemiBold"
              data={product.priceRange.minVariantPrice}
            />
          </small>
        </div>
        <Link
          to="/"
          className="bg-fullGreen rounded-full w-12 h-12 flex justify-center cursor-pointer flex-shrink-0"
        >
          <Image srcSet="/icons/shop.svg" width={22} alt="shop" />
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

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
` as const;
