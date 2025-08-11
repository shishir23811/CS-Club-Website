export default function LeaderboardPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen bg-white dark:bg-black">
      <div className="mx-auto w-[min(1100px,95%)]">
        <h1 className="text-4xl font-extrabold text-[var(--cs-blue)] mb-8 text-center">Leaderboards</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Competitive Programming Rankings" },
            { title: "Open Source Contributions" },
          ].map((b) => (
            <section
              key={b.title}
              className="rounded-xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur"
            >
              <h2 className="text-2xl font-bold text-[var(--cs-blue)] text-center">{b.title}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[1, 2, 3, 4, 5].map((rank) => (
                  <li
                    key={rank}
                    className="flex items-center justify-between rounded-lg px-4 py-2 border border-black/5 dark:border-white/10"
                  >
                    <span className="font-semibold">Member {rank}</span>
                    <span className="text-[var(--cs-cyan)] font-bold">{2000 - rank * 10}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}


