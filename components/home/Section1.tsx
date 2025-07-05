import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

import { FlipWords } from "@/components/ui/flip-words";

export default function BackgroundLinesDemo() {
 const words = ["bold", "creative", "elegant", "smart", "dynamic", "modern"];
  const colors = [
  "text-red-500",    // bold
  "text-yellow-500", // creative
  "text-blue-500",   // elegant
  "text-green-500",  // smart
  "text-purple-500",    // powerful (reuse red for impact)
  "text-orange-500",   // modern (reuse blue for clean feel)
];

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 dark:bg-zinc-950">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        We Build <FlipWords words={words} colors={colors} />
        <br />
        Websites and Apps.
        <br />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-600  dark:text-neutral-400 text-center">
        Get expert advice from top professionals — including developers, designers, SEO specialists, and more.
      </p>
    </BackgroundLines>
  );
}
