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

// ???????????????????????????????????/


// "use client";

// import React, { memo } from "react";
// import { Cover } from "@/components/ui/cover";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const testimonials = [
//   {
//     quote: "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
//     name: "Jainish Koladiya",
//     designation: "Full Stack Developer & DevOps Engineer",
//     src: "/img/user1.jpg",
//   },
//   {
//     quote: "Assist with backend development and styling aspects of the P-show project.",
//     name: "Mayank Zalavadiya",
//     designation: "Full Stack Developer",
//     src: "/img/user2.jpg",
//   },
//   {
//     quote: "Handle content writing and design contributions for the P-show project.",
//     name: "Uttam Kheni",
//     designation: "Python Developer, Designer & Cybersecurity",
//     src: "/img/user3.png",
//   },
//   {
//     quote: "Contribute to the functionality, problem-solving and management for the P-show project.",
//     name: "Parth Kanani",
//     designation: "iOS Developer & Problem Solver",
//     src: "/img/user4.jpg",
//   },
// ];

// // Memoized testimonial card component for better performance
// const TestimonialCard = memo(({ testimonial, index }: { testimonial: any; index: number }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     className="bg-neutral-100 dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//   >
//     <blockquote className="text-lg italic text-gray-800 dark:text-gray-200">
//       "{testimonial.quote}"
//     </blockquote>
//     <div className="mt-4 flex items-center gap-4">
//       <Image 
//         width={48} 
//         height={48} 
//         src={testimonial.src} 
//         alt={`${testimonial.name} - ${testimonial.designation}`}
//         className="w-12 h-12 rounded-full object-cover"
//         loading="lazy"
//         sizes="48px"
//       />
//       <div>
//         <cite className="text-base font-semibold text-gray-900 dark:text-white not-italic">
//           {testimonial.name}
//         </cite>
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           {testimonial.designation}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// ));

// TestimonialCard.displayName = 'TestimonialCard';

// function AnimatedTestimonialsDemo() {
//   return (
//     <section 
//       className="w-full px-4 py-16 bg-white dark:bg-zinc-950"
//       aria-labelledby="team-heading"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 
//           id="team-heading"
//           className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800 dark:text-white"
//         >
//           Meet Our Amazing <Cover>Team</Cover> at Companion Infotech
//         </h2>
//         <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
//           At Companion Infotech, we blend modern technology with creative design to build powerful web and app
//           solutions—driving your business forward in today's fast-paced digital world.
//         </p>
//       </div>

//       <div 
//         className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//         role="list"
//         aria-label="Team member testimonials"
//       >
//         {testimonials.map((testimonial, index) => (
//           <div key={`testimonial-${index}`} role="listitem">
//             <TestimonialCard testimonial={testimonial} index={index} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default memo(AnimatedTestimonialsDemo);
