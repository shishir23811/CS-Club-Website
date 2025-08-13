"use client";

import AchievementsHero from "@/components/achievements/AchievementsHero";
import Stats from "@/components/achievements/Stats";
import EventsSection from "@/components/achievements/EventsSection";
import MemberAchievementsSection from "@/components/achievements/MemberAchievementsSection";
import LookingAheadSection from "@/components/achievements/LookingAheadSection";

export default function AchievementsPage() {
  return (
    <main className="pt-6">
      <AchievementsHero />
      <Stats />
      <EventsSection />
      <MemberAchievementsSection />
      <LookingAheadSection />
    </main>
  );
}


