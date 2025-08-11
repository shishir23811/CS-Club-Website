"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Squares from "@/components/Squares";

const NAV_LINKS = [
  { href: "#about", label: "Team" },
  { href: "#events", label: "Events" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      html.classList.add("dark");
      setDark(true);
    }
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const threshold = hero.offsetHeight * 0.7;
      setShowNavLinks(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed top-3 inset-x-0 z-50">
        <div className="relative w-full">
        <nav className="relative mx-auto w-[min(1100px,95%)] backdrop-blur-xl bg-transparent border border-white/40 dark:border-white/10 rounded-full shadow-md px-4 sm:px-6 py-2 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2">
            <Image
              src="/assets/club.png"
              alt="CS Club Logo"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          </Link>

          {/* Centered nav links that fade in after hero */}
          <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 hidden md:flex items-center">
            <ul
              className={`flex items-center gap-10 transition-opacity duration-500 ${
                showNavLinks ? "opacity-100" : "opacity-0"
              }`}
            >
              {NAV_LINKS.map((l) => (
                <li key={l.label} className="text-center">
                  <Link
                    href={l.href}
                    className="text-base md:text-lg font-semibold text-foreground/80 hover:text-[var(--cs-cyan)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>

          <Image
            src="/assets/col.png"
            alt="IIITDMK Logo"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </nav>
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-sm hover:bg-white/90 dark:hover:bg-black/60"
        >
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M20 12h-2M6 12H4M17.657 17.657l-1.414-1.414M7.757 7.757L6.343 6.343m12.728 0l-1.414 1.414M7.757 16.243l-1.414 1.414" />
            </svg>
          )}
        </button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor={dark ? "#ffffff22" : "#0f172a33"}
            hoverFillColor={dark ? "#ffffff18" : "#11182714"}
          />
        </div>
        <div className="mx-auto w-[min(1100px,95%)] p-0 relative z-10">
          {/* Fixed social buttons cluster */}
          <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-20">
            <a className="hero-social" href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M19.633 7.997c.013.18.013.36.013.54 0 5.5-4.186 11.842-11.842 11.842-2.353 0-4.532-.69-6.37-1.883.33.038.648.051.992.051a8.38 8.38 0 0 0 5.2-1.79 4.19 4.19 0 0 1-3.91-2.9c.256.038.512.064.781.064.371 0 .742-.051 1.087-.141A4.18 4.18 0 0 1 2.83 9.31v-.051c.69.384 1.49.619 2.338.645A4.17 4.17 0 0 1 2.93 6.62c0-.774.205-1.49.564-2.115a11.88 11.88 0 0 0 8.62 4.376 4.719 4.719 0 0 1-.103-.958 4.18 4.18 0 0 1 7.237-2.861 8.235 8.235 0 0 0 2.652-1.01 4.197 4.197 0 0 1-1.84 2.307 8.36 8.36 0 0 0 2.408-.65 9.082 9.082 0 0 1-2.035 2.104z"/></svg>
            </a>
            <a className="hero-social" href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.67 0 3 1.33 3 3v10c0 1.67-1.33 3-3 3H7c-1.67 0-3-1.33-3-3V7c0-1.67 1.33-3 3-3zm5 2.5A5.5 5.5 0 0011.5 20 5.5 5.5 0 0017 14.5 5.5 5.5 0 0012 6.5zm6-1a1 1 0 110 2 1 1 0 010-2z"/></svg>
            </a>
            <a className="hero-social" href="#" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.87 3.16 9 7.54 10.45.55.1.76-.24.76-.54v-1.93c-3.06.67-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.12.08 1.7 1.15 1.7 1.15.98 1.68 2.58 1.2 3.21.91.1-.71.39-1.2.7-1.47-2.45-.28-5.01-1.23-5.01-5.46 0-1.2.43-2.18 1.14-2.95-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.1 1.13.9-.25 1.86-.38 2.82-.38.96 0 1.93.13 2.83.38 2.14-1.43 3.08-1.13 3.08-1.13.62 1.56.23 2.72.12 3 .71.77 1.13 1.75 1.13 2.95 0 4.24-2.57 5.17-5.02 5.44.4.34.76 1 .76 2.02v2.99c0 .31.2.65.77.54A10.994 10.994 0 0023.1 11.6C23.1 5.33 18.27.5 12 .5z"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 items-center justify-items-center gap-10">
            <div className="space-y-6 max-w-2xl text-center mx-auto">
              <h1 className="animated-gradient-text text-5xl md:text-6xl lg:text-7xl font-extrabold">
                CS Club @ IIITDM Kancheepuram
              </h1>
              <div className="flex justify-center gap-4">
                <a href="#events" className="btn btn-primary px-6 py-3 text-base">
                  Explore Events
                </a>
                <a href="#about" className="btn btn-yellow px-6 py-3 text-base">
                  View Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 min-h-[90vh] bg-section-2">
        <div className="mx-auto w-[min(1100px,95%)] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-4 text-center">About Us</h2>
            <p className="text-foreground/80 leading-7">
              We are a student-driven community fostering programming excellence,
              research, and collaboration. From competitive programming to AI and
              hands-on hardware, we learn by doing and grow together.
            </p>
          </div>
          <div className="justify-self-end">
            <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 card-surface w-full max-w-md">
              <Image src="/assets/club.png" alt="CS Club Logo" width={640} height={400} className="object-contain bg-white dark:bg-black p-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Wings */}
      <section id="wings" className="py-20 min-h-[90vh] bg-section-1">
        <div className="mx-auto w-[min(1100px,95%)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-10 text-center">Our Wings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                { title: "AI", desc: "Exploring ML/AI through projects and papers." },
                { title: "PRIT", desc: "Projects, research and innovation initiatives." },
                { title: "CP", desc: "Sharpening problem-solving for contests." },
                { title: "EdITH", desc: "Workshops on software, hardware and tools." },
                { title: "Networking", desc: "Connecting peers and industry mentors." },
              ].map((w, idx) => {
                const isYellow = idx % 2 === 0; // 0,2,4 -> yellow; 1,3 -> blue
                const base =
                  "rounded-xl p-7 sm:p-8 min-h-[220px] h-full transition-all hover:-translate-y-0.5 hover:shadow-xl text-center";
                const color = isYellow
                  ? "bg-[var(--cs-yellow)] text-[var(--cs-blue)]"
                  : "bg-[var(--cs-blue)] text-white";
                let positionLg = "lg:col-span-2";
                if (idx === 3) positionLg += " lg:col-start-2 lg:row-start-2";
                if (idx === 4) positionLg += " lg:col-start-4 lg:row-start-2";
                return (
                  <div key={w.title} className={`${base} ${color} ${positionLg}`}>
                    <h3 className="text-xl font-bold">{w.title}</h3>
                    <p className="text-base mt-3 opacity-90 leading-6">{w.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 min-h-[90vh] bg-section-2">
        <div className="mx-auto w-[min(1100px,95%)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-10 text-center">Events</h2>

          {/* Small carousel card component */}
          {/* Using placeholder images; replace with real event thumbnails later */}
          <div className="grid md:grid-cols-2 gap-6">
            {(() => {
              type EventPreview = { title: string; date: string; img: string };

              const past: EventPreview[] = [
                { title: "Intro to CP", date: "Jan 2025", img: "https://placehold.co/640x360/0047AB/FFFFFF?text=Past+1" },
                { title: "Git & OSS", date: "Feb 2025", img: "https://placehold.co/640x360/00AEEF/FFFFFF?text=Past+2" },
                { title: "AI Workshop", date: "Mar 2025", img: "https://placehold.co/640x360/0047AB/FFFFFF?text=Past+3" },
              ];
              const upcoming: EventPreview[] = [
                { title: "Hack Night", date: "Sep 2025", img: "https://placehold.co/640x360/FFF200/0A0A0A?text=Upcoming+1" },
                { title: "CF Ladder", date: "Oct 2025", img: "https://placehold.co/640x360/00AEEF/FFFFFF?text=Upcoming+2" },
                { title: "OSS Sprint", date: "Nov 2025", img: "https://placehold.co/640x360/FFF200/0A0A0A?text=Upcoming+3" },
              ];

              const EventCarouselCard = ({
                title,
                previews,
                ringClass,
                cta,
              }: {
                title: string;
                previews: EventPreview[];
                ringClass: string;
                cta: string;
              }) => {
                const [index, setIndex] = useState(0);
                const onPrev = () => setIndex((p) => (p - 1 + previews.length) % previews.length);
                const onNext = () => setIndex((p) => (p + 1) % previews.length);
                const current = previews[index];
                return (
                  <div
                    className={`relative rounded-2xl p-0 border border-black/10 dark:border-white/10 card-surface backdrop-blur transition-all hover:shadow-xl hover:ring-4 ${ringClass}`}
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[var(--cs-blue)] text-center">{title}</h3>
                      <p className="mt-2 text-foreground/80 text-center">Swipe through a quick preview.</p>
                    </div>
                    <div className="relative">
                      <Image src={current.img} alt={current.title} width={1280} height={720} className="w-full h-56 object-cover" unoptimized />
                      <div className="absolute inset-0 flex items-center justify-between px-2">
                        <button aria-label="Previous" onClick={onPrev} className="rounded-full bg-black/40 text-white p-2 hover:bg-black/60 dark:bg-white/20 dark:hover:bg-white/30">◀</button>
                        <button aria-label="Next" onClick={onNext} className="rounded-full bg-black/40 text-white p-2 hover:bg-black/60 dark:bg-white/20 dark:hover:bg-white/30">▶</button>
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {current.title} • {current.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <a href="#" className="btn btn-primary w-full justify-center">{cta}</a>
                    </div>
                  </div>
                );
              };

              return [
                <EventCarouselCard
                  key="past"
                  title="Past Events"
                  previews={past}
                  ringClass="ring-brand-hover"
                  cta="All past events"
                />,
                <EventCarouselCard
                  key="upcoming"
                  title="Upcoming Events"
                  previews={upcoming}
                  ringClass="ring-brand-yellow-hover"
                  cta="All upcoming events"
                />,
              ];
            })()}
          </div>
        </div>
      </section>

      {/* Leaderboard CTA */}
      <section id="leaderboard" className="py-20 min-h-[90vh] bg-section-1">
        <div className="mx-auto w-[min(1100px,95%)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--cs-blue)] mb-10 text-center">Leaderboard</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[
              { title: "Competitive Programming Rankings", items: ["Aarav Patel", "Priya Sharma", "Rohan Mehta"] },
              { title: "Open Source Contributions", items: ["Diya Nair", "Karthik Rao", "Isha Verma"] },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl p-6 border border-black/10 dark:border-white/10 card-surface flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--cs-blue)] text-center">{card.title}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {card.items.map((name, i) => (
                    <li key={name} className="flex items-center justify-between rounded-lg px-4 py-2 border border-black/5 dark:border-white/10">
                      <span className="font-semibold">{i + 1}. {name}</span>
                      <span className="text-[var(--cs-cyan)] font-bold">{2100 - i * 20}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/leaderboard" className="btn btn-primary">View full leaderboards</Link>
          </div>
        </div>
      </section>

      {/* Achievements placeholder */}
      <section id="achievements" className="py-16 min-h-[90vh] bg-section-2">
        <div className="mx-auto w-[min(1100px,95%)]">
          <h2 className="text-3xl font-bold text-[var(--cs-blue)] text-center">Achievements</h2>
          <p className="mt-3 text-foreground/70">Coming soon.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12">
        <div className="mx-auto w-[min(1100px,95%)]">
          <p className="text-sm text-center">© {new Date().getFullYear()} CS Club IIITDM Kancheepuram</p>
        </div>
      </footer>
    </div>
  );
}
