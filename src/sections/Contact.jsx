function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl sm:px-12 sm:py-24">

          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="relative">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Let's Build Something
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Have an idea?
              <br />
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Let's make it real.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              I'm always interested in building meaningful products,
              exploring new technologies, and connecting with people working
              on interesting ideas.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="mailto:ashustradale@gmail.com"
                className="rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-7 py-3.5 text-sm font-semibold transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
              >
                Email Me →
              </a>

              <a
                href="https://www.linkedin.com/in/harshit-gupta-a4045329a"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/70 backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.06] hover:text-white"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <a
            href="mailto:ashustradale@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Email
            </p>

            <p className="mt-3 text-sm text-white/60">
              ashustradale@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Ashusf90"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              GitHub
            </p>

            <p className="mt-3 text-sm text-white/60">
              github.com/Ashusf90
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/harshit-gupta-a4045329a"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              LinkedIn
            </p>

            <p className="mt-3 text-sm text-white/60">
              Connect with me
            </p>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact