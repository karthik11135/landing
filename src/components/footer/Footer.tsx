"use client";
import React from "react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:grid-cols-2 grid text-zinc-500  tracking-wide mx-auto w-5/6 my-20">
      <div className="md:mb-0 mb-3">
        <p
          onClick={() => scrollToSection("herosection")}
          className="text-neutral-300  cursor-pointer mb-1.5 text-lg font-bold tracking-wide"
        >
          Startup
        </p>
        <p className="text-sm">Copyrights reserved 2024, 2025.</p>
      </div>
      <div className="grid md:gap-4 gap-7 grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-neutral-300 ">Pages</p>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">Blog</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold  text-neutral-300">Socials</p>
          <p className="cursor-pointer">Facebook</p>
          <p className="cursor-pointer">Instagram</p>
          <p className="cursor-pointer">Twitter</p>
          <p className="cursor-pointer">Linkedin</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-neutral-300">Legal</p>
          <p className="cursor-pointer">Privacy policy</p>
          <p className="cursor-pointer">Terms and Services</p>
          <p className="cursor-pointer">Cookie policy</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-neutral-300">Register</p>
          <p className="cursor-pointer">Sign up</p>
          <p className="cursor-pointer">Login</p>
          <p className="cursor-pointer">Book a demo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
