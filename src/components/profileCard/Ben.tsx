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

const Ben = (props: Props) => {
  const ben =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242043756-INP22I02ZR00B69NDS05/1655660485085.jpeg";
  return (
    <div className="w-screen h-[calc(100%_-_80px)]  flex justify-center items-center  text-black">
      <div className="bg-[#CCCBF0] h-full md:h-5/6 md:w-1/3 w-full rounded-xl">
        <div className="h-3/5">
          <img
            src={ben}
            alt="hans"
            className="w-full h-full rounded-t-xl object-cover"
          />
        </div>
        <p className="text-center text-3xl font-bold mt-1"> Ben Sacchetti</p>
        <div className="px-5 mt-1 flex font-bold">
          <p>
            Ben Sacchetti has an extensive background in software development
            and data engineering in traditional fixed income and quantatative
            finance. A recent convert to decentralized finance, he is convinced
            of it's power and potential to truly change the world.
          </p>
        </div>
        <div className="flex justify-between text-xl px-10 mt-5">
          <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fben-sacchetti">
            <BsFacebook className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fben-sacchetti&text=Smart+Contract+%26amp%3B+Cloud+Engineer">
            <BsTwitter className="text-blue-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/shareArticle?mini=true&source=Cyfrin&summary=Smart+Contract+%26amp%3B+Cloud+Engineer&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fben-sacchetti">
            <BsLinkedin className="text-blue-800 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fben-sacchetti">
            <BsReddit className="text-orange-500 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.pinterest.com/pin/create/link/?description=Smart+Contract+%26amp%3B+Cloud+Engineer&media=https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672242043756-INP22I02ZR00B69NDS05/1655660485085.jpeg&url=https%3A%2F%2Fwww.cyfrin.io%2Fteam-photos%2Fben-sacchetti">
            <BsPinterest className="text-red-600 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="flex mt-3 justify-end px-5">
          <Link href="/profile/siena" className="bg-black px-5 text-white">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ben;
