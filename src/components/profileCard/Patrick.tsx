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

const Patrick = (props: Props) => {
  const patrick =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672199348373-NFFJI14PD01QILFZTW52/Untitled+design+%282%29.png";
  return (
    <div className="w-screen h-[calc(100%_-_80px)]  flex justify-center items-center text-black">
      <div className="bg-[#CCCBF0] h-full w-full md:h-5/6 md:w-1/3 rounded-xl">
        <div className="h-3/5">
          <img
            src={patrick}
            alt="hans"
            className="w-full h-full rounded-t-xl object-cover"
          />
        </div>
        <p className="text-center text-3xl font-bold mt-5">Patrick Collins</p>
        <div className="px-5 mt-2 flex font-bold">
          <p>
            Developer and lover of all things web3, Patrick has a history of
            building tools and educational content to help developers grow.
            Including the{" "}
            <Link
              href="https://www.youtube.com/watch?v=M576WGiDBdQ"
              className="text-blue-800 pr-1"
            >
              16
            </Link>{" "}
            <Link
              href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
              className="text-blue-800 pr-1"
            >
              and 32-hour freeCodeCamp
            </Link>{" "}
            tutorials.
          </p>
        </div>

        <div className="flex mt-5 justify-end px-5">
          <Link href="/profile/ben" className="bg-black px-5 text-white">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Patrick;
