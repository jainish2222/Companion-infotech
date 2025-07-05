import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { FlipWords } from "@/components/ui/flip-words";
export default function BentoGridDemo() {
      const words = ["think", "create", "iterate"];
    const colors = [
  "text-red-500",    // bold
  "text-yellow-500", // creative
  "text-blue-500",   // elegant
  "text-green-500",  // smart
  "text-purple-500",    // powerful (reuse red for impact)
  "text-orange-500",   // modern (reuse blue for clean feel)
];

  return (
    <>
<div className="flex flex-col items-center justify-center my-24 px-4 text-center mx-6">
  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-600 dark:text-neutral-400 mb-6">
    How we <FlipWords words={words} colors={colors} />
  </div>

<p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-serif">
  We build things the Agile way — with clarity, flexibility, and speed. Our team believes in continuous improvement, early delivery, and adapting to change. From planning and prototyping to launching scalable products, we focus on delivering real value at every stage of the process.
</p>

</div>

    <BentoGrid className="max-w-4xl mx-auto mb-24">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={ i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-lime-50 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 justify-center items-center">
    {children}
  </div>
);

const items = [
  {
    title: "Plan",
    description: "Strategize solutions through research, insights, and clear objectives.",
    header: (
      <Skeleton>
        <img src="/logos/plan.svg" alt="Plan" className="h-10 w-10" />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Develop",
    description: "Turn ideas into reality using modern technologies and clean code practices.",
    header: (
      <Skeleton>
        <img src="/logos/devlop.svg" alt="Develop" className="h-10 w-10" />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Test & Deploy",
    description: "Ensure performance, stability, and usability through testing and release.",
    header: (
      <Skeleton>
        <img src="/logos/test.svg" alt="Test & Deploy" className="h-10 w-10" />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Launch",
    description: "Deliver your product with impact, clarity, and readiness for real users.",
    header: (
      <Skeleton>
        <img src="/logos/launch.svg" alt="Launch" className="h-10 w-10" />
      </Skeleton>
    ),
    icon: null,
  },
];
