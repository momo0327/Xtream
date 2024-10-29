// LampContainer.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
     children:React.ReactNode;
     className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      {/* Lamp effect section */}
      <div className="relative flex w-full items-center justify-center isolate z-0 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0.6, width: "12rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 md:h-72 w-[30rem] bg-gradient-conic from-red-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-black h-40 md:h-56 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-black bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.6, width: "12rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 md:h-72 w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-black bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-black h-40 md:h-56 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Shadow and blur for central glow */}

     

      
      </div>

      {/* Text and content section */}
      <div className="relative z-50 flex flex-col items-center px-5 md:px-8 lg:px-10 -translate-y-24 sm:-translate-y-28 lg:-translate-y-32 space-y-8 text-center">
        {children}
      </div>
    </div>
  );
};
