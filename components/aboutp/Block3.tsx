import Image from "next/image";

const testimonials = [
  {
    name: "Jainish Koladiya",
    role: "Full stack developer and DevOps engineer",
    image: "/img/user1.jpg",
    alt: "Portrait of Jainish Koladiya",
    quote:
      "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
  },
  {
    name: "Mayank Zalavadiya",
    role: "App developer",
    image: "/img/user2.jpg",
    alt: "Portrait of Mayank Zalavadiya",
    quote:
      "Assist with backend development and styling aspects of the P-show project.",
  },
  {
    name: "Uttam Kheni",
    role: "Shopify developer",
    image: "/img/user3.png",
    alt: "Portrait of Uttam Kheni",
    quote:
      "Handle content writing and design contributions for the P-show project.",
  },
  {
    name: "Parth Kanani",
    role: "iOS developer and good problem-solver",
    image: "/img/user4.jpg",
    alt: "Portrait of Parth Kanani",
    quote:
      "Contribute to the functionality, problem-solving and management for the P-show project.",
  },
];


export default function TeamGrid() {
  return (
    <section
      className="bg-white dark:bg-zinc-950 py-16 px-6 sm:px-10 lg:px-20"
      aria-labelledby="team-heading"
    >
      <h2
        id="team-heading"
        className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12"
      >
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-6">
        {testimonials.map((member, idx) => (
          <article
            key={idx}
            className="bg-zinc-100 dark:bg-zinc-900 rounded-xl shadow-lg p-6 text-center transition hover:scale-[1.02] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
           tabIndex={0}
            aria-label={`${member.name}, ${member.role}`}
          >
            <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-700">
              <Image
                src={member.image}
                alt={member.alt}
                width={128}
                height={128}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
              {member.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
