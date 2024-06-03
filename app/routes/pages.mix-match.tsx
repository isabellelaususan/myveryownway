import {Image} from '@shopify/hydrogen';
import Button from '~/components/Button';
import MixMatch from '~/components/MixMatch';

export default function () {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <Image
          srcSet="/icons/pinkHalfRound.svg"
          alt="pinkHalfRound"
          width={254}
          className="absolute right-0 2xl:top-64 top-48 2xl:w-[134px] w-[104px]"
        />
        <Image
          srcSet="/icons/greenHalfRound.svg"
          alt="pinkHalfRound"
          width={344}
          className="absolute left-0 2xl:top-[30rem] top-48 2xl:w-[130px] w-[110px]"
        />
        <div className="2xl:max-w-[1410px] max-w-screen-xl w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto">
          <div className="relative border-[5px] border-black rounded-[105px] py-9 w-[66%] block m-auto">
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
            <h2 className="font-MontserratSemiBold text-center text-[85px]">
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

            <div className="flex">
              <MixMatch type="strap" />
              <div className="flex flex-col justify-center gap-10 mt-28">
                <span className="bg-fullGreen w-6 h-6"></span>
                <span className="bg-fullGreen w-6 h-6"></span>
              </div>
              <MixMatch type="pouch" />
            </div>
            <div className="flex">
              <MixMatch type="bag" />
              <div className="flex flex-col justify-center gap-10 mt-28">
                <span className="bg-fullGreen w-6 h-6"></span>
                <span className="bg-fullGreen w-6 h-6"></span>
              </div>
              <MixMatch type="accessories" />
            </div>
          </div>
          <div className="flex gap-8 justify-center mt-24">
            <Button variant="addBlack" className="">
              ADD TO CART
            </Button>
            <Button variant="buy" className="">
              BUY NOW
            </Button>
          </div>
        </div>
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
