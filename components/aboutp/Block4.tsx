"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
      
  const words = [
    {
      text: "Tell",
      className:  "text-blue-600 dark:text-blue-200"
    },
    {
      text: "Us",
       className:  "text-blue-600 dark:text-blue-200"
    },
    {
      text: "Your",
       className: "text-yellow-600 dark:text-yellow-200",
    },
    {
      text: "Project",
       className: "text-yellow-600 dark:text-yellow-200",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem]">
         <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base w-[70%] mx-auto text-center">
      Our team of experienced professionals is ready to lead your project from the drawing board to reality and help you align with your business goals.
      </p>
           <button type="button" className="text-white mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Contact Us</button>
    </div>
  );
}
