import Head from "next/head";
import React, { useRef } from "react";
import { Inter } from "next/font/google";
import { Navbar, Body, Hero, ContactUs } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
  const scrollToTop = () => {
    if (targetRefTop.current) {
      window.scrollTo({
        top: targetRefTop.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar
          scrollToTarget={scrollToTarget}
          scrollToTargetServices={scrollToTargetServices}
          scrollToTargetFaq={scrollToTargetFaq}
          scrollToTargetAbout={scrollToTargetAbout}
          scrollToTargetResources={scrollToTargetResources}
          targetRefTop={targetRefTop}
        />

        <Hero
          targetRefServices={targetRefServices}
          targetRefFaq={targetRefFaq}
          targetRefAbout={targetRefAbout}
        />
        <Body targetRefResources={targetRefResources} />

        <ContactUs targetRef={targetRef} scrollToTop={scrollToTop} />
      </main>
    </>
  );
}