import React from "react";
import { FloatingDockDemo } from "./FloatingDockDemo";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
const Footer = () => {
  return (
    <div className="py-[40px] md:py-[80px]">
      <div className="flex justify-between flex-col md:flex-row gap-12">
        <div className="flex flex-col md:gap-12 gap-3 order-2 md:order-1">
          <h2 className="text-xl font-semibold">
            S H A S H V A T &nbsp; &nbsp; S E N
          </h2>
          <p className="opacity-45 md:w-[490px]">
            Not just a coder—a creator of experiences. As a full-stack
            developer, I bring together art and engineering to build seamless,
            scalable, and engaging digital worlds.
          </p>
        </div>

        <div className="flex flex-col md:flex-col md:gap-12 gap-3 order-1 md:order-2 ">
          <h2 className="text-xl font-semibold w-full sticky">SOCIAL</h2>
          <div className="hidden md:block">
            <FloatingDockDemo />
          </div>

          <div className="md:hidden flex gap-4">
            <a
              href="https://github.com/shashvat53"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shashvatsen-422958209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/__shashvat.06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition duration-300"
            >
              <IconBrandInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/shashvat.sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <IconBrandX size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-16" />
      <p className="text-center text-xs opacity-60 mt-4">
        © Copyright 2024 . Made by Shashvat Sen
      </p>
    </div>
  );
};

export default Footer;
