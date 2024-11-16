"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../../utils/utils";
import { Cover } from "../components/ui/cover";
import { FlipWords } from "./ui/flip-words";

export function BackgroundBoxesDemo() {
  const words = ["Experiences", "Adventures", "Magic", "Marvels"];
  return (
    <div className="h-screen relative w-full overflow-hidden bg-[#050709] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#050709] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className={cn(
            "md:text-4xl text-2xl  md:font-normal text-white relative z-20 text-center "
          )}
        >
          Hola! I <Cover>SHASHVAT SEN</Cover> — Turning Ideas into Interactive{" "}
          <FlipWords words={words} />! <br />
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20  text-xs md:text-sm">
          I am a full-stack developer who loves to think big and code bigger!
          Whether it iss creating interactive apps, boosting website
          performance, or pushing design boundaries, I am all about adding that
          extra wow factor. If you are up for an unforgettable digital journey,
          let is connect!
        </p>
        <div className=" text-center mt-4">
          {/* <TailwindcssButtons /> */}

          <button
            onClick={() =>
              (window.location.href = "mailto:shashvatsen00@gmail.com")
            }
            className=" relative z-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
