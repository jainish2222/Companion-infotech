import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <>
      <h1 className="text-2xl md:text-2xl font-sans lg:text-3xl font-bold max-w-7xl mx-auto text-center mt-8 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Shopify is <span className="text-green-600">modern, lightning-fast, and built to convert.</span>
      </h1>

      <div className="mx-auto w-[95%] grid max-w-4xl grid-cols-1 gap-4 py-10 sm:grid-cols-3 mb-20">
        
        {/* Fast Performance */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-r from-green-200 to-lime-200 flex flex-col items-center justify-center text-green-900">
            <h1 className="text-4xl font-bold">1.2s</h1>
            <h3 className="text-lg font-medium mt-2">Avg Load Time</h3>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            Shopify stores
            <PointerHighlight
              rectangleClassName="bg-lime-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">load fast</span>
            </PointerHighlight>
            even on mobile, boosting user engagement and trust.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Speed-optimized Shopify stores reduce bounce rate and keep customers browsing longer.
          </p>
        </div>

        {/* Better Conversions */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-r from-blue-200 to-indigo-200 flex flex-col items-center justify-center text-blue-900">
            <h1 className="text-4xl font-bold text-indigo-800">+23%</h1>
            <h3 className="text-lg font-medium mt-2 text-indigo-500">Higher Conversions</h3>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">Optimized UX</span>
            </PointerHighlight>
            leads to more checkouts and repeat buyers.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            A polished Shopify experience makes buying frictionless and builds customer loyalty.
          </p>
        </div>

        {/* Security & Scalability */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-tr from-yellow-200 to-orange-200 flex flex-col items-center justify-center text-yellow-900">
            <h1 className="text-4xl font-bold text-yellow-800">99.9%</h1>
            <h3 className="text-lg font-medium text-yellow-500 mt-2">Uptime + Security</h3>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            Shopify’s infrastructure
            <PointerHighlight
              rectangleClassName="bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-700 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10">scales effortlessly</span>
            </PointerHighlight>
            during traffic spikes.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Built-in security and enterprise-grade hosting keep your store safe and always online.
          </p>
        </div>
      </div>
    </>
  );
}
