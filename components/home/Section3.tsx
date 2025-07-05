import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web Development",
    description:
      "Custom, responsive, and scalable websites built with modern technologies—designed to establish a strong digital presence for your business.",
    link: "www.web.com",
    color: "bg-red-200",
  },
  {
    title: "App Development",
    description:
      "Robust and user-friendly mobile applications for Android, iOS, or cross-platform—from initial concept to final deployment.",
    link: "www.app.com",
    color: "bg-yellow-200",
  },
  {
    title: "Shopify Store Development",
    description:
      "Complete Shopify solutions including store setup, theme customization, app integration, and performance optimization.",
    link: "www.Shopify.com",
    color: "bg-green-200",
  },
  {
    title: "UI/UX Design",
    description:
      "Attractive and intuitive designs for websites and apps that deliver seamless user experiences and boost user engagement.",
    link: "www.frigma.com",
    color: "bg-blue-200",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on search engines with effective on-page and off-page SEO strategies to drive organic traffic and grow your brand.",
    link: "www.seoop.com",
    color: "bg-purple-200",
  },
  {
    title: "AI Agents & Automation",
    description:
      "Integrate intelligent AI agents and workflow automation to streamline operations, reduce manual tasks, and enhance customer interaction.",
    link: "www.chatgpt.ai",
    color: "bg-pink-200",
  },
];
