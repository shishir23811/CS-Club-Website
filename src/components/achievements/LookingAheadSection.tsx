export default function LookingAheadSection() {
  return (
    <section className="py-20 bg-section-1">
      <div className="mx-auto w-[min(1100px,95%)] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)]">Looking Ahead</h2>
        <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
          We're gearing up for more collaborations, research sprints, and
          community-driven learning. Join us and be part of the journey.
        </p>
        <a href="/leaderboard" className="btn btn-primary mt-6 inline-flex">Explore Leaderboards</a>
      </div>
    </section>
  );
}


