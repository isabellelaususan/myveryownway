import {Form, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';

export default function Login() {
  return (
    <>
      {/* Logo */}
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
          className="absolute right-72 top-72"
          width={181}
        />

        <div className="max-w-[1410px] w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto ">
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
                // defaultValue={customer.firstName ?? ''}
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
                  // defaultValue={customer.lastName ?? ''}
                  minLength={2}
                  className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular w-full"
                />
                <Link
                  to="#"
                  className="absolute right-[25px] top-[30%] text-2xl text-darkSilver font-MontserratBold"
                >
                  Forgot your password?
                </Link>
              </div>
            </fieldset>
            <Button type="submit" variant="login" className="mt-5">
              {' '}
              Login
            </Button>
            <div className="flex justify-end gap-6 mt-5">
              <Link
                to="#"
                className="text-2xl text-darkSilver font-MontserratBold"
              >
                Don&apos;t have an account?
              </Link>
              <Link
                to="/pages/sign-up"
                className="text-2xl text-black font-MontserratBold"
              >
                Sign up here!
              </Link>
            </div>
          </Form>
        </div>

        <Image
          srcSet="/login/loginGreenCut.svg"
          alt="loginGreenCut"
          className="absolute left-96 bottom-[74px]"
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
    </>
  );
}
