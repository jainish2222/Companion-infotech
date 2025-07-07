import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

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
     const words = ["plan", "build", "scale"];

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
 From Idea to Launch: A Seamless 4-Step Journey
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
    description:
      "Kick off with a strategy call with our team leader to align on goals, key features, and the best-fit tech stack.",
    header: (
      <Skeleton>
        <Image
          src="/logos/plan.svg"
          alt="Plan"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Develop",
    description:
      "Design your app in Figma with up to 2 iterations. We ensure an intuitive UI and user-friendly flow.",
    header: (
      <Skeleton>
        <Image
          src="/logos/devlop.svg"
          alt="Develop"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Test & Deploy",
    description:
      "We build using React & Nest, then run full QA testing to ensure your app is stable, fast, and secure.",
    header: (
      <Skeleton>
        <Image
          src="/logos/test.svg"
          alt="Test & Deploy"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </Skeleton>
    ),
    icon: null,
  },
  {
    title: "Launch",
    description:
      "Go live with confidence. We include a 15-day post-launch warranty for fixes, tweaks, or enhancements.",
    header: (
      <Skeleton>
        <Image
          src="/logos/launch.svg"
          alt="Launch"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </Skeleton>
    ),
    icon: null,
  },
];
