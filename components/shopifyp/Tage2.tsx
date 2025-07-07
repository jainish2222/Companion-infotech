import { HoverEffect } from "@/components/ui/card-hover-effect";
import {ColourfulText} from "@/components/ui/colourful-text";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto my-20 px-8 text-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white  font-sans my-4">
                <ColourfulText text="Why Shopify store?" /> 
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
    title: "Fast & Easy Setup",
    description:
      "Launch your Shopify store quickly without needing deep technical skills — go live in hours, not weeks.",
    link: "/v1/pricing/shopify/1",
    color: "bg-green-200",
  },
  {
    title: "Powerful App Ecosystem",
    description:
      "Extend your store easily with 8000+ apps for SEO, marketing, reviews, upsells, automation, and more.",
    link: "/v1/pricing/shopify/2",
    color: "bg-blue-200",
  },
  {
    title: "Secure & Scalable",
    description:
      "Enjoy enterprise-grade security, PCI compliance, and seamless scalability — from startups to large businesses.",
    link: "/v1/pricing/shopify/3",
    color: "bg-red-200",
  },
  {
    title: "Mobile & SEO Optimized",
    description:
      "Shopify themes are mobile-responsive with built-in SEO tools to boost rankings and conversions.",
    link: "/v1/pricing/shopify/4",
    color: "bg-yellow-100",
  },
  {
    title: "Integrated Payments",
    description:
      "Accept payments with Shopify Payments, Razorpay, PayPal, Stripe, and more — securely and easily.",
    link: "/v1/pricing/shopify/5",
    color: "bg-purple-200",
  },
  {
    title: "Multi-Channel Selling",
    description:
      "Sell on Facebook, Instagram, Amazon, and more — all from one unified Shopify dashboard.",
    link: "/v1/pricing/shopify/6",
    color: "bg-pink-200",
  },
];
