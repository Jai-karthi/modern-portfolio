'use client'
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import { urlFor } from "../sanity";
// import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name's jk`,
      "I like riding my 🚲",
      "I_like_to_code.py",
      "And I'm addicted to ☕️",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src='https://thumbs.dreamstime.com/z/jk-initial-letter-vector-logo-icon-199273646.jpg'
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
         I am software enigneer
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className=" px-3 md:px-6 py-2 border border-lightBackground rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-darkGreen/40 hover:text-darkGreen/40">About</button>
          </Link>
          <Link href="#experience">
            <button className=" px-3 md:px-6 py-2 border border-lightBackground rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-darkGreen/40 hover:text-darkGreen/40">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className=" px-3 md:px-6 py-2 border border-lightBackground rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-darkGreen/40 hover:text-darkGreen/40">Skills</button>
          </Link>
          <Link href="#projects">
            <button className=" px-3 md:px-6 py-2 border border-lightBackground rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-darkGreen/40 hover:text-darkGreen/40">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}