type Stat = {
  label: string;
  value: string;
};

const DEFAULT_STATS: Stat[] = [
  { label: "Events hosted", value: "25+" },
  { label: "Participations", value: "1.2k+" },
  { label: "Wings", value: "5" },
  { label: "Hackathon wins", value: "12" },
];

export default function Stats({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="py-10 bg-section-2">
      <div className="mx-auto w-[min(1100px,95%)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-6 border border-black/10 dark:border-white/10 card-surface text-center"
            >
              <div className="text-3xl font-extrabold text-[var(--cs-blue)]">{s.value}</div>
              <div className="text-sm text-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


