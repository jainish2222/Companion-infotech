"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function SpotlightNewDemo() {
  return (
    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-white dark:bg-zinc-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 text-center space-y-6">
     <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text  text-black dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
  Launch a Blazing-Fast Shopify Store <br />
  in 19 Days for <span className="animate-color-change">₹14,999 to ₹24,999</span>
</h1>

<p className="mt-4 font-normal text-base text-black dark:text-neutral-300 max-w-lg text-center mx-auto">
  Get your ecommerce business online with a sleek, high-converting Shopify store—delivered in just 19 days, without compromise.
</p>
      <button type="button" className="dark:text-white text-black mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Contact Us</button>
      </div>
    </div>
  );
}
