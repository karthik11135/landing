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
      className="mx-auto bg-zinc-800 border-zinc-500 rounded-xl md:rounded-3xl shadow-[0px_0px_50px_2px_rgba(250,250,250,0.3)] mb-16 md:mb-32 md:p-3.5 w-5/6 md:w-4/6 "
    >
      <motion.div className="p-3.5 rounded-xl">
        <Image
          src="/heropic.jpg"
          className="w-full rounded-xl  opacity-100"
          width={1200}
          height={1200}
          alt="somethingwentwrong"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroPicSection;
