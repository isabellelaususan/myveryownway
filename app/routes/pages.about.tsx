import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';
import Slider from '~/components/Slider';
import {myVeryLogo} from '~/components/Slider/constants';
import BagOne from '../../public/Shop/about/bagOne.png';
import BagThree from '../../public/Shop/about/bagThree.png';
import BagTwo from '../../public/Shop/about/bagTwo.png';
import ourStory from '../../public/Shop/about/ourStory.png';
import storyOne from '../../public/Shop/about/storyOne.png';
import storyThree from '../../public/Shop/about/storyThree.png';
import storyTwo from '../../public/Shop/about/storyTwo.png';

export default function About() {
  return (
    <>
      {/* Logo */}
      <section className="lg:py-48 py-36 relative">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] md:px-10 sm:px-[30px] px-[20px] mx-auto">
          <div className="flex justify-center ">
            <Image
              srcSet="/icons/blueabout.svg"
              alt="logo"
              width={126}
              className="absolute lg:top-24 top-12 lg:right-[38%] right-[20%] lg:w-[126px] w-[96px]"
            />
            <Image
              srcSet="/icons/redFullR.svg"
              alt="redFullR"
              width={163}
              className="absolute top-56 2xl:right-[28%] lg:right-[22%] right-10 lg:w-[163px] w-[124px]"
            />
            <Image
              srcSet="/Shop/about/logo.png"
              alt="logo"
              width={300}
              className="lg:w-[300px] md:w-[229px]"
            />
            <div className="absolute top-36 2xl:left-[27%] lg:left-[19%] left-10">
              <div className="relative">
                <Image
                  srcSet="/icons/greenabout.svg"
                  alt="greenabout"
                  width={234}
                  className="lg:w-[234px] w-[178px]"
                />
                <h4 className="font-MontserratSemiBold lg:text-[66px] text-[50px] absolute top-4 left-4 rotate-[350deg]">
                  hello!
                </h4>
              </div>
            </div>
            <Image
              srcSet="/icons/pinkRound.svg"
              alt="orangeZig"
              width={100}
              className="absolute bottom-28 2xl:left-[34%] lg:left-1/4 left-[12%] lg:w-[100px] w-[76px]"
            />
            <Image
              srcSet="/icons/orangeZig.svg"
              alt="orangeZig"
              width={194}
              className="absolute lg:bottom-28 bottom-20 2xl:right-[38%] lg:right-[33%] right-1/4 -z-10 lg:w-[194px] w-[148px]"
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 pt-8 relative overflow-hidden">
        <Image
          srcSet="/icons/purpleChakar.svg"
          alt="purpleChakar"
          width={223}
          className="absolute top-0 lg:-right-20 -right-14 2xl:w-[223px] lg:w-[173px] w-[119px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[40px] px-[20px] mx-auto">
          <div className="flex 2xl:gap-40 lg:gap-32 gap-10 2xl:pr-0 lg:pr-24">
            <div className="w-2/5">
              <img src={ourStory} alt="ourStory" className="w-full" />
            </div>
            <div className="w-3/5">
              <div className="flex items-center lg:gap-12 gap-6 lg:mb-16 mb-5">
                <Image
                  srcSet="/icons/skyLogo.svg"
                  alt="sky-logo"
                  width={116}
                  className="lg:w-[116px] w-[70px]"
                />
                <h2 className="lg:text-[80px] text-[40px] font-MontserratSemiBold">
                  Our Story
                </h2>
              </div>
              <p className="lg:text-[26px] text-[18px] font-MontserratRegular">
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
              <p className="lg:text-[26px] text-[18px] font-MontserratRegular lg:mt-14 mt-6">
                What started as a dream quickly became a reality as we combined
                various bag designs with a unique concept.
              </p>
              <Image
                srcSet="/icons/smile.svg"
                alt="smile"
                width={100}
                className="ml-auto 2xl:mr-0 lg:mr-20 mr-8"
              />
            </div>
          </div>
          <p className="font-MontserratRegular lg:text-[26px] text-[20px] text-center lg:px-20 lg:pt-24 pt-11 lg:pb-24 pb-6">
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
            className="block m-auto xl:w-[260px] w-[140px]"
          />
        </div>
        <Image
          srcSet="/icons/creamZigzag.svg"
          alt="creamZigzag"
          width={241}
          className="absolute -left-20 bottom-96 2xl:w-[241px] w-[200px] -z-10"
        />
      </section>

      {/* Logo Slider */}
      <section className="lg:mt-14 lg:mb-36 mb-14">
        <Slider mySlider={myVeryLogo} />
      </section>

      {/* Three image */}
      <section className="relative pb-20 overflow-hidden">
        <Image
          srcSet="/icons/greenHeart.svg"
          alt="greenHeart"
          width={204}
          className="absolute -right-8 2xl:top-80 top-[26rem] 2xl:w-[204px] w-[140px] lg:block hidden"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[40px] px-[20px] mx-auto">
          <div className="flex lg:gap-8 gap-3 justify-center">
            <Image
              srcSet={storyOne}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] w-[220px]"
            />
            <Image
              srcSet={storyTwo}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] w-[220px]"
            />
            <Image
              srcSet={storyThree}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] w-[220px]"
            />
          </div>

          <div className="lg:mt-36 mt-10">
            <p className="font-MontserratRegular lg:text-[28px] text-[22px] text-center">
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
            <p className="font-MontserratRegular lg:text-[28px] text-[22px] text-center mt-10">
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
            className="absolute -left-20 top-[45%] 2xl:w-[246px] w-[200px] lg:block hidden"
          />

          <Image
            srcSet="/Shop/about/aboutAllbag.png"
            alt="aboutAllbag"
            width={974}
            className="block m-auto lg:my-20 my-14"
          />
          <p className="font-MontserratRegular lg:text-[28px] text-[22px] text-center">
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
          className="absolute -right-8 2xl:bottom-40 bottom-64 2xl:w-[249px] w-[160px] lg:block hidden"
        />
      </section>

      {/* community */}
      <section className="relative lg:mt-20 lg:mb-64 mb-56">
        <Image
          srcSet="/icons/greenLine.svg"
          alt="greenLine"
          className="absolute -left-24 top-32 lg:block"
          width={241}
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[40px] px-[20px] mx-auto">
          <div className=" uppercase text-center">
            <h2 className="font-MontserratSemiBold lg:text-[85px] text-[42px] lg:mr-[27rem] mr-56 flex justify-center lg:gap-9 gap-5">
              <Image
                srcSet="/icons/blackArrow.svg"
                alt="blackArrow"
                width={124}
                className="lg:w-[124px] w-[62px]"
              />{' '}
              Join the
            </h2>
            <h2 className="font-MontserratExtraBold italic lg:text-[85px] text-[42px]">
              “My Very Own Way”
            </h2>
            <h2 className="font-MontserratSemiBold lg:text-[55px] text-[32px] lg:ml-96 ml-56">
              Community!
              <Image
                srcSet="/icons/blackLineR.svg"
                alt="blackLineR"
                width={128}
                className="block ml-auto lg:mr-52 mr-20 lg:w-[128px] w-[63px]"
              />
            </h2>
          </div>

          <Button
            variant="connect"
            className="rotate-[3.49deg] absolute lg:top-80 top-44 2xl:left-[33rem] lg:left-52 left-20"
          >
            {' '}
            <NavLink to="/">connect with us</NavLink>
          </Button>
          <div className="rotate-[-3.48deg] absolute lg:top-[26rem] top-60 2xl:left-[48rem] lg:left-[30rem] left-64">
            <div className="relative mt-9">
              <Button variant="tag">
                <NavLink to="/">tag us</NavLink>
              </Button>
              <Image
                srcSet="/icons/redHandLogo.svg"
                alt="redHandLogo"
                width={120}
                className="absolute lg:-top-14 -top-4 lg:left-64 left-40 lg:w-[120px] w-[60px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three image */}
      <section className="relative pb-20 overflow-hidden">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[40px] px-[20px] mx-auto">
          <div className="flex lg:gap-8 gap-3 justify-center">
            <Image
              srcSet={BagOne}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] sm:w-[200px] w-24"
            />
            <Image
              srcSet={BagTwo}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] sm:w-[200px] w-24"
            />
            <Image
              srcSet={BagThree}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] sm:w-[200px] w-24"
            />

            <Image
              srcSet="/icons/redFlower.svg"
              alt="redFlower"
              className="absolute 2xl:right-44 lg:right-44 lg:top-24 top-16 -z-10 2xl:w-[241px] lg:w-[160px] w-[96px] sm:block hidden"
              width={241}
            />
          </div>

          <div className="lg:mt-36 mt-10">
            <p className="font-MontserratRegular lg:text-[28px] sm:text-[22px] text-sm text-center">
              We invite you to embark on a journey of self-expression and
              discovery. <br /> Whether you&apos;re picking out a statement
              piece for a special occasion or a daily <br />
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
              className="absolute 2xl:-left-32 lg:-left-16 sm:top-0 -top-7 2xl:w-[139px] lg:w-[100px] sm:w-[66px] w-9"
              width={139}
            />
            <Image
              srcSet="/Shop/about/allbag.png"
              alt="allBag"
              width={974}
              className="block m-auto lg:my-40 my-16 2xl:w-[974px] lg:w-[747px] sm:w-[456px] w-[314px]"
            />
            <Image
              srcSet="/icons/yellowWave.svg"
              alt="yellowWave"
              className="absolute right-0 sm:bottom-0 lg:w-[130px] sm:w-[62px] w-9 -bottom-6"
              width={130}
            />
          </div>
          <Image
            srcSet="/icons/yellowPipe.svg"
            alt="yellowPipe"
            className="absolute -right-20 bottom-[40rem] 2xl:w-[247px] w-[200px] lg:block hidden"
            width={247}
          />
          <Image
            srcSet="/icons/blueHexagon.svg"
            alt="blueHexagon"
            className="absolute -left-16 bottom-96 2xl:w-[224px] w-[180px] lg:block hidden"
            width={224}
          />
          <p className="font-MontserratRegular lg:text-[28px] sm:text-[22px] text-sm text-center">
            Experience the joy of picking out and carrying a bag that&apos;s
            uniquely yours. <br />{' '}
            <span className="italic font-MontserratBold">
              Your bag. Your style. Your very own way.
            </span>
          </p>

          <div className="flex justify-center sm:gap-11 gap-5 lg:pt-20 pt-10 lg:pb-20 pb-0">
            <Button variant="shop" className="text-[10px]">
              <NavLink to="/">Shop Now</NavLink>
            </Button>
            <Button variant="mixMatch" className="px-7 text-[10px]">
              <NavLink to="/">MIX & MATCH NOW</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
