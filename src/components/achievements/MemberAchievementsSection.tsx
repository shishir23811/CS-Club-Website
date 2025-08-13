type MemberAchievement = {
  name: string;
  achievement: string;
};

const MEMBERS: MemberAchievement[] = [
  { name: "Aarav Patel", achievement: "Google Summer of Code 2024" },
  { name: "Priya Sharma", achievement: "ICPC Regionalist" },
  { name: "Rohan Mehta", achievement: "Top 100 India - Codeforces" },
  { name: "Diya Nair", achievement: "ML Research Intern @ XYZ" },
];

export default function MemberAchievementsSection() {
  return (
    <section className="py-16 bg-section-2">
      <div className="mx-auto w-[min(1100px,95%)]">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-8 text-center">
          Member Highlights
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {MEMBERS.map((m) => (
            <li
              key={m.name}
              className="rounded-xl px-5 py-4 border border-black/10 dark:border-white/10 card-surface flex items-center justify-between"
            >
              <span className="font-semibold">{m.name}</span>
              <span className="text-sm text-foreground/80">{m.achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


