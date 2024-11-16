"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { IconType } from "react-icons";
// import { FaReact } from "react-icons/fa6";

interface WorkProjectData {
  title: string;
  heading: string;
  image: string;
  webView: string;
  technologyImage: string[];
  codeVeiw: boolean;
  repoUrl?: string; // Optional property for GitHub URL
}

export function ThreeDCard({ data }: { data: WorkProjectData }) {
  console.log(data?.image, "imagesssssss");

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {data?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {data?.heading}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={data?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="my-10">
          <div className="technology-icons flex items-center gap-6 pr-2">
            {data.technologyImage.map((techImage, index) => (
              <img
                key={index}
                src={techImage}
                alt="Technology icon"
                className="w-7 h-7"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href={data?.webView}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Visit now →
          </CardItem>
          {data?.codeVeiw && data?.repoUrl && (
            <CardItem
              translateZ={20}
              as={Link}
              href={data?.repoUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              View Code
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
