import { HoverEffect } from "@/components/ui/card-hover-effect";
import {ColourfulText} from "@/components/ui/colourful-text";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white font-sans my-4">
                <ColourfulText text="Why Companion Infotech?" /> 
        </h1>
         <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        Some reasons that makes us stand out!
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "High Quality Code",
    description:
      "We use clear, simple, well-tested, bug-free, refactored, documented, and performant code.",
    link: "#high-quality-code",
    color: "bg-fuchsia-200",
  },
  {
    title: "Agile Based Decision Making",
    description:
      "We perform collaborative, iterative, and transparent decision-making processes.",
    link: "#agile-decision-making",
    color: "bg-red-200",
  },
  {
    title: "Efficient Project Management",
    description:
      "We have a firm grasp on the scope, budget, resources, personnel, and timeline dedicated to a project.",
    link: "#project-management",
    color: "bg-lime-200",
  },
  {
    title: "Human Oriented Approach",
    description:
      "Our designs are based on a deep understanding of users, tasks, and refined by user-centered evaluation.",
    link: "#human-approach",
    color: "bg-orange-100",
  },
  {
    title: "Full Stack Teams",
    description:
      "We are a team of dedicated developers specializing in various fields of software development.",
    link: "#full-stack-teams",
    color: "bg-blue-200",
  },
  {
    title: "Progressive Roadmap",
    description:
      "We are a result-driven software company that understands the client’s project and offers the best-fit technology solution.",
    link: "#progressive-roadmap",
    color: "bg-teal-200",
  },
];
