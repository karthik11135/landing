"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";

const Waitlist = () => {
  return (
    <div className="md:h-[40rem] h-[30rem] relative flex border-t-2 border-zinc-800 rounded-t-3xl items-center justify-center text-slate-50 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="md:w-2/6 w-5/6 z-10"
      >
        <h1 className="bg-clip-text bg-gradient-to-br text-center text-transparent font-extrabold from-cyan-400 to-neutral-700 text-5xl md:text-7xl mb-4">
          Join us today
        </h1>
        <p className="from-neutral-200 mb-7 to-neutral-600 bg-clip-text text-transparent bg-gradient-to-br text-center">
          Welcome Welcome Welcome. Join us before anybody else to get the
          world&apos;s best AI services all for free
        </p>
        <div className="mx-4 ">
          <input
            className="rounded-lg border focus-within:border-cyan-600 h-[2rem] px-2 py-5 text-zinc-500 focus:outline-none bg-black border-zinc-700 w-full placeholder:text-zinc-700"
            placeholder="maxwell@gmail.com"
          ></input>
        </div>
        <div className="w-fit mx-auto mt-8">
          <motion.button className="px-3 py-0.5 text-zinc-300 border border-cyan-700 rounded-full">
            Submit
          </motion.button>
        </div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
};

export default Waitlist;
