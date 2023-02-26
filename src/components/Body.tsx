import React, { forwardRef, RefObject } from "react";
import { Resources } from ".";
import Link from "next/link";
type Props = {
  targetRefResources: RefObject<HTMLDivElement>;
};

const Body = forwardRef<HTMLDivElement, Props>(
  ({ targetRefResources }, ref) => {
    const hans =
      "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1675731655071-J2O7GVGXNUM2FFZD2E7K/MkiS44Ym_400x400.jpg";
    const patrick =
      "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672199348373-NFFJI14PD01QILFZTW52/Untitled+design+%282%29.png";
    const ben =
      "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242043756-INP22I02ZR00B69NDS05/1655660485085.jpeg";
    const siena =
      "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242176450-MQ6G7QG4NUGYX2SFBE8V/oSbJ0iAG_400x400.jpg";
    return (
      <div className="pt-5 md:mt-0 md:h-screen w-screen bg-background px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="w-full md:w-1/4  flex flex-col  items-center text-white">
            <img src={hans} alt="hans" className="w-full h-64 object-contain" />
            <Link href="/profile/hans" className="text-xl  font-bold">
              Hans
            </Link>
            <p>Senior Smart Contract Security Researcher</p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col  items-center text-white">
            <img
              src={patrick}
              alt="patrick"
              className="w-full h-64 object-contain"
            />
            <Link href="/profile/patrick" className="text-xl font-bold">
              PATRICK COLLINS
            </Link>
            <p>CEO & Co-Founder of Chain Accel & Cyfrin</p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col  items-center text-white">
            <img src={ben} alt="ben" className="w-full h-64 object-contain" />
            <Link href="/profile/ben" className="text-xl font-bold">
              BEN SACCHETTI
            </Link>
            <p>Smart Contract & Cloud Engineer</p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col  items-center text-white">
            <img
              src={siena}
              alt="siena"
              className="w-full h-64 object-contain"
            />
            <Link href="/profile/siena" className="text-xl font-bold">
              GIOVANNI DI SIENA
            </Link>
            <p>Smart Contract engineer security researcher</p>
          </div>
        </div>
        <div className="pb-10 md:pb-0" ref={targetRefResources}>
          <Resources />
        </div>
      </div>
    );
  }
);

export default Body;
