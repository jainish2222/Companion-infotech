import React from "react";
import { Cover } from "@/components/ui/cover";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
 const testimonials = [
  {
    quote:
      "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
    name: "Jainish Koladiya",
    designation: "Full stack developer and DevOps engineer",
    src: "/img/user1.jpg",
  },
  {
    quote:
      "Assist with backend development and styling aspects of the P-show project.",
    name: "Mayank Zalavadiya",
    designation: "Full stack developer",
    src: "/img/user2.jpg",
  },
  {
    quote:
      "Handle content writing and design contributions for the P-show project.",
    name: "Uttam Kheni",
    designation: "Python developer, designer and cybersecurity",
     src: "/img/user3.png",
  },
  {
    quote:
      "Contribute to the functionality, problem-solving and management for the P-show project.",
    name: "Parth Kanani",
    designation: "iOS developer and good problem-solver",
    src: "/img/user4.jpg",
  }
];

   const words = `At Companion Infotech, we blend modern technology with creative design to build powerful web and app solutions—driving your business forward in today's fast-paced digital world.`;
  return (
    <>
       <div>
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Meet Our Amazing <Cover>Team</Cover> at Companion Infotech
      </h1>
    </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  )
}

