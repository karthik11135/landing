"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FirstGridItem,
  SecondGridItem,
  ThirdGridItem,
  FourthGridItem,
} from "./GridItems";

const Grid = () => {
  return (
    <div className="text-slate-100 h-screen mx-auto w-5/6">
      <div className="mt-32 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=" w-fit tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 mx-auto text-4xl font-bold px-4 py-4 "
        >
          Deployments made easy
        </motion.h2>
        <p className="text-zinc-600 tracking-tight  text-center ">
          Deploy with ease, leave complexities to us.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-3">
        <FirstGridItem />
        <SecondGridItem />
        <ThirdGridItem />
        <FourthGridItem />
      </div>
    </div>
  );
};

export default Grid;
