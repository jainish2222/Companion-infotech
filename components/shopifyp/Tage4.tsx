"use client";
import React from "react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter Package",
      price: "₹14,999 – ₹24,999",
      task1: "Up to 5 pages (Home, Products, About, Contact, FAQ)",
      task2: "Theme setup & basic customization",
      task3: "10 product uploads + payment gateway setup",
      task4: "Mobile responsive & basic SEO setup",
      task5: "1 week support after delivery",
    },
    {
      name: "Business Package",
      price: "₹29,999 – ₹49,999",
      task1: "Includes everything in Starter",
      task2: "15 pages + advanced theme customization",
      task3: "50 product uploads + blog & discount setup",
      task4: "SEO Optimization + Google/Meta integration",
      task5: "1 month free support & WhatsApp integration",
    },
    {
      name: "Pro / eCommerce Plus",
      price: "₹74,999 – ₹99,999+",
      task1: "All Business features + unlimited products",
      task2: "Custom-designed pages (PageFly/Liquid)",
      task3: "App integrations + speed optimization",
      task4: "Multi-currency, GA4, A/B testing, and CRM",
      task5: "3 months maintenance & priority support",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 w-[80%] mx-auto mb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Shopify Store Packages Tailored for Your Business
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            From idea to launch, choose the right plan to build a fast,
            professional Shopify store with reliable support.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col border-black p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border dark:border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-zinc-900 dark:text-white"
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-3xl font-extrabold">{plan.price}</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="font-semibold">{plan.task1}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="font-semibold">{plan.task2}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="font-semibold">{plan.task3}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="font-semibold">{plan.task4}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="font-semibold">{plan.task5}</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 
         8a1 1 0 01-1.414 0l-4-4a1 1 0 
         011.414-1.414L8 12.586l7.293-7.293a1 1 
         0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
