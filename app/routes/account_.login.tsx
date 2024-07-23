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
      <h1 className="font-MontserratBold text-[96px] text-center">
        WELCOME BACK
      </h1>
      <p className="font-MontserratBold text-2xl text-center px-[350px] mt-5 mb-[33px]">
        Log in to your account so you can track your orders and check out
        faster!
      </p>
      <Form method="PUT" className="w-[640px] block m-[0_auto]">
        <fieldset className="flex flex-col gap-[26px]">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
            aria-label="Email"
            minLength={2}
            className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular"
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
              className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular w-full"
            />
            <Link
              to="/account/recover"
              className="absolute right-[25px] top-[30%] text-2xl text-darkSilver font-MontserratBold"
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
          <br />
        )}
        <Button type="submit" variant="login" className="mt-5">
          {' '}
          Login
        </Button>
        <div className="flex justify-end gap-6 mt-5">
          <Link
            to="/account/register"
            className="text-2xl text-darkSilver font-MontserratBold"
          >
            Don&apos;t have an account?
          </Link>
          <Link
            to="/account/register"
            className="text-2xl text-black font-MontserratBold"
          >
            Sign up here!
          </Link>
        </div>
      </Form>
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
