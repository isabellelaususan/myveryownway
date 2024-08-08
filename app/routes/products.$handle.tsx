import {
  Await,
  Link,
  useLoaderData,
  type FetcherWithComponents,
  type MetaFunction,
} from '@remix-run/react';
import {
  CartForm,
  Image,
  Money,
  VariantSelector,
  getSelectedProductOptions,
  type VariantOption,
} from '@shopify/hydrogen';
import type {
  CartLineInput,
  SelectedOption,
} from '@shopify/hydrogen/storefront-api-types';
import {defer, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Suspense, useState} from 'react';
import type {
  ProductFragment,
  ProductVariantFragment,
  ProductVariantsQuery,
} from 'storefrontapi.generated';
import Button from '~/components/Button';
import MixMatch from '~/components/MixMatch';
import {getVariantUrl} from '~/lib/variants';
import Content from './Content';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.product.title ?? ''}`}];
};

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  // await the query for the critical product data
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions: getSelectedProductOptions(request)},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option: SelectedOption) =>
        option.name === 'Title' && option.value === 'Default Title',
    ),
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      throw redirectToFirstVariant({product, request});
    }
  }

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.
  const variants = storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  return defer({product, variants});
}

function redirectToFirstVariant({
  product,
  request,
}: {
  product: ProductFragment;
  request: Request;
}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  );
}

export default function Product() {
  const {product, variants} = useLoaderData<typeof loader>();
  const {selectedVariant} = product;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2800,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
    {
      imgSrc: '/Shop/Iris_1.jpg',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Image
        srcSet="/icons/orangeStar.svg"
        width={176}
        className="absolute -left-20 top-40"
      />
      <div className="2xl:max-w-[1616px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
        <div className="flex gap-32">
          <ProductImage image={selectedVariant?.image} />
          <ProductMain
            selectedVariant={selectedVariant}
            product={product}
            variants={variants}
          />
        </div>

        {/* Slider */}
        <div className="my-10">
          <h1 className="font-MontserratBold text-4xl">Slider</h1>
          {/* <ShopSlider {...settings}>
            {items.map((item, index) => (
              <div className="bg-white p-[15px] !w-[302px] mr-5" key={index}>
                <img src={item.imgSrc} alt="hello" width="272" height="160" />
              </div>
            ))}
          </ShopSlider> */}
        </div>

        <div className="border-b-2 border-black pb-14 mb-16">
          <h4 className="font-MontserratBold text-4xl">Pair It With</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center [&>div:nth-child(1)]:!p-0 gap-7">
            <MixMatch type="Straps" className="" />
            <div>
              <h4 className="font-MontserratBold text-[28px] mb-5">
                Curly <span className="block">THB 350</span>
              </h4>
              <Button variant="addGreen" className="!text-xl !px-5 sm:!py-2.5">
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <MixMatch type="Pouches" />
            <div>
              <h4 className="font-MontserratBold text-[28px] mb-5">
                Curly <span className="block">THB 350</span>
              </h4>
              <Button variant="addGreen" className="!text-xl !px-5 sm:!py-2.5">
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <MixMatch type="Accessories" />
            <div>
              <h4 className="font-MontserratBold text-[28px] mb-5">
                Curly <span className="block">THB 350</span>
              </h4>
              <Button variant="addGreen" className="!text-xl !px-5 sm:!py-2.5">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        srcSet="/icons/music.svg"
        width={176}
        className="absolute -right-14 top-2/4"
      />
    </section>
  );
}

function ProductImage({image}: {image: ProductVariantFragment['image']}) {
  if (!image) {
    return <div className="product-image" />;
  }
  return (
    <div className="product-image relative w-[42%]">
      <Image
        alt={image.altText || 'Product Image'}
        aspectRatio="1/1"
        data={image}
        key={image.id}
        sizes="(min-width: 45em) 50vw, 100vw"
        className="border-[3px] border-black rounded-[42px]"
      />
      <div className="flex items-center justify-center gap-12 mt-7">
        {/* CartLineQuantity Add */}
        {/* <CartLineQuantity /> */}
        <Button variant="addGreen" className="">
          ADD TO CART
        </Button>
        <Button variant="buyGreen" className="">
          BUY NOW
        </Button>
      </div>
    </div>
  );
}

export const ServiceData = [
  {
    title: 'Product Details',
    description:
      "Introducing 'Iris' – the epitome of timeless elegance that effortlessly complements any ensemble. With its classic design, Iris seamlessly transitions from day to night, ensuring you always exude sophistication. Elevate your style with ease by swapping out straps to match different occasions, allowing you to personalize your look with unparalleled versatility. Inside, Iris features multiple compartments to keep your essentials organized and easily accessible. Crafted from premium nylon, this chic accessory not only exudes luxury but also promises durability, making it a must-have addition to your wardrobe. Experience the perfect blend of style and functionality with 'Iris.'",
    material: 'Material: Premium Nylon',
  },
  {
    title: 'Product Measurement',
    description:
      'All measurements are taken across the product and are subject to +/- 0.5" difference. L24.5 x W18 x H6.5cm',
    material: "'Iris' can fit an iPad Mini and all your daily necessities.",
  },
  {
    title: 'Washcare',
    description:
      'Gently spot clean with mild soap and soft brush. Avoid machine washing, soaking in soap or detergent, and tumble drying. Refrain from using softeners to prevent any potential discoloration. After cleaning, gently press to remove excess water and air dry in a well-ventilated area. Avoid direct sunlight or direct heat sources.',
    material: 'Material: Premium Nylon',
  },
];

function ProductMain({
  selectedVariant,
  product,
  variants,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  variants: Promise<ProductVariantsQuery>;
}) {
  const {title, descriptionHtml} = product;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeIndex = (index: any) => {
    setSelectedIndex(index);
  };

  const service = ServiceData[selectedIndex];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="product-main w-[58%]">
      <div className="flex justify-between items-center">
        <h1 className="font-MontserratBold text-[75px]">{title}</h1>
        <ProductPrice selectedVariant={selectedVariant} />
      </div>
      <br />
      <Suspense
        fallback={
          <ProductForm
            product={product}
            selectedVariant={selectedVariant}
            variants={[]}
          />
        }
      >
        <Await
          errorElement="There was a problem loading product variants"
          resolve={variants}
        >
          {(data) => (
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={data.product?.variants.nodes || []}
            />
          )}
        </Await>
      </Suspense>

      <div className="mt-20">
        <div className="flex gap-16">
          {ServiceData.map((service, i) => (
            <div
              key={service.title}
              onClick={() => handleChangeIndex(i)}
              onKeyDown={(event) => handleKeyDown(event, i)}
              role="button"
              tabIndex={0}
              className={`text-2xl font-MontserratBold px-6 pt-1 rounded-full flex-shrink-0 ${
                i === selectedIndex ? 'bg-yellow relative' : ''
              }   cursor-pointer flex items-center justify-between`}
            >
              {service.title}
            </div>
          ))}
        </div>
        <div>
          <Content service={service} />
        </div>
      </div>

      {/* Add to cart */}
      {/* <div className="flex items-center">
        <AddToCartButton
          disabled={!selectedVariant || !selectedVariant.availableForSale}
          onClick={() => {
            window.location.href = '/cart';
          }}
          lines={
            selectedVariant
              ? [
                  {
                    merchandiseId: selectedVariant.id,
                    quantity: 1,
                  },
                ]
              : []
          }
        >
          {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
        </AddToCartButton>
      </div> */}
    </div>
  );
}

function ProductPrice({
  selectedVariant,
}: {
  selectedVariant: ProductFragment['selectedVariant'];
}) {
  return (
    <div className="flex justify-center items-center bg-[#FF531B] text-white w-fit px-6 py-1.5 text-5xl rounded-[32px] font-MontserratBold leading-normal">
      {selectedVariant?.compareAtPrice ? (
        <>
          <p>Sale</p>
          <br />
          <div className="product-price-on-sale">
            {selectedVariant ? <Money data={selectedVariant.price} /> : null}
            <s>
              <Money data={selectedVariant.compareAtPrice} />
            </s>
          </div>
        </>
      ) : (
        selectedVariant?.price && <Money data={selectedVariant?.price} />
      )}
    </div>
  );
}

function ProductForm({
  product,
  selectedVariant,
  variants,
}: {
  product: ProductFragment;
  selectedVariant: ProductFragment['selectedVariant'];
  variants: Array<ProductVariantFragment>;
}) {
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => <ProductOptions key={option.name} option={option} />}
      </VariantSelector>
      <br />
    </div>
  );
}

function ProductOptions({option}: {option: VariantOption}) {
  return (
    <>
      <div className="product-options" key={option.name}>
        <div className="flex items-start justify-between">
          <h5 className="font-MontserratBold text-4xl mb-14">{option.name}:</h5>
          <img src="/Shop/Favorite.svg" alt="Favorite" />
        </div>
        <div className="product-options-grid justify-center gap-5">
          {option.values.map(({value, isAvailable, isActive, to}) => {
            return (
              <Link
                className=" w-12 h-12 rounded-full border-black border-2"
                key={option.name + value}
                prefetch="intent"
                preventScrollReset
                replace
                to={to}
                style={{
                  background: value,
                  border: isActive
                    ? '1px solid black'
                    : '1px solid transparent',
                  opacity: isAvailable ? 1 : 0.3,
                }}
              >
                {/* {value} */}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}: {
  analytics?: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  lines: CartLineInput[];
  onClick?: () => void;
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <Button
            variant="addGreen"
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className="text-2xl"
          >
            {children}
          </Button>
        </>
      )}
    </CartForm>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
` as const;
