import { motion } from "framer-motion";
import React from "react";
// import { urlFor } from "../sanity";
// import { Project } from "../typings";

type Props = {};

export default function Projects({  }: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
  >
    <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
      Projects
    </h3>

    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
        <img
         src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
         alt=""
        />

        <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
        <span className="underline decoration-darkGreen/50"></span>grfhdfghjyuhfghyjhhfsdjyhfg</h4>
          <p>hdfgdukukfdhjgdukbhfgjghjgbjhfgvbhjfgyjhufggbbuyjhsdf</p>
        </div>
        
      </div>
      {/* ********************************************************************************************************************* */}
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
        <img
         src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
         alt=""
        />
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
        <span className="underline decoration-darkGreen/50"></span>grfhdfghjyuhfghyjhhfsdjyhfg</h4>
          <p>hdfgdukukfdhjgdukbhfgjghjgbjhfgvbhjfgyjhufggbbuyjhsdf</p>
        </div>
        
      </div>
       {/* ********************************************************************************************************************* */}
       <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
        <img
         src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
         alt=""
        />
        <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
        <span className="underline decoration-darkGreen/50"></span>grfhdfghjyuhfghyjhhfsdjyhfg</h4>
          <p>hdfgdukukfdhjgdukbhfgjghjgbjhfgvbhjfgyjhufggbbuyjhsdf</p>
        </div>
        
      </div>
       {/* ********************************************************************************************************************* */}
    </div>
    <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  );
}