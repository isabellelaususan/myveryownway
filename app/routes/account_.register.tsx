import {Form, Link, useActionData} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {
  json,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import type {CustomerCreateMutation} from 'storefrontapi.generated';
import Button from '~/components/Button';

type ActionResponse = {
  error: string | null;
  newCustomer:
    | NonNullable<CustomerCreateMutation['customerCreate']>['customer']
    | null;
};

export async function loader({context}: LoaderFunctionArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account');
  }

  return json({});
}

export async function action({request, context}: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {storefront, session} = context;
  const form = await request.formData();
  const email = String(form.has('email') ? form.get('email') : '');
  const password = form.has('password') ? String(form.get('password')) : null;
  const passwordConfirm = form.has('passwordConfirm')
    ? String(form.get('passwordConfirm'))
    : null;

  const validPasswords =
    password && passwordConfirm && password === passwordConfirm;

  const validInputs = Boolean(email && password);
  try {
    if (!validPasswords) {
      throw new Error('Passwords do not match');
    }

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const {customerCreate} = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {email, password},
      },
    });

    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }

    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not create customer');
    }

    // get an access token for the new customer
    const {customerAccessTokenCreate} = await storefront.mutate(
      REGISTER_LOGIN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          },
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error('Missing access token');
    }
    session.set(
      'customerAccessToken',
      customerAccessTokenCreate?.customerAccessToken,
    );

    return json(
      {error: null, newCustomer},
      {
        status: 302,
        headers: {
          Location: '/account',
        },
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function Register() {
  const data = useActionData<ActionResponse>();
  const error = data?.error || null;
  return (
    <section className="relative pt-40 pb-52">
      <Image
        srcSet="/login/loginOrange.svg"
        alt="loginOrange"
        className="absolute -left-10"
        width={294}
        height={294}
      />
      <Image
        srcSet="/login/loginPink.svg"
        alt="loginPink"
        className="absolute 2xl:right-72 right-20 top-72"
        width={181}
      />

      {/* SignUp */}
      <div className="max-w-[1410px] w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto ">
        <h1 className="font-MontserratBold text-[96px] text-center">
          CREATE ACCOUNT
        </h1>
        <p className="font-MontserratBold text-2xl text-center mt-5 mb-[33px]">
          Only a few steps to sign up and it will make your life a lot easier!
        </p>
        <Form method="POST" className="w-[640px] block m-[0_auto]">
          <fieldset className="flex flex-col gap-[26px]">
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="First name"
              aria-label="First name"
              minLength={2}
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
            />
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Last name"
              aria-label="Last name"
              minLength={2}
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              aria-label="Password"
              minLength={8}
              required
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
            />
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autoComplete="current-password"
              placeholder="Re-enter password"
              aria-label="Re-enter password"
              minLength={8}
              required
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
            />
          </fieldset>
          {error ? (
            <p>
              <mark>
                <small>{error}</small>
              </mark>
            </p>
          ) : (
            <br />
          )}
          <Button type="submit" variant="sign" className="mt-5">
            {' '}
            SIGN UP
          </Button>
          <div className="flex justify-end gap-6 mt-5">
            <Link
              to="#"
              className="text-2xl text-darkSilver font-MontserratBold"
            >
              Returning Customer?
            </Link>
            <Link
              to="/account/login"
              className="text-2xl text-black font-MontserratBold"
            >
              Login
            </Link>
          </div>
        </Form>
        {/* <br /> */}
        {/* <p>
          <Link to="/account/login">Login →</Link>
        </p> */}
      </div>
      <Image
        srcSet="/login/loginGreenCut.svg"
        alt="loginGreenCut"
        className="absolute 2xl:left-96 left-56 bottom-[74px]"
        width={140}
      />
      <Image
        srcSet="/login/loginBlue.svg"
        alt="loginBlue"
        className="absolute -right-10 bottom-[93px]"
        width={157}
        height={157}
      />
    </section>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate
const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraccesstokencreate
const REGISTER_LOGIN_MUTATION = `#graphql
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
` as const;
