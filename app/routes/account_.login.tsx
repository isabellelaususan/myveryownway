import {Form, Link, useActionData, type MetaFunction} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {
  json,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import Button from '~/components/Button';

type ActionResponse = {
  error: string | null;
};

export const meta: MetaFunction = () => {
  return [{title: 'Login'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  if (await context.session.get('customerAccessToken')) {
    return redirect('/account');
  }
  return json({});
}

export async function action({request, context}: ActionFunctionArgs) {
  const {session, storefront} = context;

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    const form = await request.formData();
    const email = String(form.has('email') ? form.get('email') : '');
    const password = String(form.has('password') ? form.get('password') : '');
    const validInputs = Boolean(email && password);

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const {customerAccessTokenCreate} = await storefront.mutate(
      LOGIN_MUTATION,
      {
        variables: {
          input: {email, password},
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error(customerAccessTokenCreate?.customerUserErrors[0].message);
    }

    const {customerAccessToken} = customerAccessTokenCreate;
    session.set('customerAccessToken', customerAccessToken);

    return redirect('/account');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function Login() {
  const data = useActionData<ActionResponse>();
  const error = data?.error || null;

  return (
    <section className="relative md:pt-40 pt-20 md:pb-52 pb-20">
      <Image
        srcSet="/login/loginOrange.svg"
        alt="loginOrange"
        className="absolute md:-left-10 -left-11 md:w-[294px] w-[89px] md:top-32 top-28"
        width={294}
        height={294}
      />
      <Image
        srcSet="/login/loginPink.svg"
        alt="loginPink"
        className="absolute 2xl:right-72 md:right-20 right-0 md:top-72 top-14 md:w-[181px] w-[68px] -z-10"
        width={181}
      />
      <h1 className="font-MontserratBold lg:text-[96px] text-[32px] text-center">
        WELCOME BACK
      </h1>
      <p className="font-MontserratBold lg:text-2xl text-[11px] text-center lg:px-[350px] px-9 mt-5 mb-[33px]">
        Log in to your account so you can track your orders <br /> and check out
        faster!
      </p>
      <Form
        method="PUT"
        className="lg:w-[640px] w-full block m-[0_auto] lg:px-0 px-[30px]"
      >
        <fieldset className="flex flex-col lg:gap-[26px] gap-2.5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
            aria-label="Email"
            minLength={2}
            className="border-black border lg:rounded-[30px] rounded-2xl px-[23px] py-3.5 lg:text-[32px] text-sm w-full font-MontserratRegular placeholder:text-placeholder"
          />
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Password"
              aria-label="Password"
              minLength={2}
              className="border-black border lg:rounded-[30px] rounded-2xl px-[23px] py-3.5 lg:text-[32px] text-sm font-MontserratRegular w-full placeholder:text-placeholder"
            />
            <Link
              to="/account/recover"
              className="absolute right-[25px] top-[30%] lg:text-2xl text-xs text-darkSilver font-MontserratBold"
            >
              Forgot your password?
            </Link>
          </div>
        </fieldset>
        {error ? (
          <p>
            <mark>
              <small>{error}</small>
            </mark>
          </p>
        ) : (
          ''
        )}
        <Button type="submit" variant="login" className="lg:mt-5 mt-2.5">
          {' '}
          Login
        </Button>
        <div className="flex justify-end lg:gap-6 gap-2 mt-5 lg:text-2xl text-xs font-MontserratBold">
          <Link to="/account/register" className="text-darkSilver">
            Don&apos;t have an account?
          </Link>
          <Link to="/account/register" className="text-black">
            Sign up here!
          </Link>
        </div>
      </Form>
      <Image
        srcSet="/login/loginGreenCut.svg"
        alt="loginGreenCut"
        className="absolute 2xl:left-96 md:left-56 left-[25px] lg:bottom-[74px] bottom-10 md:w-[140px] w-[52px]"
        width={140}
      />
      <Image
        srcSet="/login/loginBlue.svg"
        alt="loginBlue"
        className="absolute md:-right-10 -right-[25px] bottom-[93px] md:w-[157px] w-14"
        width={157}
        height={157}
      />
      {/* <br /> */}
      {/* <div>
        <p>
          <Link to="/account/recover">Forgot password →</Link>
        </p>
        <p>
          <Link to="/account/register">Register →</Link>
        </p>
      </div> */}
    </section>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraccesstokencreate
const LOGIN_MUTATION = `#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
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
