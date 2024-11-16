"use client";
import React, { ElementType, ComponentPropsWithoutRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../utils/utils";

// Define a type for the MovingBorderDiv props
type MovingBorderDivProps<T extends ElementType> = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: "div";
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & ComponentPropsWithoutRef<T>;

// Main Component
export function MovingBorderDiv<T extends ElementType = "div">({
  borderRadius = "0rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingBorderDivProps<T>) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl  h-auto w-fit p-[1px] overflow-hidden ",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-900 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

// Define a type for MovingBorder props
interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}

// Moving Border Component
export const MovingBorder = ({
  children,
  duration = 4000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps & React.SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x || 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y || 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
