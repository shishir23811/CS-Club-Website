import Image from "next/image";

type EventItem = {
  title: string;
  description: string;
  image: string;
  badge?: string;
};

const EVENTS: EventItem[] = [
  {
    title: "Hack Night 2024",
    description:
      "48-hour build sprint with 120+ participants and 20+ projects shipped.",
    image: "https://placehold.co/640x360/0047AB/FFFFFF?text=Hack+Night",
    badge: "Flagship",
  },
  {
    title: "CF Ladder Challenge",
    description:
      "Monthly competitive programming grind with ladders and prizes.",
    image: "https://placehold.co/640x360/00AEEF/FFFFFF?text=CF+Ladder",
  },
  {
    title: "OSS Sprint",
    description:
      "Open-source contribution weekend with mentors and beginner-friendly issues.",
    image: "https://placehold.co/640x360/FFF200/0A0A0A?text=OSS+Sprint",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-section-1">
      <div className="mx-auto w-[min(1100px,95%)]">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-8 text-center">
          Signature Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 card-surface hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={e.image}
                  alt={e.title}
                  width={1280}
                  height={720}
                  className="w-full h-44 object-cover"
                  unoptimized
                />
                {e.badge ? (
                  <span className="absolute top-3 left-3 text-xs bg-[var(--cs-yellow)] text-[var(--cs-blue)] font-bold rounded-full px-3 py-1">
                    {e.badge}
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--cs-blue)]">{e.title}</h3>
                <p className="text-sm text-foreground/80 mt-2 leading-6">{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


