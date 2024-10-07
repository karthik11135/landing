import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { CustomerStarIcon } from "../ui/Icons";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const CustomerSection = () => {
  return (
    <div className="w-5/6 pt-16 mb-16 grid  grid-cols-6 mx-auto">
      <div className="col-span-2 ">
        <h2 className="text-slate-100 font-bold mb-4 text-4xl">
          Deploy your websites <br></br> without any hurdles.
        </h2>
        <p className="mb-5 text-zinc-500 tracking-tight ">
          Experience lightning-fast hosting with unparalleled reliability. Our
          cutting-edge infrastructure ensures your website stays online 24/7,
          with 99.9% uptime guaranteed.
        </p>
        <div className="flex pt-5 gap-10">
          <div className="flex">
            <AnimatedTooltip items={people} />
          </div>
          <div className=" flex items-center ">
            <CustomerStarIcon />
            <CustomerStarIcon />
            <CustomerStarIcon />
            <CustomerStarIcon />
            <CustomerStarIcon />
          </div>
        </div>
        <p className="text-zinc-600 mt-2 mb-5 tracking-tight">
          Trusted by millions of users
        </p>
      </div>
      <div className="col-span-1 col-start-6 flex items-center ">
        <HoverBorderGradient as="button" className="py-1 bg-black ">
          Book a call
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default CustomerSection;
