"use client";
import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteors";
import { LampContainer } from "../ui/lamp";
import { ShootingStars } from "../ui/shooting-stars";
import { Spotlight } from "../ui/spotlight";
import { StarsBackground } from "../ui/stars-background";
import HeroPicSection from "./HeroPicSection";
import { TypewriterEffect } from "../ui/typewriter-effect";

const words = [
    {
      text: "World's",
    },
    {
      text: "Best",
    },
    {
      text: "AI",
    },
    {
      text: "Services",
    },
    {
      text: "Neon AI",
      className: "text-cyan-500 dark:text-slate-200"

    },
  ];
const Hero = () => {
  const transitionProperties = {
    delay: 0.3,
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 80,
  };
  return (
    <motion.div className="relative h-[150vh] flex flex-col w-full  text-white">
      <div className="h-[60vh] flex mt-40 justify-center mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transitionProperties}
          className="bg-gradient-to-br w-fit mx-auto font-bold from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-8xl tracking-tight text-transparent"
        >
          World's Best <br /> <span className="text-cyan-500">AI</span> Services 
        </motion.h1>
      <ShootingStars />
      </div>
      <StarsBackground />
      <HeroPicSection />

    </motion.div>
  );
};

export default Hero;
