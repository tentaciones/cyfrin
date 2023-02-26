import React, { forwardRef, RefObject } from "react";
import { Book } from ".";
import Link from "next/link";

type Props = {
  targetRefServices: RefObject<HTMLDivElement>;
  targetRefFaq: RefObject<HTMLDivElement>;
  targetRefAbout: RefObject<HTMLDivElement>;
};

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ targetRefServices, targetRefFaq, targetRefAbout }, ref) => {
    const img =
      "//images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/296d1ff9-ec0e-4fba-be99-633dc2af5dba/Copy+of+CYFRIN+%281920+%C3%97+580+px%29+%282%29.png?format=1500w";
    return (
      <>
        <div className="hidden w-screen bg-background  md:flex flex-col justify-center text-white">
          <div className="px-5">
            <img src={img} alt="" className="" />
          </div>
          <div className="flex justify-between px-[148px]">
            <div>
              <p className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                SMART CONTRACT AUDITS{" "}
              </p>
            </div>
            <div>
              <p className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                WORLD CLASS SECURITY & WEB3 EDUCATION
              </p>{" "}
            </div>
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfHR9eJm6n8E2BONYHtzc28DDHtxMr5qYaXmE_MPu64dZL2xg/viewform">
            <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl hover:cursor-pointer hover:scale-110 transform transition duration-500">
              REQUEST CODE REVIEW OR AUDIT
            </button>{" "}
          </Link>
          <div className="mt-5 h-[300px] bg-black shadow-md gap-5 shadow-blue-200 mx-5 rounded-xl flex px-10 justify-center items-center">
            <div className="w-1/3 text-5xl">
              <p>ENABLING WEB3 DEVELOPERS TO BUILD THINGS THAT MATTER.</p>
            </div>
            <div className="w-2/3">
              <p>
                The Cyfrin team is a group of developers dedicated to enhancing
                the developer experience of web3 and blockchain. Members of the
                team are responsible for creating
                <Link
                  href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
                  className="text-blue-800 pl-1"
                >
                  two of the most watched Solidity YouTube tutorials
                </Link>{" "}
                of all time,{" "}
                <Link
                  href="https://compound.finance/governance/proposals/119"
                  className="text-blue-800 pl-1"
                >
                  billion dollar DeFi integrations,
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=TmZ8gH-toX0"
                  className="text-blue-800 pl-1"
                >
                  security content,
                </Link>
                and more. We love building, and helping others build.
              </p>
            </div>
          </div>
          <div ref={targetRefServices}></div>
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl">
            HERE IS WHAT YOU CAN REQUEST ON:
          </button>
          <div className="mt-5 w-full flex justify-between px-32 gap-20">
            <div className="h-[600px] w-1/2 bg-black rounded-md shadow-md  shadow-blue-200 flex flex-col items-center pt-5 px-5">
              <p className="font-bold text-3xl underline mt-5">CODE REVIEWS </p>
              <p className="mt-5 px-10">
                Often times, developers aren’t even sure what they need to
                deploy to mainnet!{" "}
              </p>
              <p className="mt-2 px-5 border-b-[0.1px] border-blue-300 pb-5">
                With our code reviews we will go through your contracts, tests,
                and documentation and give you everything you need to be ready
                for a full audit. This is a much cheaper option to get input
                from some of the most experienced Web3 devs.{" "}
              </p>
              <p className="mt-5 px-5 text-xl font-bold">
                WE ARE DEDICATED TO TEACHING YOU TO BE EVEN SMARTER!
              </p>
              <p className="mt-5 font-bold">WHAT'S INCLUDED</p>
              <ul
                role="list"
                className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 mt-5"
              >
                <li>
                  A code review report giving best practices and how to improve
                  code
                </li>
                <li>
                  {" "}
                  A checklist on what needs to be done before deploying to
                  mainnet or going for a full audit
                </li>
              </ul>

              <button className="mt-2 w-full bg-blue-300 h-[60px] rounded-md text-black font-bold hover:cursor-pointer hover:scale-110 transform transition duration-500">
                REQUEST A CODE REVIEW
              </button>
            </div>
            <div className="h-[600px] w-1/2 bg-black rounded-md shadow-md  shadow-blue-200 flex flex-col items-center pt-5 px-5">
              <p className="font-bold text-3xl underline mt-5">AUDITS </p>
              <p className="mt-5 px-10">The whole enchilada.</p>
              <p className="mt-2 px-5 border-b-[0.1px] border-blue-300 pb-5">
                We comb through every line of your code to make sure that your
                code performs as intended.
              </p>
              <p className="mt-5 px-5 text-xl font-bold"></p>
              <p className="mt-[150px] font-bold">WHAT'S INCLUDED</p>
              <ul
                role="list"
                className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 mt-5"
              >
                <li>
                  Report of low, medium, and high severity findings in smart
                  contract
                </li>
                <li> Optional Public Audit Report</li>
                <li>Optional Gas Optimization Offering</li>
              </ul>

              <button className="mt-5 w-full bg-blue-300 h-[60px] rounded-md text-black font-bold hover:cursor-pointer hover:scale-110 transform transition duration-500">
                REQUEST AN AUDIT
              </button>
            </div>
          </div>
          <div ref={targetRefFaq}></div>
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl">
            FREQUENTLY ASKED QUESTIONS
          </button>
          <Book />
          <div ref={targetRefAbout}></div>
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl">
            THE PEOPLE BEHIND THE PROJECT
          </button>
          <div className="mt-5 flex justify-between"></div>
        </div>

        {/**small screen */}
        <div className="w-screen md:hidden bg-background text-white">
          <div className="px-5 pt-5">
            <img src={img} alt="" className="w-screen h-32 object-contain " />
          </div>
          <div className="flex flex-col items-center px-5">
            <div>
              <p className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                SMART CONTRACT AUDITS{" "}
              </p>
            </div>
            <div>
              <p className=" mt-3 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                WORLD CLASS SECURITY & WEB3 EDUCATION
              </p>{" "}
            </div>
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfHR9eJm6n8E2BONYHtzc28DDHtxMr5qYaXmE_MPu64dZL2xg/viewform">
            <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl hover:cursor-pointer hover:scale-110 transform transition duration-500">
              REQUEST CODE REVIEW OR AUDIT
            </button>
          </Link>
          <div className="mt-5 h-[400px] text-white  bg-black shadow-md gap-5 shadow-blue-200 mx-5 rounded-xl flex flex-col px-10 justify-center items-center">
            <div className="text-xl font-bold underline ">
              <p>ENABLING WEB3 DEVELOPERS TO BUILD THINGS THAT MATTER.</p>
            </div>
            <div className="">
              <p>
                The Cyfrin team is a group of developers dedicated to enhancing
                the developer experience of web3 and blockchain. Members of the
                team are responsible for creating
                <Link
                  href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
                  className="text-blue-800 pl-1"
                >
                  two of the most watched Solidity YouTube tutorials
                </Link>{" "}
                of all time,{" "}
                <Link
                  href="https://compound.finance/governance/proposals/119"
                  className="text-blue-800 pl-1"
                >
                  billion dollar DeFi integrations,
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=TmZ8gH-toX0"
                  className="text-blue-800 pl-1"
                >
                  security content,
                </Link>
                and more. We love building, and helping others build.
              </p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl hover:cursor-pointer">
            HERE IS WHAT YOU CAN REQUEST ON:
          </button>
          <div className="mt-5 w-full flex flex-col justify-between px-5 gap-2 ">
            <div className="h-[750px] w-full bg-black rounded-md shadow-md  shadow-blue-200 flex flex-col items-center pt-5 px-5">
              <p className="font-bold text-3xl underline mt-5">CODE REVIEWS </p>
              <p className="mt-5 px-10">
                Often times, developers aren’t even sure what they need to
                deploy to mainnet!{" "}
              </p>
              <p className="mt-2 px-5 border-b-[0.1px] border-blue-300 pb-5">
                With our code reviews we will go through your contracts, tests,
                and documentation and give you everything you need to be ready
                for a full audit. This is a much cheaper option to get input
                from some of the most experienced Web3 devs.{" "}
              </p>
              <p className="mt-5 px-5 text-xl font-bold">
                WE ARE DEDICATED TO TEACHING YOU TO BE EVEN SMARTER!
              </p>
              <p className="mt-5 font-bold">WHAT'S INCLUDED</p>
              <ul
                role="list"
                className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 mt-5"
              >
                <li>
                  A code review report giving best practices and how to improve
                  code
                </li>
                <li>
                  {" "}
                  A checklist on what needs to be done before deploying to
                  mainnet or going for a full audit
                </li>
              </ul>

              <button className="mt-2 w-full bg-blue-300 h-[60px] rounded-md text-black font-bold hover:cursor-pointer hover:scale-110 transform transition duration-500">
                REQUEST A CODE REVIEW
              </button>
            </div>
            <div className="h-[750px] w-full bg-black rounded-md shadow-md  shadow-blue-200 flex flex-col items-center pt-5 px-5">
              <p className="font-bold text-3xl underline mt-5">AUDITS </p>
              <p className="mt-5 px-10">The whole enchilada.</p>
              <p className="mt-2 px-5 border-b-[0.1px] border-blue-300 pb-5">
                We comb through every line of your code to make sure that your
                code performs as intended.
              </p>
              <p className="mt-5 px-5 text-xl font-bold"></p>
              <p className="mt-[150px] font-bold">WHAT'S INCLUDED</p>
              <ul
                role="list"
                className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 mt-5"
              >
                <li>
                  Report of low, medium, and high severity findings in smart
                  contract
                </li>
                <li> Optional Public Audit Report</li>
                <li>Optional Gas Optimization Offering</li>
              </ul>

              <button className="mt-5 w-full bg-blue-300 h-[60px] rounded-md text-black font-bold hover:cursor-pointer hover:scale-110 transform transition duration-500">
                REQUEST AN AUDIT
              </button>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl">
            FREQUENTLY ASKED QUESTIONS
          </button>
          <Book />
          <button className="w-full bg-gradient-to-r from-indigo-500 h-20 mt-10 text-black font-bold text-3xl">
            THE PEOPLE BEHIND THE PROJECT
          </button>
          <div className="mt-5 flex justify-between"></div>
        </div>
      </>
    );
  }
);

export default Hero;
