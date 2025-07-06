import React from 'react'
import Link from 'next/link'

const Section10 = () => {
  return (
    <div>
      <section className="p-4 bg-white sm:p-6 dark:bg-zinc-950 border-t-2 mx-auto">
        <div className="mx-auto max-w-screen-xl pt-18">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center">
                <img src="img/logo.svg" className="mr-3 h-8" alt="Company Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Companion Infotech
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">About Us</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">Careers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/e1/privacy-policy" className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/e1/refund-policy" className="hover:underline">Refund Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/e1/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Services
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Web Development</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">App Development</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Shopify Store Development</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">UI/UX Design</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">SEO Optimization</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">AI Agents & Automation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025 <Link href="#" className="hover:underline">Companion™</Link>. All rights reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
              </Link>
              {/* Add more icons here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section10;
