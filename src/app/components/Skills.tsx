import React from "react";
import Title from "./Title";
import { MovingBorderDiv } from "./ui/moving-border";
const Skills = () => {
  return (
    <div className="  flex justify-center items-center w-full">
      <div className="">
        <div className="">
          <Title title="The Skill Set" />
        </div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-14">
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/javascriptImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/mongodbImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-2 px-6 md:p-8"
            >
              <img
                src="/technologyImages/expressjsImg.png"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>

            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/reactjsImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>

            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/nodejsImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/nextImg.webp"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/typescriptImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>

            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/tailwindcssImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>

            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/material-uiImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>

            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/htmlImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/cssImg.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
            <MovingBorderDiv
              borderRadius=""
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 py-1 px-6 md:p-8"
            >
              <img
                src="/technologyImages/github1Img.svg"
                className="w-[120px] h-[70px] object-contain"
              />
            </MovingBorderDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
