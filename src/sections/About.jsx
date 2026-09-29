import Reveal from "../components/Reveal"

function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              working products.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            I'm a Computer Science undergraduate specializing in Artificial
            Intelligence with a strong interest in full-stack development and
            Generative AI. I enjoy taking ideas from concept to deployment —
            designing interfaces, building APIs, integrating databases, and
            experimenting with AI-powered systems.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Card 1 */}
          <Reveal delay={0}>
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-lg text-violet-400">
                01
              </div>

              <h3 className="text-xl font-semibold">
                Full-Stack Development
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                Building responsive applications across the frontend, backend,
                APIs, authentication, and databases.
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.1}>
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-lg text-blue-400">
                02
              </div>

              <h3 className="text-xl font-semibold">
                Generative AI
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                Exploring LLMs, RAG, embeddings, agents, structured outputs,
                function calling, and AI-powered applications.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.2}>
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-white/[0.05]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-lg text-fuchsia-400">
                03
              </div>

              <h3 className="text-xl font-semibold">
                Problem Solving
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                Consistent problem solving through algorithm practice,
                engineering projects, debugging, and learning by building.
              </p>
            </div>
          </Reveal>

        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          <Reveal delay={0}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-2xl font-bold">365+</p>
              <p className="mt-1 text-sm text-white/40">
                Days of LeetCode
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-2xl font-bold">GenAI</p>
              <p className="mt-1 text-sm text-white/40">
                Focus Area
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-2xl font-bold">Full-Stack</p>
              <p className="mt-1 text-sm text-white/40">
                Development
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-2xl font-bold">2023</p>
              <p className="mt-1 text-sm text-white/40">
                Started B.Tech
              </p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}

export default About