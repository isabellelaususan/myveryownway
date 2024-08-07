import {NavLink, useLoaderData, type MetaFunction} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {type Shop} from '@shopify/hydrogen/storefront-api-types';
import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Slider from '~/components/Slider';
import {myVeryLogo} from '~/components/Slider/constants';
import BagOne from '../../public/Shop/about/bagOne.png';
import BagThree from '../../public/Shop/about/bagThree.png';
import BagTwo from '../../public/Shop/about/bagTwo.png';
import ourStory from '../../public/Shop/about/ourStory.png';
import storyOne from '../../public/Shop/about/storyOne.png';
import storyThree from '../../public/Shop/about/storyThree.png';
import storyTwo from '../../public/Shop/about/storyTwo.png';

type SelectedPolicies = keyof Pick<
  Shop,
  'privacyPolicy' | 'shippingPolicy' | 'termsOfService' | 'refundPolicy'
>;

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.policy.title ?? ''}`}];
};

export async function loader({params, context}: LoaderFunctionArgs) {
  if (!params.handle) {
    throw new Response('No handle was passed in', {status: 404});
  }

  const policyName = params.handle.replace(
    /-([a-z])/g,
    (_: unknown, m1: string) => m1.toUpperCase(),
  ) as SelectedPolicies;

  const data = await context.storefront.query(POLICY_CONTENT_QUERY, {
    variables: {
      privacyPolicy: false,
      shippingPolicy: false,
      termsOfService: false,
      refundPolicy: false,
      [policyName]: true,
      language: context.storefront.i18n?.language,
    },
  });

  const policy = data.shop?.[policyName];

  if (!policy) {
    throw new Response('Could not find the policy', {status: 404});
  }

  return json({policy});
}

export default function Policy() {
  const {policy} = useLoaderData<typeof loader>();

  return (
    // <div className="policy">
    //   <br />
    //   <br />
    //   <div>
    //     <Link to="/policies">← Back to Policies</Link>
    //   </div>
    //   <br />
    //   <h1>{policy.title}</h1>
    //   <div dangerouslySetInnerHTML={{__html: policy.body}} />
    // </div>
    <>
      {/* Logo */}
      <section className="py-48 relative">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="flex justify-center ">
            <Image
              srcSet="/icons/blueabout.svg"
              alt="logo"
              width={126}
              className="absolute top-24 right-[38%]"
            />
            <Image
              srcSet="/icons/redFullR.svg"
              alt="redFullR"
              width={163}
              className="absolute top-56 2xl:right-[28%] right-[22%]"
            />
            <Image srcSet="/Shop/about/logo.png" alt="logo" width={300} />
            <div className="absolute top-36 2xl:left-[27%] left-[19%]">
              <div className="relative">
                <Image
                  srcSet="/icons/greenabout.svg"
                  alt="greenabout"
                  width={234}
                />
                <h4 className="font-MontserratSemiBold text-[66px] absolute top-4 left-4 rotate-[350deg]">
                  hello!
                </h4>
              </div>
            </div>
            <Image
              srcSet="/icons/pinkRound.svg"
              alt="orangeZig"
              width={100}
              className="absolute bottom-28 2xl:left-[34%] left-1/4"
            />
            <Image
              srcSet="/icons/orangeZig.svg"
              alt="orangeZig"
              width={194}
              className="absolute bottom-28 2xl:right-[38%] right-[33%] -z-10"
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 relative overflow-hidden">
        <Image
          srcSet="/icons/purpleChakar.svg"
          alt="purpleChakar"
          width={223}
          className="absolute top-0 -right-20 2xl:w-[223px] w-[173px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="flex 2xl:gap-40 gap-32 2xl:pr-0 pr-24">
            <div className="w-2/5">
              <Card>
                <img src={ourStory} alt="ourStory" className="w-full" />
              </Card>
            </div>
            <div className="w-3/5">
              <div className="flex items-center gap-12 mb-16">
                <Image srcSet="/icons/skyLogo.svg" alt="sky-logo" width={116} />
                <h2 className="text-[80px] font-MontserratSemiBold">
                  Our Story
                </h2>
              </div>
              <p className="text-[26px] font-MontserratRegular">
                “My Very Own Way” emerged from a passion for fashion and a
                desire to break away from the ordinary. Inspired by the notion
                that{' '}
                <span className="italic font-MontserratBold">
                  every individual deserves a chance to showcase their
                  personality
                </span>
                , we set out to create a brand that offered unparalleled
                personalization.
              </p>
              <p className="text-[26px] font-MontserratRegular mt-14">
                What started as a dream quickly became a reality as we combined
                various bag designs with a unique concept.
              </p>
              <Image
                srcSet="/icons/smile.svg"
                alt="smile"
                width={100}
                className="ml-auto 2xl:mr-0 mr-20"
              />
            </div>
          </div>
          <p className="font-MontserratRegular text-[26px] text-center px-20 pt-24 pb-24">
            Our mission is to redefine the way you view accessories. <br /> We
            strive to create a space where your imagination runs free, <br />
            where{' '}
            <span className="font-MontserratBold">
              you can choose designs, colors, and accessories
            </span>{' '}
            that resonate with your essence. We value uniqueness, quality, and
            authenticity, and we are committed to providing you with a canvas
            that reflects your style journey.
          </p>
          <Image
            srcSet="/icons/pinkGreenAbout.svg"
            alt="pinkGreenAbout"
            width={260}
            className="block m-auto"
          />
        </div>
        <Image
          srcSet="/icons/creamZigzag.svg"
          alt="creamZigzag"
          width={241}
          className="absolute -left-20 bottom-96 2xl:w-[241px] w-[200px]"
        />
      </section>

      {/* Logo Slider */}
      <section className="mt-14 mb-36">
        <Slider mySlider={myVeryLogo} />
      </section>

      {/* Three image */}
      <section className="relative pb-20 overflow-hidden">
        <Image
          srcSet="/icons/greenHeart.svg"
          alt="greenHeart"
          width={204}
          className="absolute -right-8 2xl:top-80 top-[26rem] 2xl:w-[204px] w-[140px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="flex gap-8 justify-center">
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={storyOne} alt="ourStory" className="w-full" />
            </Card>
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={storyTwo} alt="ourStory" className="w-full" />
            </Card>
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={storyThree} alt="ourStory" className="w-full" />
            </Card>
          </div>

          <div className="mt-36">
            <p className="font-MontserratRegular text-[28px] text-center">
              <span className="font-MontserratBold"> “My Very Own Way”</span>{' '}
              bags give you the absolute{' '}
              <span className="font-MontserratBold italic">
                freedom of choice. <br />
              </span>{' '}
              It allows you to{' '}
              <span className="font-MontserratBold italic">
                mix and match your favorite bag designs
              </span>{' '}
              with different straps and accessories in your color of choice.
            </p>
            <p className="font-MontserratRegular text-[28px] text-center mt-10">
              {' '}
              Every piece is removable and interchangeable <br />
              to enable{' '}
              <span className="font-MontserratBold italic">
                complete versatility
              </span>{' '}
              which makes it the perfect bag for every occasion.
            </p>
          </div>
          <Image
            srcSet="/icons/darkPinkRound.svg"
            alt="darkPinkRound"
            width={246}
            className="absolute -left-20 top-[45%] 2xl:w-[246px] w-[200px]"
          />

          <Image
            srcSet="/Shop/about/aboutAllbag.png"
            alt="aboutAllbag"
            width={974}
            className="block m-auto my-20"
          />
          <p className="font-MontserratRegular text-[28px] text-center">
            At “My Very Own Way” we believe that every accessory should be a
            canvas <br />
            for self-expression. We are not just a brand;{' '}
            <span className="italic font-MontserratBold">
              we are a platform that empowers you to pick out a bag as unique as
              you are.{' '}
            </span>
            Our journey began with a simple idea: to provide individuals with
            the opportunity to curate their style through bags, an accessory you
            bring everywhere.
          </p>
        </div>
        <Image
          srcSet="/icons/skyBlueCurve.svg"
          alt="skyBlueCurve"
          width={249}
          className="absolute -right-8 2xl:bottom-40 bottom-64 2xl:w-[249px] w-[160px]"
        />
      </section>

      {/* community */}
      <section className="relative mt-20 mb-64">
        <Image
          srcSet="/icons/greenLine.svg"
          alt="greenLine"
          className="absolute -left-24 top-32"
          width={241}
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className=" uppercase text-center">
            <h2 className="font-MontserratSemiBold text-[85px] mr-[27rem] flex justify-center gap-9">
              <Image
                srcSet="/icons/blackArrow.svg"
                alt="blackArrow"
                width={124}
              />{' '}
              Join the
            </h2>
            <h2 className="font-MontserratExtraBold italic text-[85px]">
              “My Very Own Way”
            </h2>
            <h2 className="font-MontserratSemiBold text-[55px] ml-96">
              Community!
              <Image
                srcSet="/icons/blackLineR.svg"
                alt="blackLineR"
                width={128}
                className="block ml-auto mr-52"
              />
            </h2>
          </div>

          <Button
            variant="connect"
            className="rotate-[3.49deg] absolute top-80 2xl:left-[33rem] left-52"
          >
            {' '}
            <NavLink to="/">connect with us</NavLink>
          </Button>
          <div className="rotate-[-3.48deg] absolute top-[26rem] 2xl:left-[48rem] left-[30rem]">
            <div className="relative mt-9">
              <Button variant="tag">
                <NavLink to="/">tag us</NavLink>
              </Button>
              <Image
                srcSet="/icons/redHandLogo.svg"
                alt="redHandLogo"
                width={120}
                className="absolute -top-14 left-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three image */}
      <section className="relative pb-20 overflow-hidden">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="flex gap-8 relative">
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={BagOne} alt="ourStory" className="w-full" />
            </Card>
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={BagTwo} alt="ourStory" className="w-full" />
            </Card>
            <Card className="border-[3px] border-black rounded-[29px]">
              <img src={BagThree} alt="ourStory" className="w-full" />
            </Card>

            <Image
              srcSet="/icons/redFlower.svg"
              alt="redFlower"
              className="absolute 2xl:-right-36 -right-20 top-32 -z-10 2xl:w-[241px] w-[160px]"
              width={241}
            />
          </div>

          <div className="mt-36">
            <p className="font-MontserratRegular text-[28px] text-center">
              We invite you to embark on a journey of self-expression and
              discovery. <br /> Whether you're picking out a statement piece for
              a special occasion or a daily <br />
              companion that reflects your style, “My Very Own Way” is here to
              bring out your inner artist.
              <span className="font-MontserratBold italic">
                {' '}
                Together, we celebrate individuality, creativity, and the art of
                customization.
              </span>
            </p>
          </div>
          <div className="relative">
            <Image
              srcSet="/icons/star.svg"
              alt="star"
              className="absolute 2xl:-left-32 -left-16 top-0 2xl:w-[139px] w-[100px]"
              width={139}
            />
            <Image
              srcSet="/Shop/about/allbag.png"
              alt="allBag"
              width={974}
              className="block m-auto my-40 2xl:w-[974px] w-[747px]"
            />
            <Image
              srcSet="/icons/yellowWave.svg"
              alt="yellowWave"
              className="absolute right-0 bottom-0"
              width={130}
            />
          </div>
          <Image
            srcSet="/icons/yellowPipe.svg"
            alt="yellowPipe"
            className="absolute -right-20 bottom-[40rem] 2xl:w-[247px] w-[200px]"
            width={247}
          />
          <Image
            srcSet="/icons/blueHexagon.svg"
            alt="blueHexagon"
            className="absolute -left-16 bottom-96 2xl:w-[224px] w-[180px]"
            width={224}
          />
          <p className="font-MontserratRegular text-[28px] text-center">
            Experience the joy of picking out and carrying a bag that's uniquely
            yours. <br />{' '}
            <span className="italic font-MontserratBold">
              Your bag. Your style. Your very own way.
            </span>
          </p>

          <div className="flex justify-center gap-11 py-20">
            <Button variant="shop">
              <NavLink to="/">Shop Now</NavLink>
            </Button>
            <Button variant="mixMatch">
              <NavLink to="/">MIX & MATCH NOW</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/Shop
const POLICY_CONTENT_QUERY = `#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
` as const;
