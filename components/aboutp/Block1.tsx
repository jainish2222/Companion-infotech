import React from 'react'
import Image from "next/image"
import { useId } from "react";
import { ColourfulText } from "@/components/ui/colourful-text";
const Part3 = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20  bg-white dark:bg-zinc-950 w-[85%] mx-auto text-center mb-20">
     <section className="flex flex-col-reverse  lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-7 bg-white dark:bg-zinc-950">
      {/* SVG / Image on the Left */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 mx-auto">
        <Image
          src="/img/gate.svg" // replace with your actual SVG path
          alt="Free Website Offer Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Text Content on the Right */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black dark:text-white font-sans my-4 text-center">
          <ColourfulText text="Companion Infotech" />
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto lg:mx-0 text-center">
          Powering Businesses with <span className="text-purple-500">Innovative Technological Solutions</span>
        </p>
       <p className="text-base md:text-sm text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
  We’re <span className="font-semibold text-green-600">Companion Infotech</span>, a new team passionate about helping startups and small businesses get online quickly. To build trust and showcase our skills, we’re offering <span className="font-semibold text-green-500">free web development</span> for our first few clients. No catch — just high-quality work, done fast, to prove what we can do. We also provide <span className="font-medium text-blue-500">UI/UX design</span>, <span className="font-medium text-blue-500">Web/App development</span> (iOS, React Native, and Flutter), <span className="font-medium text-blue-500">desktop application development</span>, and complete <span className="font-medium text-blue-500">Shopify store setup and management</span> — everything you need to launch with confidence.
</p>

      </div>
    </section>
 <div className="py-8 lg:py-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 max-w-7xl w-[80%] mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-purple-600 from-lime-400 dark:to-indigo-600 to-yellow-300 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-black dark:text-white mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
   
       </div>
  )
}

export default Part3

const grid = [
  {
    title: "Our Vision",
    description:
      "We envision ourselves as one of the leading technology consulting and development firms in the digital space, providing world-class services that will propel your business to new heights.",
  },
  {
    title: "Our Mission",
    description:
      "At Companion Infotech, we are on a mission to become the preferred choice for technology development and consultancy services across the globe, powering business innovation and digitalization across multiple industries and business domains.",
  },
  {
    title: "Our Approach",
    description:
      "We combine innovation, reliability, and modern technologies to deliver scalable, future-ready solutions. Our team focuses on understanding your unique business needs to build products that truly make a difference.",
  },
];




export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const getRandomCoordinates = (): [number, number] => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ];

  const generateUniqueCoordinates = (count: number): [number, number][] => {
    const set = new Set<string>();
    const result: [number, number][] = [];

    while (result.length < count) {
      const coord = getRandomCoordinates();
      const key = `${coord[0]}-${coord[1]}`;
      if (!set.has(key)) {
        set.add(key);
        result.push(coord);
      }
    }

    return result;
  };

  const p = pattern ?? generateUniqueCoordinates(5);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {/* {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {[...new Set(squares.map(([x, y]: any) => `${x}-${y}`))].map((key) => {
            const [xStr, yStr] = key.split("-");
            const xNum = parseInt(xStr, 10);
            const yNum = parseInt(yStr, 10);
            return (
              <rect
                strokeWidth="0"
                key={key}
                width={width + 1}
                height={height + 1}
                x={xNum * width}
                y={yNum * height}
              />
            );
          })}
        </svg>
      )} */}
    </svg>
  );
}
