"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    href: string;
    image: string;
  }[];
}) => {
  const tempColors = [
    "bg-cyan-700",
    "bg-blue-700",
    "bg-slate-700",
    "bg-yellow-700",
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="mr-2  relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-12 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-5 z-30 w-[50%] -bottom-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent h-px " />
                <div className="absolute left-10 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-slate-500 to-transparent h-px " />
                <Link
                  href={item.href}
                  target="_blank"
                  className="font-bold text-white cursor-pointer relative z-30 text-base"
                >
                  {item.name}
                </Link>
                {/* <div className="text-white text-xs">{item.designation}</div> */}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={item.image}
              alt={"somethign"}
              width={50}
              height={50}
              onMouseMove={handleMouseMove}
              className={`object-cover !m-0 z-${
                item.id * 10
              } !p-0 object-top border rounded-full h-10 w-10  group-hover:scale-105 group-hover:z-30 border-zinc-200  relative transition duration-500`}
            />
          </motion.div>
        </div>
      ))}
    </>
  );
};