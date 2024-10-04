import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroPicSection = () => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className="mx-auto  bg-zinc-800 border border-zinc-500 rounded-3xl shadow-[0px_0px_50px_2px_rgba(250,250,250,0.3)] mb-32 p-3.5 m-2 w-4/6 0"
    >
      <motion.div className=" p-3.5  rounded-xl">
        <Image
          src="/heropic.jpg"
          className="w-full rounded-xl  opacity-100"
          width={1000}
          height={1200}
          alt="somethingwentwrong"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroPicSection;