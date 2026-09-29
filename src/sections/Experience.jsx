import Reveal from "../components/Reveal"

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where I've{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              worked.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            Hands-on experience building web applications, backend systems,
            and practical software solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px bg-linear-to-b from-violet-500/60 via-blue-500/30 to-transparent md:block" />

          {/* Oasis Infobyte */}
          <div className="relative mb-8 md:pl-14">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-10 hidden h-4 w-4 rounded-full border-4 border-[#050505] bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)] md:block" />

            <Reveal delay={0}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05] sm:p-10">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

                <div className="relative">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                        Web Development Intern
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                        Oasis Infobyte
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/40">
                      Internship
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50">
                    Worked on full-stack web development tasks involving
                    authentication, authorization, CRUD functionality, database
                    integration, responsive interfaces, testing, troubleshooting,
                    and debugging.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm font-medium text-white/80">
                        Web Development
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        Built and worked on responsive web interfaces with
                        frontend and backend integration.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm font-medium text-white/80">
                        Backend & APIs
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        Worked with authentication, authorization, CRUD
                        operations, and database-connected applications.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm font-medium text-white/80">
                        Testing
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        Tested application functionality and worked through
                        implementation issues.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm font-medium text-white/80">
                        Debugging
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        Troubleshot bugs and improved application reliability
                        during development.
                      </p>
                    </div>

                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "Authentication",
                      "CRUD",
                      "Database",
                      "REST APIs",
                      "Testing",
                      "Debugging",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            </Reveal>

          </div>

          {/* CodSoft */}
          <div className="relative md:pl-14">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-10 hidden h-4 w-4 rounded-full border-4 border-[#050505] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)] md:block" />

            <Reveal delay={0.15}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05] sm:p-10">

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl transition duration-500 group-hover:bg-blue-600/20" />

                <div className="relative">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                        Python Developer Intern
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                        CodSoft
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/40">
                      Internship
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50">
                    Gained practical experience in Python development through
                    hands-on programming tasks and application development,
                    strengthening problem-solving and debugging skills.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Problem Solving",
                      "Debugging",
                      "Development",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience