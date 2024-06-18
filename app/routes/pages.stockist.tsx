import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function Stockist() {
  return (
    <>
      <section className="relative">
        <div className="max-w-[1410px] w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto ">
          <div className="flex">
            {/* Left */}
            <div className="border-r-[3px] 2xl:w-[53.1%] w-[52.1%] 2x:pl-44 pl-72 pt-32 pb-52">
              <Image
                srcSet="/icons/blueCurve.svg"
                alt="blueCurve"
                width={202}
                className="absolute -left-16"
              />
              <div className="flex gap-8">
                <Image
                  srcSet="/icons/location.svg"
                  alt="location"
                  width={38}
                  className="zxl:w-[38px] w-[32px]"
                />
                <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                  <span className="block">Showroom</span>Srinakarin
                </p>
              </div>
              <div className="mt-20 flex flex-col gap-3">
                <div className="flex gap-8">
                  <Image srcSet="/icons/call.svg" alt="call " width={23} />
                  <NavLink
                    to="tel:(+66)9-0969-3000"
                    className="font-MontserratBold 2xl:text-[32px] text-2xl"
                  >
                    (+66) 9-0969-3000
                  </NavLink>
                </div>
                <div className="flex gap-8">
                  <Image srcSet="/icons/watch.svg" alt="watch" width={28} />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl">
                    09:00 - 20:00
                  </p>
                </div>
              </div>

              <div className="mt-40">
                <div className="flex gap-8">
                  <Image
                    srcSet="/icons/location.svg"
                    alt="location"
                    width={38}
                    className="zxl:w-[38px] w-[32px]"
                  />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                    <span className="block">Medium & More</span>Samyan Mitrtown
                  </p>
                </div>
                <div className="mt-20 flex flex-col gap-3">
                  <div className="flex gap-8">
                    <Image srcSet="/icons/call.svg" alt="call " width={23} />
                    <NavLink
                      to="tel:(+66)2-033-8999"
                      className="font-MontserratBold 2xl:text-[32px] text-2xl"
                    >
                      (+66) 2-033-8999
                    </NavLink>
                  </div>
                  <div className="flex gap-8">
                    <Image srcSet="/icons/watch.svg" alt="watch" width={28} />
                    <p className="font-MontserratBold 2xl:text-[32px] text-2xl">
                      10:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
              <Image
                srcSet="/icons/orangeZigzag.svg"
                alt="orangeZigzag"
                width={325}
                className="absolute -left-16 bottom-16 2xl:w-[325px] w-[260px]"
              />
            </div>
            {/* Right */}
            <div className="2xl:w-[46.9%] w-[47.9%] 2xl:pl-44 pl-28 pt-32 pb-52">
              <Image
                srcSet="/icons/pinkRound.svg"
                alt="pinkRound"
                width={166}
                className="absolute right-24 top-16 2xl:w-[166px] w-[130px]"
              />
              <div className="flex gap-8">
                <Image
                  srcSet="/icons/location.svg"
                  alt="location"
                  width={38}
                  className="zxl:w-[38px] w-[32px]"
                />
                <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                  <span className="block">Seek N&apos; Keep Club</span>Siam
                  Square Soi 2
                </p>
              </div>
              <div className="mt-20 flex flex-col gap-3">
                <div className="flex gap-8">
                  <Image srcSet="/icons/call.svg" alt="call " width={23} />
                  <NavLink
                    to="tel:(+66)6-4146-9992"
                    className="font-MontserratBold 2xl:text-[32px] text-2xl"
                  >
                    (+66) 6-4146-9992
                  </NavLink>
                </div>
                <div className="flex gap-8">
                  <Image srcSet="/icons/watch.svg" alt="watch" width={28} />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl">
                    11:00 - 21:00
                  </p>
                </div>
              </div>

              <div className="mt-40">
                <div className="flex gap-8">
                  <Image
                    srcSet="/icons/location.svg"
                    alt="location"
                    width={38}
                    className="zxl:w-[38px] w-[32px]"
                  />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                    <span className="block">The Fig Lobby</span>Rama 4
                  </p>
                </div>
                <div className="mt-20 flex flex-col gap-3">
                  <div className="flex gap-8">
                    <Image srcSet="/icons/call.svg" alt="call " width={23} />
                    <NavLink
                      to="tel:(+66)2-103-1033"
                      className="font-MontserratBold 2xl:text-[32px] text-2xl"
                    >
                      (+66) 2-103-1033
                    </NavLink>
                  </div>
                  <div className="flex gap-8">
                    <Image srcSet="/icons/watch.svg" alt="watch" width={28} />
                    <p className="font-MontserratBold 2xl:text-[32px] text-2xl">
                      24 Hours
                    </p>
                  </div>
                </div>
              </div>
              <Image
                srcSet="/icons/redRound.svg"
                alt="redRound"
                width={273}
                className="absolute right-0 bottom-16 2xl:w-[273px] w-[200px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
