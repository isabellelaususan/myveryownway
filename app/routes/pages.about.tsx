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
      <section className="lg:py-48 md:py-36 py-20 relative">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] md:px-10 sm:px-[30px] px-5 mx-auto">
          <div className="flex justify-center ">
            <Image
              srcSet="/icons/blueabout.svg"
              alt="logo"
              width={126}
              className="absolute lg:top-24 md:top-12 top-11 lg:right-[38%] right-[20%] lg:w-[126px] md:w-[96px] w-[46px]"
            />
            <Image
              srcSet="/icons/redFullR.svg"
              alt="redFullR"
              width={163}
              className="absolute md:top-56 top-24 2xl:right-[28%] lg:right-[22%] right-10 lg:w-[163px] md:w-[124px] w-[60px]"
            />
            <Image
              srcSet="/Shop/about/logo.png"
              alt="logo"
              width={300}
              className="lg:w-[300px] md:w-[229px] w-[110px]"
            />
            <div className="absolute md:top-36 top-[62px] 2xl:left-[27%] lg:left-[19%] left-10">
              <div className="relative">
                <Image
                  srcSet="/icons/greenabout.svg"
                  alt="greenabout"
                  width={234}
                  className="lg:w-[234px] md:w-[178px] w-[86px]"
                />
                <h4 className="font-MontserratSemiBold lg:text-[66px] md:text-[50px] text-[24px] absolute md:top-4 top-2 md:left-4 left-2 rotate-[350deg]">
                  hello!
                </h4>
              </div>
            </div>
            <Image
              srcSet="/icons/pinkRound.svg"
              alt="orangeZig"
              width={100}
              className="absolute md:bottom-28 bottom-16 2xl:left-[34%] lg:left-1/4 md:left-[12%] left-16 lg:w-[100px] md:w-[76px] w-9"
            />
            <Image
              srcSet="/icons/orangeZig.svg"
              alt="orangeZig"
              width={194}
              className="absolute lg:bottom-28 md:bottom-20 bottom-12 2xl:right-[38%] lg:right-[33%] right-1/4 -z-10 lg:w-[194px] md:w-[148px] w-[71px]"
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="md:py-20 py-14 pt-8 relative overflow-hidden">
        <Image
          srcSet="/icons/purpleChakar.svg"
          alt="purpleChakar"
          width={223}
          className="absolute top-0 lg:-right-20 md:-right-14 -right-6 2xl:w-[223px] lg:w-[173px] md:w-[119px] w-[50px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-10 px-5 mx-auto">
          <div className="flex md:flex-row flex-col 2xl:gap-40 lg:gap-32 gap-10 2xl:pr-0 lg:pr-24">
            <div className="md:w-2/5 w-full md:order-1 order-2">
              <img
                src={ourStory}
                alt="ourStory"
                className="w-full md:px-0 px-20"
              />
            </div>
            <div className="md:w-3/5 w-full md:order-2 order-1">
              <div className="flex items-center md:justify-start justify-center lg:gap-12 gap-6 lg:mb-16 md:mb-5 mb-[30px]">
                <Image
                  srcSet="/icons/skyLogo.svg"
                  alt="sky-logo"
                  width={116}
                  className="lg:w-[116px] md:w-[70px] w-12"
                />
                <h2 className="lg:text-[80px] md:text-[40px] text-[34px] font-MontserratSemiBold">
                  Our Story
                </h2>
              </div>
              <p className="lg:text-[26px] md:text-[18px] text-[14px] md:text-left text-center font-MontserratRegular">
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
              <p className="lg:text-[26px] md:text-[18px] text-[14px] md:text-left text-center font-MontserratRegular lg:mt-14 mt-6">
                What started as a dream quickly became a reality as we combined
                various bag designs with a unique concept.
              </p>
              <Image
                srcSet="/icons/smile.svg"
                alt="smile"
                width={100}
                className="ml-auto 2xl:mr-0 lg:mr-20 mr-8 md:w-auto w-[47px]"
              />
            </div>
          </div>
          <p className="font-MontserratRegular lg:text-[26px] md:text-[20px] text-[14px] text-center lg:px-20 lg:pt-24 pt-11 lg:pb-24 pb-6">
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
          className="absolute md:-left-20 -left-5 md:bottom-96 md:top-auto top-56 2xl:w-[241px] md:w-[200px] w-[54px] -z-10"
        />
      </section>

      {/* Logo Slider */}
      <section className="lg:mt-14 lg:mb-36 mb-14">
        <Slider mySlider={myVeryLogo} />
      </section>

      {/* Three image */}
      <section className="relative md:pb-20 pb-12 overflow-hidden">
        <Image
          srcSet="/icons/greenHeart.svg"
          alt="greenHeart"
          width={204}
          className="absolute md:-right-8 -right-5 2xl:top-80 md:top-[26rem] top-8 2xl:w-[204px] md:w-[140px] w-11"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-10 px-5 mx-auto">
          <div className="flex lg:gap-8 gap-3 justify-center">
            <Image
              srcSet={storyOne}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] md:w-[220px] w-[101px]"
            />
            <Image
              srcSet={storyTwo}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] md:w-[220px] w-[101px]"
            />
            <Image
              srcSet={storyThree}
              alt="ourStory"
              width={396}
              className="lg:w-[396px] md:w-[220px] w-[101px]"
            />
          </div>

          <div className="lg:mt-36 mt-10">
            <p className="font-MontserratRegular lg:text-[28px] md:text-[22px] text-[14px] text-center">
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
            <p className="font-MontserratRegular lg:text-[28px] md:text-[22px] text-[14px] text-center mt-10">
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
            className="absolute md:-left-20 -left-7 md:top-[45%] top-36 2xl:w-[246px] md:w-[200px] w-14"
          />

          <Image
            srcSet="/Shop/about/aboutAllbag.png"
            alt="aboutAllbag"
            width={974}
            className="block m-auto lg:my-20 my-14 md:w-auto w-[301px]"
          />
          <p className="font-MontserratRegular lg:text-[28px] md:text-[22px] text-[14px] text-center">
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
          className="absolute md:-right-8 -right-4 2xl:bottom-40 md:bottom-64 bottom-[28rem] 2xl:w-[249px] md:w-[160px] w-14"
        />
      </section>

      {/* community */}
      <section className="relative lg:mt-20 lg:mb-64 md:mb-56 mb-36">
        <Image
          srcSet="/icons/greenLine.svg"
          alt="greenLine"
          className="absolute md:-left-24 -left-5 md:top-32 top-[-25rem] lg:block md:w-[241px] w-[50px]"
          width={241}
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-10 px-5 mx-auto">
          <div className=" uppercase text-center">
            <h2 className="font-MontserratSemiBold lg:text-[85px] md:text-[42px] text-[20px] lg:mr-[27rem] md:mr-56 mr-36 flex justify-center lg:gap-9 md:gap-5 gap-3">
              <Image
                srcSet="/icons/blackArrow.svg"
                alt="blackArrow"
                width={124}
                className="lg:w-[124px] md:w-[62px] w-[30px]"
              />{' '}
              Join the
            </h2>
            <h2 className="font-MontserratExtraBold italic lg:text-[85px] md:text-[42px] text-[20px]">
              “My Very Own Way”
            </h2>
            <h2 className="font-MontserratSemiBold lg:text-[55px] md:text-[32px] text-[15px] lg:ml-96 md:ml-56 ml-28">
              Community!
              <Image
                srcSet="/icons/blackLineR.svg"
                alt="blackLineR"
                width={128}
                className="block ml-auto lg:mr-52 mr-8 lg:w-[128px] md:w-[63px] sm:w-[27px] w-8"
              />
            </h2>
          </div>

          <Button
            variant="connect"
            className="rotate-[3.49deg] absolute lg:top-80 md:top-44 top-20 2xl:left-[33rem] lg:left-52 md:left-20 left-8"
          >
            {' '}
            <NavLink to="/">connect with us</NavLink>
          </Button>
          <div className="rotate-[-3.48deg] absolute lg:top-[26rem] md:top-60 top-24 2xl:left-[48rem] lg:left-[30rem] md:left-64 left-28">
            <div className="relative mt-9">
              <Button variant="tag">
                <NavLink to="/">tag us</NavLink>
              </Button>
              <Image
                srcSet="/icons/redHandLogo.svg"
                alt="redHandLogo"
                width={120}
                className="absolute lg:-top-14 md:-top-4 sm:-top-6 -top-4 lg:left-64 md:left-40 left-[5.4rem] lg:w-[120px] md:w-[60px] w-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three image */}
      <section className="relative pb-20">
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-10 px-5 mx-auto">
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
            <p className="font-MontserratRegular lg:text-[28px] sm:text-[22px] text-[14px] text-center">
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
            className="absolute md:-right-20 -right-5 md:bottom-[40rem] md:top-auto -top-64 2xl:w-[247px] md:w-[200px] w-12"
            width={247}
          />
          <Image
            srcSet="/icons/blueHexagon.svg"
            alt="blueHexagon"
            className="absolute md:-left-16 -left-6 md:bottom-96 md:top-auto -top-56 2xl:w-[224px] md:w-[180px] w-12"
            width={224}
          />
          <p className="font-MontserratRegular lg:text-[28px] sm:text-[22px] text-[14px] text-center">
            Experience the joy of picking out and carrying a bag that&apos;s
            uniquely yours. <br />{' '}
            <span className="italic font-MontserratBold">
              Your bag. Your style. Your very own way.
            </span>
          </p>

          <div className="flex justify-center sm:gap-11 gap-5 lg:pt-20 pt-10 lg:pb-20 pb-0">
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
