import {NavLink} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function Stockist() {
  return (
    <>
      <section className="relative">
        <div className="w-full mx-auto ">
          <div className="flex md:flex-row flex-col">
            {/* Left */}
            <div className="md:border-r-[3px] md:border-0 border-t-2 md:pl-64 pl-[31px] md:pt-32 pt-[27px] md:pb-40 pb-[27px] md:pr-[177px] pr-[31px] 2xl:w-[45%] md:w-1/2 w-full md:order-1 order-2">
              <Image
                srcSet="/icons/blueCurve.svg"
                alt="blueCurve"
                width={202}
                className="absolute md:-left-16 -left-6 md:w-[202px] w-[53px]"
              />
              <h2 className="font-MontserratBold md:text-[71px] text-[26px]">
                Stockists
              </h2>
              <div className="md:block grid grid-cols-2 gap-[27px] mt-[21px]">
                {/* 1 */}
                <div className="md:mt-[72px]">
                  <div className="flex items-start md:gap-8 gap-2">
                    <Image
                      srcSet="/icons/location.svg"
                      alt="location"
                      width={38}
                      className="md:w-[32px] w-[13px]"
                    />
                    <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs 2xl:leading-[2.75rem] md:leading-[2rem]">
                      <span className="block">Showroom</span>Srinakarin
                    </p>
                  </div>
                  <div className="md:mt-2 flex flex-col md:gap-3">
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/call.svg"
                        alt="call "
                        width={23}
                        className="md:w-[23px] w-2.5"
                      />
                      <NavLink
                        to="tel:(+66)9-0969-3000"
                        className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs"
                      >
                        (+66) 9-0969-3000
                      </NavLink>
                    </div>
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/watch.svg"
                        alt="watch"
                        width={28}
                        className="md:w-7 w-2.5"
                      />
                      <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs">
                        09:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="md:mt-10">
                  <div className="flex md:gap-8 gap-2 items-start">
                    <Image
                      srcSet="/icons/location.svg"
                      alt="location"
                      width={38}
                      className="md:w-[32px] w-[13px]"
                    />
                    <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs 2xl:leading-[2.75rem] md:leading-[2rem]">
                      <span className="block">Central World</span>2nd Floor{' '}
                      <br />
                      Central Department
                    </p>
                  </div>
                  <div className="md:mt-2 flex flex-col md:gap-3">
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/call.svg"
                        alt="call "
                        width={23}
                        className="md:w-[23px] w-2.5"
                      />
                      <NavLink
                        to="tel:(+66)2-033-8999"
                        className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs"
                      >
                        (+66) 2-033-8999
                      </NavLink>
                    </div>
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/watch.svg"
                        alt="watch"
                        width={28}
                        className="md:w-7 w-2.5"
                      />
                      <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs">
                        10:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="md:mt-10">
                  <div className="flex items-start md:gap-8 gap-2">
                    <Image
                      srcSet="/icons/location.svg"
                      alt="location"
                      width={38}
                      className="md:w-[32px] w-[13px]"
                    />
                    <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs 2xl:leading-[2.75rem] md:leading-[2rem]">
                      <span className="block">The Fig Lobby</span>Rama 4
                    </p>
                  </div>
                  <div className="md:mt-2 flex flex-col md:gap-3">
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/call.svg"
                        alt="call "
                        width={23}
                        className="md:w-[23px] w-2.5"
                      />
                      <NavLink
                        to="tel:(+66)2-103-1033"
                        className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs"
                      >
                        (+66) 2-103-1033
                      </NavLink>
                    </div>
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/watch.svg"
                        alt="watch"
                        width={28}
                        className="md:w-7 w-2.5"
                      />
                      <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs">
                        24 Hours
                      </p>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="md:mt-10">
                  <div className="flex items-start md:gap-8 gap-2">
                    <Image
                      srcSet="/icons/location.svg"
                      alt="location"
                      width={38}
                      className="md:w-[32px] w-[13px]"
                    />
                    <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs 2xl:leading-[2.75rem] md:leading-[2rem]">
                      <span className="block">Samyan Mitrtown</span>Medium &
                      More <br /> 3rd Floor
                    </p>
                  </div>
                  <div className="md:mt-2 flex flex-col md:gap-3">
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/call.svg"
                        alt="call "
                        width={23}
                        className="md:w-[23px] w-2.5"
                      />
                      <NavLink
                        to="tel:(+66)2-033-8999"
                        className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs"
                      >
                        (+66) 2-033-8999
                      </NavLink>
                    </div>
                    <div className="flex md:gap-8 gap-2">
                      <Image
                        srcSet="/icons/watch.svg"
                        alt="watch"
                        width={28}
                        className="md:w-7 w-2.5"
                      />
                      <p className="font-MontserratBold 2xl:text-[32px] md:text-2xl text-xs">
                        10:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                srcSet="/icons/orangeZigzag.svg"
                alt="orangeZigzag"
                width={325}
                className="absolute md:-left-32 -left-12 bottom-16 md:w-[325px] w-[71px]"
              />
            </div>
            {/* Right */}
            <div className="2xl:w-[55%] md:w-1/2 w-full md:order-2 order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2927707844965!2d100.64989280525154!3d13.700709844790516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d615f87ce9771%3A0xab5eb4556e282871!2sMy%20Very%20Own%20Way%20(Showroom)!5e0!3m2!1sen!2sin!4v1719820647069!5m2!1sen!2sin"
                className="w-full md:h-full h-[295px]"
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
