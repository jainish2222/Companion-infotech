import { cn } from "@/lib/utils";
import {
  IconEye,
  IconTrendingUp,
  IconDiamond,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
const features = [
  {
    title: "Transparency",
    description:
      "We value the trust our clients place in us and ensure complete visibility into every stage of their project — so they always know what they’re paying for and why it matters.",
    icon: <IconEye />, // Replace with your own icon
  },
  {
    title: "Continuous Growth",
    description:
      "We’re committed to staying ahead of the curve — constantly learning, adapting, and evolving to provide better solutions aligned with the latest technologies.",
    icon: <IconTrendingUp />, // Replace with your own icon
  },
  {
    title: "Service",
    description:
      "Client success is at the heart of everything we do. We deeply understand your vision and work collaboratively to exceed expectations and deliver results.",
    icon: <IconTerminal2 />, // Replace with your own icon
  },
  {
    title: "Value",
    description:
      "We help clients reach their goals faster with cost-effective, high-impact solutions powered by top talent, modern tools, and emerging technology.",
    icon: <IconDiamond />, // Replace with your own icon
  },
];

  return (
    <>
     <h1 className="text-3xl md:text-3xl mb-8 font-sans lg:text-4xl font-bold max-w-7xl text-center mt-8 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white w-[75%] mx-auto">
        Our <span className="text-green-600">Core Values</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto w-[75%]">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
