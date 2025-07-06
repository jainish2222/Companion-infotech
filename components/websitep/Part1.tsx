import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <div className="mx-auto flex-col  max-w-lg py-26 text-2xl font-bold tracking-tight md:text-4xl text-center">
     Launch a Blazing-Fast Website
      <PointerHighlight >
        <span className="bg-gradient-to-r from-purple-500 to-indigo-700 bg-clip-text text-transparent ">
 in 19 Days for ₹24,999
</span>
      </PointerHighlight>
      <p className="text-xl  text-muted-foreground mt-14">
      Designed to wow. Online forever. Ready in 19 days.
      </p>
      <button type="button" className="text-white mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Contact Us</button>

    </div>
  );
}
