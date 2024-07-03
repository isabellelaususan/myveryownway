import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';
import MixMatch from '~/components/MixMatch';

export default function () {
  return (
    <>
      <section className="relative py-36 overflow-hidden">
        <Image
          srcSet="/icons/pinkHalfRound.svg"
          alt="pinkHalfRound"
          width={254}
          className="absolute right-0 2xl:top-64 top-48 2xl:w-[134px] w-[104px]"
        />
        <Image
          srcSet="/icons/orangeHalfRound.svg"
          alt="pinkHalfRound"
          width={344}
          className="absolute left-0 2xl:top-[30rem] top-48 2xl:w-[130px] w-[110px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto">
          <div className="relative w-[73%] block m-auto">
            <Image
              srcSet="/icons/yellowScroll.svg"
              alt="yellowScroll"
              width={98}
              className="absolute bottom-40 -right-20"
            />
            <Image
              srcSet="/icons/blueHand.svg"
              alt="blueHand"
              width={168}
              className="absolute bottom-80 -left-28"
            />
            <h2 className="font-MontserratSemiBold text-center text-[85px] pb-[75px]">
              <span className="italic">MIX</span> &{' '}
              <span className="font-MontserratExtraBold relative">
                MATCH
                <Image
                  srcSet="/icons/mixLine.svg"
                  alt="mixLine"
                  width={218}
                  className="absolute -bottom-5 left-0"
                />
              </span>
            </h2>
            <div className="border-[3px] border-black rounded-[80px] py-9 2xl:px-[86px] px-[43px]">
              <div className="flex pb-8 ">
                <div className="border-[3px] border-black rounded-[53px]">
                  <h2 className="font-MontserratBold text-4xl text-center leading-[4rem]">
                    Strap
                  </h2>
                  <MixMatch type="Mini" />
                </div>
                <div className="flex flex-col justify-center gap-10 mt-28 mx-9">
                  <span className="bg-fullGreen w-6 h-6"></span>
                  <span className="bg-fullGreen w-6 h-6"></span>
                </div>
                <div className="border-[3px] border-black rounded-[53px]">
                  <h2 className="font-MontserratBold text-4xl text-center leading-[4rem]">
                    Pouch
                  </h2>
                  <MixMatch type="Round" />
                </div>
              </div>
              <div className="flex">
                <div className="border-[3px] border-black rounded-[53px]">
                  <h2 className="font-MontserratBold text-4xl text-center leading-[4rem]">
                    Bag
                  </h2>
                  <MixMatch type="Tulip" />
                </div>
                <div className="flex flex-col justify-center gap-10 mt-28 mx-9">
                  <span className="bg-fullGreen w-6 h-6"></span>
                  <span className="bg-fullGreen w-6 h-6"></span>
                </div>
                <div className="border-[3px] border-black rounded-[53px]">
                  <h2 className="font-MontserratBold text-4xl text-center leading-[4rem]">
                    Accessories
                  </h2>
                  <MixMatch type="Zigzag" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 justify-center mt-[75px]">
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
          className="absolute 2xl:left-52 left-24 2xl:bottom-44 bottom-40"
        />
        <Image
          srcSet="/icons/skyBlueBox.svg"
          alt="skyBlueBox"
          width={200}
          className="absolute 2xl:right-52 right-24 2xl:bottom-44 bottom-40"
        />
      </section>
    </>
  );
}
