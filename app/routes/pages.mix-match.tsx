import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';
import MixMatch from '~/components/MixMatch';

export default function () {
  return (
    <>
      <section className="relative md:pt-[65px] pt-[30px] md:pb-48 pb-11 overflow-hidden">
        <Image
          srcSet="/icons/pinkHalfRound.svg"
          alt="pinkHalfRound"
          width={254}
          className="absolute md:right-0 -right-2.5 2xl:top-64 md:top-48 top-20 2xl:w-[134px] md:w-[70px] w-[60px]"
        />
        <Image
          srcSet="/icons/orangeHalfRound.svg"
          alt="pinkHalfRound"
          width={344}
          className="absolute md:left-0 -left-0.5 2xl:top-[30rem] md:top-48 top-12 2xl:w-[130px] md:w-[110px] w-[44px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
          <div className="relative md:w-[73%] w-[262px] block m-auto">
            <Image
              srcSet="/icons/yellowScroll.svg"
              alt="yellowScroll"
              width={98}
              className="absolute md:bottom-40 bottom-[30px] md:-right-20 -right-5 md:w-[98px] w-[30px]"
            />
            {/* Random */}
            <div className="absolute 2xl:right-[-21rem] md:-right-60 right-0 md:bottom-[23rem] bottom-0 md:block hidden">
              <Image
                srcSet="/icons/random.svg"
                alt="random"
                width={197}
                className="2xl:w-[197px] w-[132px]"
              />
              <h4 className="uppercase 2xl:text-[19px] text-xs font-MontserratBold absolute 2xl:top-12 top-8 2xl:left-7 left-[21px] rotate-[10deg]">
                randomize!
              </h4>
            </div>
            <Image
              srcSet="/icons/mixArrow.svg"
              alt="random"
              width={130}
              className="absolute 2xl:-right-60 -right-52 bottom-56 2xl:w-[130px] w-[109px]"
            />
            {/*  */}
            <Image
              srcSet="/icons/blueHand.svg"
              alt="blueHand"
              width={168}
              className="absolute md:bottom-80 bottom-[90px] md:-left-28 -left-8 md:w-[168px] w-14"
            />
            <h2 className="relative font-MontserratSemiBold text-center md:text-[93px] text-[31px] md:pb-[95px] pb-9">
              <Image
                srcSet="/icons/mixLine.svg"
                alt="mixLine"
                width={218}
                className="absolute md:bottom-[60px] bottom-6 md:left-[240px] left-[50px] md:w-[218px] w-[72px]"
              />
              <span className="italic">MIX</span> &{' '}
              <span className="font-MontserratExtraBold relative">
                MATCH
                <span className="font-MontserratBold absolute md:text-[37px] text-xs md:left-10 left-2.5 md:-bottom-[26px] -bottom-5">
                  how to play
                </span>
                <img
                  src="/icons/playQue.svg"
                  alt="playQue"
                  className="absolute md:right-[30px] right-2.5 md:-bottom-10 -bottom-5 md:w-[72px] w-6"
                />
              </span>
            </h2>
            <div className="md:border-[3px] border-[1px] border-black md:rounded-[80px] rounded-[19px] md:py-9 py-3.5 2xl:px-[86px] md:px-[43px] px-[18px]">
              <div className="flex justify-between md:pb-8 pb-1.5">
                <div className="md:border-[3px] border-[1px] border-black md:rounded-[53px] rounded-[14px] md:w-auto w-[101px]">
                  <h2 className="font-MontserratBold md:text-4xl text-xs text-center md:leading-[4rem]">
                    Strap
                  </h2>
                  <MixMatch type="Straps" />
                </div>
                <div className="flex flex-col justify-center md:gap-10 gap-2 md:mt-28 mt-2 md:mx-9 mx-2">
                  <span className="bg-fullGreen md:w-6 w-1 md:h-6 h-1"></span>
                  <span className="bg-fullGreen md:w-6 w-1 md:h-6 h-1"></span>
                </div>
                <div className="md:border-[3px] border-[1px] border-black md:rounded-[53px] rounded-[14px]">
                  <h2 className="font-MontserratBold md:text-4xl text-xs text-center md:leading-[4rem]">
                    Accessories
                  </h2>
                  <MixMatch type="Accessories" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="md:border-[3px] border-[1px] border-black md:rounded-[53px] rounded-[14px]">
                  <h2 className="font-MontserratBold md:text-4xl text-xs text-center md:leading-[4rem]">
                    Bag
                  </h2>
                  <MixMatch type="Bag" />
                </div>
                <div className="flex flex-col justify-center md:gap-10 gap-2 md:mt-28 mt-2 md:mx-9 mx-2">
                  <span className="bg-fullGreen md:w-6 w-1 md:h-6 h-1"></span>
                  <span className="bg-fullGreen md:w-6 w-1 md:h-6 h-1"></span>
                </div>
                <div className="md:border-[3px] border-[1px] border-black md:rounded-[53px] rounded-[14px]">
                  <h2 className="font-MontserratBold md:text-4xl text-xs text-center md:leading-[4rem]">
                    Pouches
                  </h2>
                  <MixMatch type="Pouches" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:gap-8 gap-4 justify-center md:mt-[75px] mt-6">
            <Button
              variant="addBlack"
              className=""
              onClick={() => {
                window.location.href = window.location.href + '#cart-aside';
              }}
            >
              ADD TO CART
            </Button>
            <Button variant="buy" className="">
              BUY NOW
            </Button>
          </div>
        </div>
        <Image
          srcSet="/icons/pinkCurvePipeM.svg"
          alt="skyBlueBox"
          width={200}
          className="absolute 2xl:left-52 left-2 2xl:bottom-44 md:bottom-40 bottom-3 md:w-[200px] w-[60px]"
        />
        <Image
          srcSet="/icons/skyBlueBox.svg"
          alt="skyBlueBox"
          width={200}
          className="absolute 2xl:right-52 md:right-24 right-0 2xl:bottom-44 md:bottom-40 bottom-10 md:w-[200px] w-12"
        />
      </section>
    </>
  );
}
