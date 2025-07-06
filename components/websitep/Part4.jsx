"use client";
import React from "react";

export default function PricingSection() {
  const plans = [
 {
  name: "Launch Lite",
  price: "₹24,999",
  task1: "5 Pages Included",
  task2: "React + Vite build",
  task3: "SEO & Analytics ready",
  task4: "Free lifetime hosting",
  task5: "Contact form & basic support",
},
{
  name: "Pro Boost",
  price: "₹49,999",
  task1: "10 Pages + Blog",
  task2: "Next.js ISR + CMS",
  task3: "Enhanced SEO schema",
  task4: "Stripe/PayPal ready",
  task5: "Priority support (3 months)",
},
{
  name: "Elite Scale",
  price: "₹99,999",
  task1: "25+ pages + Store",
  task2: "Next.js Commerce",
  task3: "Pro SEO + pixels",
  task4: "Full eCommerce setup",
  task5: "A/B testing + Support (1 year)"
}
  ];

//   const features = [
//     "Individual configuration",
//     "No setup, or hidden fees",
//   ];

  return (
    <>
    <section className="bg-white dark:bg-zinc-950 w-[80%] mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col border-black p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border dark:border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-zinc-900 dark:text-white"
            >
              <h3 className=" text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400"></span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {/* {features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))} */}
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    <span className="font-semibold">{plan.task1}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    <span className="font-semibold">{plan.task2}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    <span className="font-semibold">{plan.task3}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    <span className="font-semibold">{plan.task4}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    <span className="font-semibold">{plan.task5}</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
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
