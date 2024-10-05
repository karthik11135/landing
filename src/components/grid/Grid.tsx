"use client";

import React from "react";
import Image from "next/image";

import { AnimatedTooltip } from "../ui/animated-tooltip";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

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
<p className="text-sm font-light mt-3">
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
          <p className="mb-6 font-light text-zinc-400 text-sm">
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-1 ps-5 gap-2 bg-cardColor rounded-lg pt-4"
        >
          <h2 className="bg-gradient-to-t bg-clip-text text-transparent from-slate-200 to-slate-500">
            Sail on the ocean of AI
          </h2>
          <h3 className="bg-gradient-to-t bg-clip-text text-transparent from-slate-50 to-slate-200">
            Master of fishing intelligence
          </h3>
          <div className="flex mb-5">
            <GridCardItem text="git commit -m 'ai commit'" />
            <GridCardItem text="git pull ; revert commit" />
            <GridCardItem text="git status" />
          </div>
        </motion.div>
        <FourthGridItem />
      </div>
    </div>
  );
};

export default Grid;

const GridCardItem = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ skewX: 0, translateY: 0, rotateY: 20, scale: 0.9 }}
      whileHover={{
        // skewX: 10,
        // translateY: 20,
        rotateY: 0,
        translateY: 10,
        scale: 1,
        z: 100,
      }}
      transition={{
        // repeat: Infinity,
        type: "spring",
        stiffness: 70,
      }}
      className="bg-slate-900 mt-3 font-semibold shadow-[30px_-3px_100px_5px_rgba(100,100,100,0.3)] items-center justify-start h-36 bg-gradient-to-b text-wrap w-28 from-zinc-500 to-neutral-800 rounded-lg text-slate-50 flex px-2"
    >
      <div className="text-sm scale-75 ">{text}</div>
    </motion.div>
  );
};

const FourthGridItem = () => {
  return (
    <CardContainer
      containerClassName="col-span-2  h-full py-0"
      className=" h-full"
    >
      <CardBody className="w-full  h-full">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="rounded-lg pe-2.5 gap-5 bg-cardColor h-full flex  pt-4"
        >
          <CardItem translateZ={40}>
            <Image
              src="/greentree.png"
              className="me-auto rounded-tr-xl border-t h-full border-r border-zinc-500"
              alt="nothing"
              width={1000}
              height={200}
            />
          </CardItem>
          <CardItem translateZ={60} translateX={-10}>
            <div className="ms-auto tracking-tight w-fit font-bold -sm">
              <p>Greenary is developed by Artificial Intelligence</p>
              <p className="text-sm font-light text-zinc-200 mt-3">
                Game theory, regresssion, lemmetization are the most important
                topics. However writing a website is the first step toward
                success.
              </p>
              {/* </CardItem>
            <CardItem translateZ={60}> */}
              <button className="bg-black mt-20 ms-auto block rounded-full px-3 py-0.5 text-slate-100 border border-zinc-500">
                Check it
              </button>
            </div>
          </CardItem>
        </motion.div>
      </CardBody>
    </CardContainer>
  );
};
