import React from "react";
import Image from "next/image";
// import { ColourfulText } from "@/components/ui/colourful-text";
import { ReactNode } from "react";

interface InfoSectionProps {
  imageSrc: string;
  imageAlt: string;
  heading?: string;
  colourfulHeading: string ;
  subheading?: string | ReactNode;
  description?: string | ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  imageAlt,
  heading,
  colourfulHeading,
  subheading,
  description,
}) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-white dark:bg-zinc-950 w-[97%] mx-auto text-center mb-20">
      <section className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
         {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {heading && (
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white font-sans mb-4 my-4 text-center lg:text-left">
              {heading}
            </h1>
          )}

          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold font-sans mb-4 my-4 text-center lg:text-left 
bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
            {colourfulHeading} 
          </h2>

          {subheading && (
            <p className="text-lg md:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto lg:mx-0 text-justify">
              {subheading}
            </p>
          )}

          {description && (
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 text-justify">
              {description}
            </p>
          )}
        </div>
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
