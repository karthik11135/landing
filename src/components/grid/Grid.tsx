"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "../ui/animated-tooltip";

import { motion } from "framer-motion";

const socialProfiles = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/karthik11135",
    image: "/github-mark-white.png",
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://x.com/karthik11135",
    image: "/logo-white.png",
  },
  {
    id: 4,
    name: "Linked in",
    href: "https://www.linkedin.com/in/karthik-rishinarada-a61b39251/",
    image: "/LI-In-Bug.png",
  },
];

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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-2 ps-5 gap-2 bg-cardColor grid grid-cols-3 rounded-lg pt-4"
        >
          <div className="col-span-1">
            <h3 className="text-lg tracking-tight font-bold mb-4">
              Regression Model
            </h3>
            <p>
              A regression model is a statistical model that estimates the
              relationship between a dependent variable and one or more
              independent variables
            </p>
            <div className="mt-10 flex">
              <AnimatedTooltip items={socialProfiles} />
            </div>
          </div>
          <div className="col-span-2 flex items-end">
            <Image
              src="/second.png"
              alt="second"
              className="border-t-8 border-l-8 border-zinc-600 rounded-tl-xl"
              width={700}
              height={100}
            ></Image>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-1 ps-5 bg-cardColor  rounded-lg pt-4"
        >
          <h4 className="text-lg font-bold tracking-tight">Flow graph</h4>
          <p className="mb-6">
            Algorithms flow in order to our models <br></br> Easily
            understandable
          </p>
          <Image
            src="/second.png"
            alt="second"
            className="border-t-8 border-l-8 border-zinc-500 rounded-tl-xl"
            width={400}
            height={100}
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
