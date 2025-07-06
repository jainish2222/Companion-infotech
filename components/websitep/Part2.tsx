import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <>
    <h1 className="text-2xl md:text-2xl font-sans lg:text-3xl font-bold max-w-7xl mx-auto text-center mt-8 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white ">
         WordPress is <span className="text-red-600">outdated, sluggish, and driving customers away.</span>
    </h1>
    <div className="mx-auto w-[95%] grid max-w-4xl grid-cols-1 gap-4 py-10 sm:grid-cols-3">
        
      <div className="rounded-md p-6">
<div className="h-40 w-full rounded-lg bg-gradient-to-r from-blue-200 to-sky-200 flex flex-col items-center justify-center text-blue-900">
  <h1 className="text-4xl font-bold">8.6s</h1>
  <h3 className="text-lg font-medium mt-2">Average Load Time</h3>
</div>
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          WordPress sites -
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
              <span className="relative z-10"> load slowly</span>
          </PointerHighlight>
           on mobile, frustrating users fast.
        </div>
        <p className="mt-4 text-sm text-neutral-500">
         Slow mobile performance on WordPress drives visitors away before they even interact with your content.
        </p>
      </div>
      <div className="rounded-md p-6">
<div className="h-40 w-full rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center justify-center text-blue-900">
  <h1 className="text-4xl font-bold text-pink-800">-4.4%</h1>
  <h3 className="text-lg font-medium mt-2 text-pink-500">Conversion Loss</h3>
</div>
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">Even short delays </span>
          </PointerHighlight>
          can cause visitors to abandon instantly.
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Speed matters—laggy pages interrupt user flow and kill the chance of turning visits into action.
        </p>
      </div>


      <div className="rounded-md p-6">
       <div className="h-40 w-full rounded-lg bg-gradient-to-tr from-green-200 to-yellow-200 flex flex-col items-center justify-center text-green-900">
  <h1 className="text-4xl font-bold text-lime-800">90%</h1>
  <h3 className="text-lg font-medium text-lime-500 mt-2">Hacks</h3>
</div>

        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          Vulnerable plugins make WordPress sites 
          <PointerHighlight
            rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1"
          >
            <span className="relative z-10">easy to hack.</span>
          </PointerHighlight>
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Poorly maintained WordPress plugins open the door for threats, breaches, and complete site compromise.
        </p>
      </div>
    </div>
    </>
  );
}
