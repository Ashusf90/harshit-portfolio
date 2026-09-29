import Reveal from "../components/Reveal"

function Education() {
  return (
    <section
      id="education"
      className="relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The foundation{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              behind the code.
            </span>
          </h2>
        </div>

        {/* Education Card */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:border-blue-500/30 hover:bg-white/[0.05] sm:p-10">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl transition duration-500 group-hover:bg-blue-600/20" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">

              {/* Education Details */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                  B.Tech · 2023 — Present
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Bachelor of Technology
                </h3>

                <p className="mt-2 text-base text-white/50">
                  Computer Science & Engineering · Artificial Intelligence
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                  Building a strong foundation in computer science, software
                  engineering, algorithms, artificial intelligence, and modern
                  application development.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Artificial Intelligence",
                    "Data Structures",
                    "Software Development",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/45"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CGPA */}
              <div className="w-fit rounded-2xl border border-white/10 bg-black/20 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/25">
                  CGPA
                </p>

                <p className="mt-2 bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                  7.5
                </p>
              </div>

            </div>
          </article>
        </Reveal>

      </div>
    </section>
  )
}

export default Education