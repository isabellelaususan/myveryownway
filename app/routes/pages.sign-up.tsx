import {Form, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';

export default function SignUp() {
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

        {/* SignUp */}
        <div className="max-w-[1410px] w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto ">
          <h1 className="font-MontserratBold text-[96px] text-center">
            CREATE ACCOUNT
          </h1>
          <p className="font-MontserratBold text-2xl text-center mt-5 mb-[33px]">
            Only a few steps to sign up and it will make your life a lot easier!
          </p>

          <Form method="PUT" className="w-[640px] block m-[0_auto]">
            <fieldset className="flex flex-col gap-[26px]">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                aria-label="First name"
                // defaultValue={customer.firstName ?? ''}
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
                // defaultValue={customer.lastName ?? ''}
                minLength={2}
                className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
                aria-label="Email"
                // defaultValue={customer.firstName ?? ''}
                minLength={2}
                className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Password"
                aria-label="Password"
                // defaultValue={customer.lastName ?? ''}
                minLength={2}
                className="border-black border rounded-[30px] px-[23px] py-3.5 text-[32px] font-MontserratRegular placeholder:text-placeholder"
              />
              <label
                htmlFor="birthDate"
                className="font-MontserratRegular text-placeholder text-[32px] mb-0 mx-6"
              >
                Birthday
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                autoComplete="off"
                aria-label="Birth Date"
                // defaultValue={customer.lastName ?? ''}
                minLength={2}
                className="border-black border rounded-[30px] px-[23px] py-3.5 mt-0 mx-6 text-[32px] font-MontserratRegular placeholder:text-placeholder"
              />
              <div className="flex items-start gap-4">
                <input
                  id="radio"
                  name="password"
                  type="radio"
                  autoComplete="off"
                  aria-label="radio"
                />
                <p className="text-darkSilver font-MontserratBold text-xl">
                  Subscribe to our newsletter for new launches, exclusives &
                  more!
                </p>
              </div>
            </fieldset>
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
                to="/pages/login"
                className="text-2xl text-black font-MontserratBold"
              >
                Login
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
