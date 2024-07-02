import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function Stockist() {
  return (
    <>
      <section className="relative">
        <div className="w-full mx-auto ">
          <div className="flex">
            {/* Left */}
            <div className="border-r-[3px] pl-64 pt-32 pb-40 pr-[177px] w-[45%]">
              <Image
                srcSet="/icons/blueCurve.svg"
                alt="blueCurve"
                width={202}
                className="absolute -left-16"
              />
              <h2 className="font-MontserratBold text-[71px]">Stockists</h2>
              {/* 1 */}
              <div className="mt-20">
                <div className="flex items-start gap-8">
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
                <div className="mt-2 flex flex-col gap-3">
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
              </div>
              {/* 2 */}
              <div className="mt-20">
                <div className="flex gap-8 items-start">
                  <Image
                    srcSet="/icons/location.svg"
                    alt="location"
                    width={38}
                    className="zxl:w-[38px] w-[32px]"
                  />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                    <span className="block">Central World</span>2nd Floor <br />
                    Central Department
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-3">
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
              {/* 3 */}
              <div className="mt-20">
                <div className="flex items-start gap-8">
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
                <div className="mt-2 flex flex-col gap-3">
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
              {/* 4 */}
              <div className="mt-20">
                <div className="flex items-start gap-8">
                  <Image
                    srcSet="/icons/location.svg"
                    alt="location"
                    width={38}
                    className="zxl:w-[38px] w-[32px]"
                  />
                  <p className="font-MontserratBold 2xl:text-[32px] text-2xl 2xl:leading-[2.75rem] leading-[2rem]">
                    <span className="block">Samyan Mitrtown</span>Medium & More{' '}
                    <br /> 3rd Floor
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-3">
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
                className="absolute -left-16 bottom-16 2xl:w-[255px] w-[260px]"
              />
            </div>
            {/* Right */}
            <div className="w-[55%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2927707844965!2d100.64989280525154!3d13.700709844790516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d615f87ce9771%3A0xab5eb4556e282871!2sMy%20Very%20Own%20Way%20(Showroom)!5e0!3m2!1sen!2sin!4v1719820647069!5m2!1sen!2sin"
                className="w-full h-full"
                style={{border: 0}}
                allowFullScreen
                aria-hidden="false"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
