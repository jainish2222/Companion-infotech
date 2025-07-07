import Image from "next/image";

export default function CoveredSection() {
  return (
    <section className="dark:bg-zinc-950 bg-white text-black dark:text-white py-16 w-[75%] mx-auto mb-20">
      <div className="max-w-7xl mx-auto px-14 flex flex-col-reverse space-x-10 gap-10 lg:flex-row items-center justify-between ">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            We've Got You Covered If <span className="dark:text-indigo-300 text-indigo-600 ">You're…</span>
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg mt-1">✔</span>
              <div>
                <p className="font-semibold text-lg">Non-tech founders</p>
                <p className="dark:text-neutral-300 text-neutral-800">
                  who need a launch-ready product without the tech headaches.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg mt-1">✔</span>
              <div>
                <p className="font-semibold text-lg">Pre-seed startups</p>
                <p className="dark:text-neutral-300 text-neutral-800">
                  looking to validate their big idea quickly.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-lg mt-1">✔</span>
              <div>
                <p className="font-semibold text-lg">Builders</p>
                <p className="dark:text-neutral-300 text-neutral-800">
                  burned by flasy infoteches
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Illustration Placeholder */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className=" max-w-md">
            {/* Replace this with your black-and-white SVG */}
            <Image
              src="/img/worktogather.svg"
              alt="Founders Illustration"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
