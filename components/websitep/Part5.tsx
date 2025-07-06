"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Speed ",
    },
    {
      text: "= ",
    },
    {
      text: "Sales",
       className: "text-blue-500 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem]">
         <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base w-[70%] mx-auto text-center">
        Cut your site load time from 8s to 1.2s—and watch conversions soar.<br/> 
        Faster websites can drive up to 20% more sales and generate 35% more leads.
      </p>
     
    </div>
  );
}
