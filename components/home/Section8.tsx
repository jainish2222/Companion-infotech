// ContactForm.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/stateful-button"
export default function ContactForm() {
    const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };
  return (
    <section className="bg-white dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-16 mx-auto p-12">
        {/* Left: Form */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
           Let’s Make It Happen Get Your Free Quote Today!
          </p>
          <form className="space-y-6"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2"
                  placeholder="Bonnie"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2"
                  placeholder="Green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2"
                  placeholder="+12 345 6789"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              By submitting this form you agree to our{" "}
              <Link href="/e1/terms-and-conditions" className="text-blue-600 dark:text-blue-400 underline">
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link href="/e1/privacy-policy" className="text-blue-600 dark:text-blue-400 underline">
                privacy policy
              </Link>
              .
            </div>
              <Button onClick={handleClick}>Send message</Button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 mt-20">
         <div>
  <div className="text-lg font-semibold">Company information:</div>

  <div className="flex justify-start my-4">
    <img src="img/logo.svg" alt="Companion" className="w-16 h-auto" />
  </div>

  <div>Companion Infotech</div>
</div>



          <div>
            <div className="text-lg font-semibold">Address:</div>
            <div>
              Sarthana Jataknaka<br />
              Surat, Gujarat, Inida <br />
              Zip Code/Postal code: 395013
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold">Call us:</div>
            <p>
              Call us to speak to a member of our team. We are always happy to help. <br />
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                +91 90818 82802
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
