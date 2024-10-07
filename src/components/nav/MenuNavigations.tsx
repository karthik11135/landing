"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerIcon } from "../ui/Icons";

const MenuNavigations = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuHandler = () => {
    console.log("reached here");
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div className="items-center col-span-2 md:col-span-auto text-start font-bold flex">
        <div
          onClick={menuHandler}
          className="cursor-pointer block md:hidden me-2"
        >
          <HamburgerIcon />
        </div>
        Startup
      </div>
      {isOpen && (
        <div className="absolute md:static top-14 mt-2 md:mt-0 rounded  md:bg-none md:rounded-none md:border-none border text-slate-300 col-span-1 md:col-span-2 md:flex items-center shrink  text-center">
          <AnimatePresence>
            <motion.div
              initial={{
                scale: 0,
                height: 0,
              }}
              animate={{
                scale: 1,
                height: "auto",
              }}
              exit={{
                // scale: 0,
                height: 0,
              }}
              transition={{
                scale: {
                  duration: 0.3,
                },
                height: {
                  duration: 0.2,
                },
              }}
              className="md:flex flex-col md:flex-row w-fit mx-auto"
            >
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Features
              </p>
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Pricing
              </p>
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Contact
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default MenuNavigations;
