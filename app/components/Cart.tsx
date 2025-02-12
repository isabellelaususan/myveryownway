import {Link} from '@remix-run/react';
import {
  CartForm,
  Image,
  Money,
  OptimisticInput,
  useOptimisticData,
} from '@shopify/hydrogen';
import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import Button from './Button';

type CartLine = CartApiQueryFragment['lines']['nodes'][0];

type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: 'page' | 'aside';
};

export function CartMain({layout, cart}: CartMainProps) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}

function CartDetails({layout, cart}: CartMainProps) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="cart-details md:w-[789px] w-full block m-[0_auto] md:px-0 px-8">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({
  lines,
  layout,
}: {
  layout: CartMainProps['layout'];
  lines: CartApiQueryFragment['lines'] | undefined;
}) {
  if (!lines) return null;

  return (
    <div aria-labelledby="cart-lines">
      <ul className="flex flex-col gap-[55px]">
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}

export function CartLineItem({
  layout,
  line,
}: {
  layout: CartMainProps['layout'];
  line: CartLine;
}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const {id: lineId, quantity} = line;

  const optimistic = useOptimisticData<{
    action?: 'removing';
    quantity?: number;
  }>(id);

  return (
    <li
      key={id}
      className="flex"
      style={{display: optimistic?.action === 'removing' ? 'none' : 'flex'}}
    >
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={266}
          loading="lazy"
          width={240}
          className="md:!mr-[26px] mr-2.5 md:rounded-[40px] md:border-[3px] border-2 border-black object-cover rounded-xl md:w-[240px] w-20 md:h-[266px] h-24"
        />
      )}

      <div className="font-MontserratSemiBold w-full">
        <Link
          prefetch="intent"
          to={lineItemUrl}
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        >
          <p className="md:text-[35px] text-xs leading-normal">
            <strong>{product.title}</strong>
          </p>
        </Link>

        <div className="flex justify-between md:pb-[57px] pb-2.5 md:pt-10 pt-2 items-center">
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.name} className="font-MontserratSemiBold">
                <small className="flex md:gap-6 gap-2 md:text-[22px] text-xs leading-normal font-MontserratMedium">
                  <span className="font-MontserratBold">{option.name}:</span>{' '}
                  {option.value}
                </small>
              </li>
            ))}
          </ul>
          <CartLineQuantity line={line} />
        </div>
        <div className="flex justify-between items-baseline">
          <CartLinePrice line={line} as="span" />
          <CartLineRemoveButton lineIds={[lineId]} />
        </div>
      </div>
    </li>
  );
}

function CartCheckoutActions({checkoutUrl}: {checkoutUrl: string}) {
  if (!checkoutUrl) return null;

  return (
    <div className="mt-[55px] md:px-[74px]">
      <a href={checkoutUrl} target="_self">
        <Button variant="login" className="w-full">
          Checkout
        </Button>
      </a>
      <br />
    </div>
  );
}

export function CartSummary({
  cost,
  layout,
  children = null,
}: {
  children?: React.ReactNode;
  cost: CartApiQueryFragment['cost'];
  layout: CartMainProps['layout'];
}) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside p-5';

  return (
    <div aria-labelledby="cart-summary" className={className}>
      {/* <h4 className="text-xl font-MontserratSemiBold mb-2">Totals</h4> */}
      {/* <dl className="cart-subtotal flex justify-between mb-2">
        <dt className="text-xl font-MontserratSemiBold mb-2">Subtotal :</dt>
        <dd className="text-xl font-MontserratSemiBold">
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl> */}
      {children}
    </div>
  );
}

function CartLineRemoveButton({lineIds}: {lineIds: string[]}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <OptimisticInput id={lineIds[0]} data={{action: 'removing'}} />
      <button
        type="submit"
        className="md:text-[22px] text-xs leading-normal text-remove font-MontserratMedium"
      >
        Remove
      </button>
    </CartForm>
  );
}

export function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="flex justify-between items-center">
      <span className="md:text-[22px] text-xs leading-normal md:pr-6 pr-2">
        Quantity:
      </span>
      <div className="cart-line-quantity gap-3.5 text-xl items-baseline">
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            name="decrease-quantity"
            value={prevQuantity}
          >
            <span className="md:text-xl text-xs leading-normal">&#8722; </span>
          </button>
        </CartLineUpdateButton>
        <small className="md:text-[22px] text-xs leading-normal">
          {quantity}
        </small>
        <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <button
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
          >
            <span className="md:text-xl text-xs leading-normal">&#43;</span>
          </button>
        </CartLineUpdateButton>
      </div>
    </div>
  );
}

function CartLinePrice({
  line,
  priceType = 'regular',
  ...passthroughProps
}: {
  line: CartLine;
  priceType?: 'regular' | 'compareAt';
  [key: string]: any;
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div className="md:text-[22px] text-xs leading-normal font-MontserratSemiBold flex md:gap-6 gap-2">
      <span className="font-MontserratBold">Price:</span>{' '}
      <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />
    </div>
  );
}

export function CartEmpty({
  hidden = false,
  layout = 'aside',
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  return (
    <div hidden={hidden} className="w-[789px] m-[0_auto]">
      <br />
      <p className="font-MontserratSemiBold text-center text-2xl pb-12">
        Looks like you haven&rsquo;t added anything yet, <br /> let&rsquo;s get
        you started!
      </p>
      <br />
      <Link
        to="/pages/shop"
        onClick={() => {
          if (layout === 'aside') {
            window.location.href = '/pages/shop';
          }
        }}
      >
        <Button variant="login" className="w-full !text-xl">
          Continue shopping
        </Button>
      </Link>
    </div>
  );
}

function CartDiscounts({
  discountCodes,
}: {
  discountCodes: CartApiQueryFragment['discountCodes'];
}) {
  const codes: string[] =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div className="font-MontserratSemiBold">
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount pb-2.5 gap-16">
              <code>{codes?.join(', ')}</code>
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        {/* <div className="flex justify-between mb-5">
          <input
            type="text"
            name="discountCode"
            placeholder="Discount code"
            className="p-2.5 rounded-xl border focus-visible:outline-0"
          />
          &nbsp;
          <button
            type="submit"
            className="bg-lightPink text-black text-[20px] rounded-full py-1 px-7 font-MontserratSemiBold"
          >
            Apply
          </button>
        </div> */}
        <></>
      </UpdateDiscountForm>
    </div>
  );
}

function UpdateDiscountForm({
  discountCodes,
  children,
}: {
  discountCodes?: string[];
  children: React.ReactNode;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

export function CartLineUpdateButton({
  children,
  lines,
}: {
  children: React.ReactNode;
  lines: CartLineUpdateInput[];
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
