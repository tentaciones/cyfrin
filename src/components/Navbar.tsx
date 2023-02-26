import React, { forwardRef, RefObject } from "react";
import Link from "next/link";
type Props = {
  targetRefTop: RefObject<HTMLDivElement>;
  scrollToTarget: () => void;
  scrollToTargetServices: () => void;
  scrollToTargetFaq: () => void;
  scrollToTargetAbout: () => void;
  scrollToTargetResources: () => void;
};
const Navbar = forwardRef<HTMLDivElement, Props>(
  (
    {
      scrollToTarget,
      scrollToTargetServices,
      scrollToTargetFaq,
      scrollToTargetAbout,
      scrollToTargetResources,
      targetRefTop,
    },
    ref
  ) => {
    return (
      <>
        <div
          className="hidden md:flex h-20 w-screen bg-background  items-center justify-between px-20 text-white border-b border-gray-800"
          ref={targetRefTop}
        >
          <div className="flex gap-10">
            <Link href="/" className="hover:cursor-pointer">
              Home
            </Link>
            <p>Past Audits</p>
            <p
              onClick={scrollToTargetServices}
              className="hover:cursor-pointer"
            >
              Services
            </p>
          </div>
          <button
            className="font-bold text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300"
            onClick={scrollToTarget}
          >
            #Request A Quote
          </button>
          <div className="flex gap-10">
            <p onClick={scrollToTargetFaq} className="hover:cursor-pointer">
              FAQ
            </p>
            <p onClick={scrollToTargetAbout} className="hover:cursor-pointer">
              About
            </p>
            <p
              onClick={scrollToTargetResources}
              className="hover:cursor-pointer"
            >
              Resources
            </p>
          </div>
        </div>
        <div
          className="h-20 md:hidden w-screen bg-background flex justify-between px-5"
          ref={targetRefTop}
        >
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-white"
          >
            <p>Home</p>
          </Link>
          <button
            className="font-bold text-xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300"
            onClick={scrollToTarget}
          >
            #Request A Quote
          </button>
        </div>
      </>
    );
  }
);

export default Navbar;
