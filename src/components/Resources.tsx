import React from "react";

type Props = {};

const Resources = (props: Props) => {
  const vid1 =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672200046981-HEOY7FD38MVHUUXSPSIU/Untitled+design+%283%29.png";
  const vid2 =
    "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/1672200097641-G4CSY3KU2LECC6QBOUB1/blockchain1.png";
  return (
    <div className="mt-32  md:h-[300px] h-[700px]  text-white bg-black shadow-md gap-5 shadow-blue-200 md:mx-5 rounded-xl flex flex-col md:flex-row md:px-10 px-2 justify-center items-center">
      <div className="w-full md:w-1/3 text-xl md:text-5xl flex-col">
        <p>RESOURCES, Here you’ll find articles about…</p>
        <button className="text-2xl  w-full font-bold mt-5 bg-blue-800 h-10 md:h-20">
          Browse
        </button>
      </div>
      <div className="md:w-2/3 w-full flex md:flex-row flex-col justify-between gap-5">
        <div className="flex flex-col items-center">
          <img
            src={vid1}
            alt="vid1"
            className="h-5/6 w-full object-contain rounded-md"
          />
          <p>How to conduct an audit</p>
          <a
            href="https://www.youtube.com/watch?v=TmZ8gH-toX0"
            className="text-blue-500 hover:cursor-pointer"
          >
            Read More →
          </a>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={vid2}
            alt="vid2"
            className="h-5/6 w-full object-contain rounded-md"
          />
          <p>Learn Solidity</p>
          <a
            href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
            className="text-blue-500 hover:cursor-pointer"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
