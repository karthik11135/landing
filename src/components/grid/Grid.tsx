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
    <div className="text-slate-100 mx-auto mb-20 w-5/6">
      <div className="md:mt-32 md:mb-20 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=" w-fit tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 mx-auto text-4xl md:text-5xl  font-bold px-4 py-4 "
        >
          Deployments made easy
        </motion.h2>
        <p className="text-zinc-600 tracking-tight text-center ">
          Deploy with ease, leave complexities to us.
        </p>
      </div>
      <div className="grid gap-5 grid-col-1 md:grid-cols-3">
        <FirstGridItem />
        {/* <br></br> */}
        <SecondGridItem />
        <ThirdGridItem />
        <FourthGridItem />
      </div>
    </div>
  );
};

export default Grid;
