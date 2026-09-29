import Reveal from "../components/Reveal"

function DeveloperJourney() {
  return (
    <section id="journey" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-400">
              Developer Journey
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Always{" "}
              <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                building.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
              Beyond projects, I continuously learn, solve problems, experiment
              with new technologies, and build things that challenge me.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* LeetCode */}
          <Reveal delay={0.05}>
            <a
              href="https://leetcode.com/u/Harshit3008/"
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(234,179,8,0.08)]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition duration-500 group-hover:bg-yellow-500/20" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    LeetCode
                  </p>

                  <span className="text-lg text-yellow-400/70">
                    ↗
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-bold tracking-tight">
                  365+
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Days of consistent problem solving
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />

                  <span className="text-xs font-medium text-yellow-400/80">
                    365+ Day Streak
                  </span>
                </div>

                <span className="mt-5 inline-block text-xs text-white/40 transition group-hover:text-yellow-400">
                  View LeetCode Profile →
                </span>

              </div>
            </a>
          </Reveal>

          {/* GitHub */}
          <Reveal delay={0.1}>
            <a
              href="https://github.com/Ashusf90"
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(139,92,246,0.08)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    GitHub
                  </p>

                  <span className="text-lg text-violet-400/70">
                    ↗
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-bold tracking-tight">
                  Building
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Projects, experiments & open-source work
                </p>

                <span className="mt-6 inline-block text-xs text-white/40 transition group-hover:text-violet-400">
                  View GitHub →
                </span>

              </div>
            </a>
          </Reveal>

          {/* Hackathons */}
          <Reveal delay={0.15}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(59,130,246,0.08)]">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

              <div className="relative">

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Hackathons
                </p>

                <h3 className="mt-5 text-4xl font-bold tracking-tight">
                  2026
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Building under pressure with real-world constraints
                </p>

                <span className="mt-6 inline-block text-xs text-white/40 transition group-hover:text-blue-400">
                  Keep building →
                </span>

              </div>
            </div>
          </Reveal>

          {/* GenAI */}
          <Reveal delay={0.2}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-fuchsia-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(217,70,239,0.08)]">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/20" />

              <div className="relative">

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Focus
                </p>

                <h3 className="mt-5 text-4xl font-bold tracking-tight">
                  GenAI
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  RAG, agents, LLM applications & AI systems
                </p>

                <span className="mt-6 inline-block text-xs text-white/40 transition group-hover:text-fuchsia-400">
                  Exploring AI →
                </span>

              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom Quote */}
        <Reveal delay={0.25}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-linear-to-r from-violet-500/[0.06] via-fuchsia-500/[0.04] to-blue-500/[0.06] p-8 text-center backdrop-blur-xl">

            <p className="text-lg font-medium text-white/70 sm:text-xl">
              "Consistency compounds."
            </p>

            <p className="mt-2 text-sm text-white/30">
              One problem. One project. One improvement at a time.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default DeveloperJourney