import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Navbar } from "@/components";
import { Ben, Hans, Patrick, Siena, NoUser } from "@/components/profileCard";
type Props = {};

const profile = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  const targetRef = useRef<HTMLDivElement>(null);
  const targetRefServices = useRef<HTMLDivElement>(null);
  const targetRefFaq = useRef<HTMLDivElement>(null);
  const targetRefAbout = useRef<HTMLDivElement>(null);
  const targetRefResources = useRef<HTMLDivElement>(null);
  const targetRefTop = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToTargetServices = () => {
    if (targetRefServices.current) {
      window.scrollTo({
        top: targetRefServices.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTargetFaq = () => {
    if (targetRefFaq.current) {
      window.scrollTo({
        top: targetRefFaq.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTargetAbout = () => {
    if (targetRefAbout.current) {
      window.scrollTo({
        top: targetRefAbout.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTargetResources = () => {
    if (targetRefResources.current) {
      window.scrollTo({
        top: targetRefResources.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (pid === "hans") {
    return (
      <div className="w-screen h-screen text-white bg-background">
        <Navbar
          scrollToTarget={scrollToTarget}
          scrollToTargetServices={scrollToTargetServices}
          scrollToTargetFaq={scrollToTargetFaq}
          scrollToTargetAbout={scrollToTargetAbout}
          scrollToTargetResources={scrollToTargetResources}
          targetRefTop={targetRefTop}
        />
        <Hans />
      </div>
    );
  } else if (pid === "patrick") {
    return (
      <div className="w-screen h-screen text-white bg-background">
        <Navbar
          scrollToTarget={scrollToTarget}
          scrollToTargetServices={scrollToTargetServices}
          scrollToTargetFaq={scrollToTargetFaq}
          scrollToTargetAbout={scrollToTargetAbout}
          scrollToTargetResources={scrollToTargetResources}
          targetRefTop={targetRefTop}
        />
        <Patrick />
      </div>
    );
  } else if (pid === "ben") {
    return (
      <div className="w-screen h-screen text-white bg-background">
        <Navbar
          scrollToTarget={scrollToTarget}
          scrollToTargetServices={scrollToTargetServices}
          scrollToTargetFaq={scrollToTargetFaq}
          scrollToTargetAbout={scrollToTargetAbout}
          scrollToTargetResources={scrollToTargetResources}
          targetRefTop={targetRefTop}
        />
        <Ben />
      </div>
    );
  } else if (pid === "siena") {
    return (
      <div className="w-screen h-screen text-white bg-background">
        <Navbar
          scrollToTarget={scrollToTarget}
          scrollToTargetServices={scrollToTargetServices}
          scrollToTargetFaq={scrollToTargetFaq}
          scrollToTargetAbout={scrollToTargetAbout}
          scrollToTargetResources={scrollToTargetResources}
          targetRefTop={targetRefTop}
        />
        <Siena />
      </div>
    );
  } else {
    return (
      <>
        <NoUser />
      </>
    );
  }
};

export default profile;
