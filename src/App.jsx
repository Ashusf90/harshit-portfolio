import Navbar from "./components/Navbar"
import profileImage from "./assets/profile.png"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import DeveloperJourney from "./sections/DeveloperJourney"
import Certifications from "./sections/Certifications"
import Education from "./sections/Education"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      <Navbar />

      {/* ================= HERO ================= */}
      <main
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
      >

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/[0.06] blur-[130px]" />

        {/* Hero Container */}
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl">

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </div>

            {/* Role */}
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-violet-400 sm:text-sm">
              Full-Stack Developer · GenAI
            </p>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building at the{" "}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                intersection
              </span>{" "}
              of AI and the web.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              I'm Harshit Gupta, a Full-Stack Developer focused on building
              modern web applications, AI-powered products, and scalable
              backend systems.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#projects"
                className="rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-7 py-3.5 text-center text-sm font-semibold transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-center text-sm font-semibold text-white/80 backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.06] hover:text-white"
              >
                Get In Touch
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-5 text-sm text-white/35">

              <a
                href="https://github.com/Ashusf90"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <span className="h-4 w-px bg-white/10" />

              <a
                href="https://www.linkedin.com/in/harshit-gupta-a4045329a"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

          {/* ================= RIGHT PROFILE IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">

            {/* Large Glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-linear-to-br from-violet-600/20 via-fuchsia-500/10 to-blue-500/20 blur-3xl" />

            {/* Decorative Ring */}
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-violet-400/20 lg:block" />

            <div className="absolute -bottom-6 -left-6 hidden h-20 w-20 rounded-full border border-blue-400/20 lg:block" />

            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-xl">

              {/* Shorter Image Container */}
              <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#080808] sm:h-[400px] lg:h-[440px]">

                <img
                  src={profileImage}
                  alt="Harshit Gupta"
className="h-full w-full object-cover object-top transition duration-700 hover:scale-[1.02]"                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

              </div>

            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">

              <p className="text-xs text-white/35">
                Focus
              </p>

              <p className="mt-1 text-sm font-medium text-white/80">
                AI × Full-Stack
              </p>

            </div>

          </div>

        </div>
      </main>

      {/* ================= SECTIONS ================= */}

      <About />

      <Skills />

      <Projects />

      <Experience />

      <DeveloperJourney />

      <Certifications />

      <Education />

      <Contact />

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-sm text-white/30">
            © 2026 Harshit Gupta. Built with React & Tailwind CSS.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-white/30">
  <a
    href="https://github.com/Ashusf90"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-white"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/harshit-gupta-a4045329a"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-white"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/Harshit3008/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-white"
  >
    LeetCode
  </a>

  <a
    href="#home"
    className="transition hover:text-white"
  >
    Back to top ↑
  </a>
</div>
        </div>

      </footer>

    </div>
  )
}

export default App