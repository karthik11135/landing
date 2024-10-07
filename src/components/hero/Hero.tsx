"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import HeroPicSection from "./HeroPicSection";

const Hero = () => {
  const transitionProperties = {
    delay: 0.3,
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 80,
  };
  return (
    <motion.div id="herosection" className="relative md:h-[150vh]  px-1 md:px-0 flex flex-col w-full  text-white">
      <div className="md:h-[60vh] h-[40vh] flex mt-40 justify-center mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transitionProperties}
          className="bg-gradient-to-br w-fit mx-auto font-bold from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl md:text-8xl tracking-tight text-transparent"
        >
          World&apos;s Best <br /> <span className="text-cyan-500">AI</span> Services 
        </motion.h1>
      <ShootingStars />
      </div>
      <StarsBackground />
      <HeroPicSection />

    </motion.div>
  );
};

export default Hero;
