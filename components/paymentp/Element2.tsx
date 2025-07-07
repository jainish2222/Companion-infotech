import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <>
      <h1 className="text-2xl md:text-2xl font-sans lg:text-3xl font-bold max-w-7xl mx-auto text-center mt-8 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Here's the Deal — <span className="text-green-600">You only pay, if we deliver.</span>
      </h1>

      <div className="mx-auto w-[95%] grid max-w-4xl grid-cols-1 gap-4 py-10 sm:grid-cols-3">

        {/* 50% Upfront */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-r from-orange-200 to-amber-200 flex flex-col items-center justify-center text-yellow-900">
            <h1 className="text-4xl font-bold">30%</h1>
            <h2 className="text-lg font-medium mt-2">Pay Upfront</h2>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            We start the sprint with a
            <PointerHighlight
              rectangleClassName="bg-yellow-100 dark:bg-yellow-800 border-yellow-300 dark:border-yellow-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">shared commitment</span>
            </PointerHighlight>
            — risk balanced from Day 1.
          </div>
          <p className="mt-4 text-sm text-black dark:text-white">
            Your investment backs a clear timeline and dedicated effort from our side.
          </p>
        </div>

        {/* 50% After Delivery */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-r from-white to-gray-200 flex flex-col items-center justify-center text-blue-900">
            <h1 className="text-4xl font-bold">70%</h1>
            <h2 className="text-lg font-medium mt-2">Pay After Delivery</h2>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            We deliver first —
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">you pay after approval.</span>
            </PointerHighlight>
          </div>
          <p className="mt-4 text-sm text-black dark:text-white">
            Your satisfaction matters. The second half is paid only once the MVP is in your hands.
          </p>
        </div>

        {/* 10% Delay Discount */}
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex flex-col items-center justify-center text-pink-900">
            <h1 className="text-4xl font-bold text-red-700">5%</h1>
            <h2 className="text-lg font-medium mt-2 text-red-500">Delay Discount</h2>
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            For every week we delay,
            <PointerHighlight
              rectangleClassName="bg-red-100 dark:bg-red-800 border-red-300 dark:border-red-600 leading-loose"
              pointerClassName="text-red-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10">you save 10%</span>
            </PointerHighlight>
            — up to 50%.
          </div>
          <p className="mt-4 text-sm text-black dark:text-white">
            We stay accountable. If we miss deadlines, you get a discount automatically.
          </p>
        </div>
      </div>
    </>
  );
}
