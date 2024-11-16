"use client";
import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../../utils/titleMotion";

const Title = ({ title }: { title: string }) => {
  //   console.log(titleAnimation, "titleAnimation");
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      variants={titleAnimation}
      className="pb-12  text-transparent text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-red-900 via-red-600 to-white font-bold md:text-[64px] text-center"
    >
      {title}
    </motion.h2>
  );
};

export default Title;
