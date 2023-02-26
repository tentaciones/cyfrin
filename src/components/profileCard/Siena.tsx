import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsReddit,
  BsPinterest,
} from "react-icons/bs";
import Link from "next/link";
type Props = {};

const Siena = (props: Props) => {
  const siena =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242176450-MQ6G7QG4NUGYX2SFBE8V/oSbJ0iAG_400x400.jpg";
  return (
    <div className="w-screen h-[calc(100%_-_80px)]  flex justify-center items-center text-black">
      <div className="bg-[#CCCBF0] h-full w-full  md:h-5/6 md:w-1/3 rounded-xl">
        <div className="h-3/5">
          <img
            src={siena}
            alt="hans"
            className="w-full h-full rounded-t-xl object-cover"
          />
        </div>
        <p className="md:hidden text-2xl font-bold text-center">
          Giovanni Di Siena
        </p>
        <div className="px-5 mt-1 flex font-bold">
          <p>
            Giovanni Di Siena has a strong background in smart contract
            development and blockchain engineering following experience in
            scientific software and a degree in physics. As an active
            contributor to the industry, he is excited by innovations in
            blockchain infrastructure, DeFi and our ability to build truly
            robust decentralised applications.
          </p>
        </div>
        <div className="flex justify-between text-xl px-10 mt-2">
          <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fgio-di-siena">
            <BsFacebook className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fgio-di-siena&text=Smart+Contract+engineer+and+security+researcher">
            <BsTwitter className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/shareArticle?mini=true&source=Cyfrin&summary=Smart+Contract+engineer+and+security+researcher&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fgio-di-siena">
            <BsLinkedin className="text-blue-800 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fgio-di-siena">
            <BsReddit className="text-orange-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.pinterest.com/pin/create/link/?description=Smart+Contract+engineer+and+security+researcher&media=https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242176450-MQ6G7QG4NUGYX2SFBE8V/oSbJ0iAG_400x400.jpg&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fgio-di-siena">
            <BsPinterest className="text-red-600 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="flex mt-3 justify-end px-5">
          <Link href="/profile/hans" className="bg-black px-5 text-white">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Siena;
