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

const Hans = (props: Props) => {
  const hans =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1675731655071-J2O7GVGXNUM2FFZD2E7K/MkiS44Ym_400x400.jpg";
  return (
    <div className="w-screen h-[calc(100%_-_80px)]  flex justify-center items-center text-black">
      <div className="bg-[#CCCBF0] w-full h-full md:h-5/6 md:w-1/3 rounded-xl">
        <div className="h-3/5">
          <img
            src={hans}
            alt="hans"
            className="w-full h-full rounded-t-xl object-cover"
          />
        </div>
        <p className="text-center text-3xl font-bold mt-1"> Hans</p>
        <div className="px-5 mt-1 flex font-bold">
          <p>
            <Link
              href="https://twitter.com/hansfriese"
              className="text-blue-800 pr-1"
            >
              Hans
            </Link>
            has been a developer for almost a decade and has been crushing the
            Code4rena and Sherlock DeFi platforms. Often being the top earner in
            competitive audits and{" "}
            <Link
              href="https://code4rena.com/leaderboard"
              className="text-blue-800 pr-1"
            >
              ranked #2 on Code4rena
            </Link>{" "}
            (at the time of writing) for top earner for the past 60 days.{" "}
          </p>
        </div>
        <div className="flex justify-between text-xl px-10 mt-5">
          <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fhans">
            <BsFacebook className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fhans&text=Senior+Smart+Contract+Security+Researcher">
            <BsTwitter className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/shareArticle?mini=true&source=Cyfrin&summary=Senior+Smart+Contract+Security+Researcher&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fhans">
            <BsLinkedin className="text-blue-800 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fhans">
            <BsReddit className="text-orange-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.pinterest.com/pin/create/link/?description=Senior+Smart+Contract+Security+Researcher&media=https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1675731655071-J2O7GVGXNUM2FFZD2E7K/MkiS44Ym_400x400.jpg&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fhans">
            <BsPinterest className="text-red-600 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="flex mt-3 justify-end px-5">
          <Link href="/profile/patrick" className="bg-black px-5 text-white">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hans;
