import React from "react";
import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function CoverDemo() {
    const words = `At Companion Infotech, we blend modern technology with creative design to build powerful web and app solutions—driving your business forward in today's fast-paced digital world.`;
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Accelerate Your Vision with Innovative <br /> at <Cover>Digital Solutions</Cover>
      </h1>
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-600 dark:text-neutral-400 text-center">
       <TextGenerateEffect words={words} />
     </div>
    </div>
  );
}
