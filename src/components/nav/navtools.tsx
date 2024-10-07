"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";

interface NavToggleContextType {
  changeNav: boolean;
  setChangeNav: (open: boolean) => void;
}

const NavToggleContext = createContext<NavToggleContextType | undefined>(
  undefined
);

export const NavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [changeNav, setChangeNav] = useState(false);
  return (
    <NavToggleContext.Provider value={{ changeNav, setChangeNav }}>
      {children}
    </NavToggleContext.Provider>
  );
};

export const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const context = useContext(NavToggleContext);

  useMotionValueEvent(scrollYProgress, "change", (arg) => {
    console.log(arg);
    if (arg > 0.1) {
      context?.setChangeNav(true);
    } else {
      context?.setChangeNav(false);
    }
  });

  return (
    <motion.div
      className={` text-white  fixed grid z-20 grid-cols-3 left-1/2 transform -translate-x-1/2 py-2.5 px-6 rounded-full mx-auto
      ${
        context?.changeNav
          ? "shadow shadow-slate-400 ring-slate-500 backdrop-blur-md bg-slate-700"
          : ""
      }`}
      initial={{
        width: "83.33%",
        marginTop: "0rem",
      }}
      animate={{
        backgroundColor: context?.changeNav ? "rgba(1,1,1,0.3)" : "",
        width: context?.changeNav ? "58.33%" : "83.33%",
        marginTop: context?.changeNav ? "1.7rem" : "0.5rem",
      }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 90,
      }}
    >
      {children}
    </motion.div>
  );
};

export const NavButtons = () => {
  const context = useContext(NavToggleContext);
  return (
    <div className="flex items-center ms-auto">
      {!context?.changeNav && (
        <AnimatePresence>
          <motion.p
            whileHover={{ y: -3.5 }}
            initial={{ opacity: 0, x: 20 }} // Initial state when it enters
            animate={{ opacity: 1, x: 0 }} // Animate in
            exit={{ opacity: 0, x: 100 }} // Exit animation when it disappears
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-white me-4 cursor-pointer"
          >
            Login
          </motion.p>
        </AnimatePresence>
      )}
      <motion.button
        whileHover={{ y: -3.5 }}
        className="text-black bg-white rounded-md px-2 py-1.5 font-bold"
      >
        Book a Call
      </motion.button>
    </div>
  );
};
