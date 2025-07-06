"use client";
import { useState } from "react";
import Image from "next/image";
import { ColourfulText } from "@/components/ui/colourful-text";

const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "UI/UX",
  "App",
  "AI Tools",
  "E-Commerce",
  "Deployment tools"
];

const techItems = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: "/logos/html5.svg" },
  { name: "CSS", category: "Frontend", icon: "/logos/css.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/logos/javascript.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/logos/typescript.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "/logos/bootstrap.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/logos/tailwindcss.svg" },
  { name: "React.js", category: "Frontend", icon: "/logos/react.svg" },
  { name: "Next.js", category: "Frontend", icon: "/logos/nextdotjs.svg" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "/logos/nodedotjs.svg" },
  { name: "Express.js", category: "Backend", icon: "/logos/express.svg" },
  { name: "Nest.js", category: "Backend", icon: "/logos/nestjs.svg" },
  { name: "GraphQL", category: "Backend", icon: "/logos/graphql.svg" },
  { name: "MongoDB", category: "Backend", icon: "/logos/mongodb.svg" },
  { name: "PostgreSQL", category: "Backend", icon: "/logos/postgresql.svg" },
  { name: "Redis", category: "Backend", icon: "/logos/redis.svg" },
  { name: "Firebase", category: "Backend", icon: "/logos/firebase.svg" },
  { name: "Supabase", category: "Backend", icon: "/logos/supabase.svg" },
  { name: "Cloudflare Workers", category: "Backend", icon: "/logos/cloudflareworkers.svg" },

  // UI/UX
  { name: "Figma", category: "UI/UX", icon: "/logos/figma.svg" },
  { name: "Canva", category: "UI/UX", icon: "/logos/canva.svg" },
  { name: "Adobe XD", category: "UI/UX", icon: "/logos/adobe.svg" },

  // App
  { name: "iOS (native)", category: "App", icon: "/logos/ios.svg" },
  { name: "Flutter", category: "App", icon: "/logos/flutter.svg" },
  { name: "Swift", category: "App", icon: "/logos/swift.svg" },
  { name: "Dart", category: "App", icon: "/logos/dart.svg" },
  { name: "React Native", category: "App", icon: "/logos/react.svg" },

  // AI Tools
  { name: "Claude", category: "AI Tools", icon: "/logos/claude.svg" },
  { name: "Gemini", category: "AI Tools", icon: "/logos/googlegemini.svg" },
  { name: "OpenAI", category: "AI Tools", icon: "/logos/openai.svg" },
  { name: "Replit AI", category: "AI Tools", icon: "/logos/replit.svg" },
  { name: "V0", category: "AI Tools", icon: "/logos/v0.svg" },

  // E-Commerce
  { name: "Shopify", category: "E-Commerce", icon: "/logos/shopify.svg" },

  // Deployment tools
  { name: "Vercel", category: "Deployment tools", icon: "/logos/vercel.svg" },
  { name: "Render", category: "Deployment tools", icon: "/logos/render.svg" },
  { name: "Netlify", category: "Deployment tools", icon: "/logos/netlify.svg" },
  { name: "AWS", category: "Deployment tools", icon: "/logos/aws.jpg" },
];

const categoryColors: { [key: string]: string } = {
  All: "bg-blue-600",
  Frontend: "bg-pink-700",
  Backend: "bg-green-700",
  "UI/UX": "bg-purple-700",
  App: "bg-yellow-400", // Light background
  "AI Tools": "bg-indigo-700",
  "E-Commerce": "bg-red-700",
  "Deployment tools": "bg-teal-700",
};

const textColorMap: { [key: string]: string } = {
  App: "text-black", // Use black text on yellow
  default: "text-white",
};

export default function TechMenuGrid() {
  const [selected, setSelected] = useState("Frontend");

  const filteredItems =
    selected === "All"
      ? techItems
      : techItems.filter((item) => item.category === selected);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-16 bg-white dark:bg-zinc-950 w-[85%] mx-auto text-center mb-32">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white font-sans my-14">
        <ColourfulText text="Future-Ready Tech" /> for Today and Tomorrow.
      </h1>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        We are constantly evolving with modern technologies to deliver innovative, scalable, and future-ready digital solutions. Here's what we work with:
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-24">
        {techCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ${
              selected === cat
                ? `${categoryColors[cat]} ${textColorMap[cat] || textColorMap.default}`
                : `bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="w-full max-w-5xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center mx-auto">
        {filteredItems.map((tech, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] flex items-center justify-center bg-gray-100 dark:bg-gray-400 rounded-xl shadow hover:scale-105 transition-transform mx-auto"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
