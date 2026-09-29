import Reveal from "../components/Reveal"

import deloitteCyber from "../assets/certificates/deloitte-cyber.pdf"
import deloitteTechnology from "../assets/certificates/deloitte-technology.pdf"
import gfgFullStack from "../assets/certificates/Full Stack Development Certificate.pdf"
import hackerRankCSS from "../assets/certificates/HackerRank CSS certificate.pdf"
import hackerRankPython from "../assets/certificates/HackerRank Python Certificate.pdf"
import hackerRankSQL from "../assets/certificates/HackerRank SQL certificate.pdf"
import hpAI from "../assets/certificates/HP life AI certificate.pdf"
import hpCybersecurity from "../assets/certificates/HP Life Cybersecurity Awareness certificate.pdf"
import jpmorganSoftware from "../assets/certificates/jpmorgan-software-engineering.pdf"
import letsUpgradeJava from "../assets/certificates/JAVA certificate.pdf"
import letsUpgradeJavaScript from "../assets/certificates/JAVASCRIPT certificate.pdf"
import upgradJavaOOP from "../assets/certificates/upGrad OOPs in JAVA Certificate.pdf"

const certifications = [
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Deloitte",
    description:
      "Practical technology and coding tasks completed through Deloitte's job simulation.",
    year: "2025",
    file: deloitteTechnology,
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    description:
      "Hands-on simulation covering project setup, Kafka integration, H2 integration, and REST API integration.",
    year: "2025",
    file: jpmorganSoftware,
  },
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    description:
      "Six-week Full Stack Developer Bootcamp covering frontend and backend development.",
    year: "2025",
    file: gfgFullStack,
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    description:
      "Introduction to AI concepts, impact, data, business applications, and responsible AI.",
    year: "2025",
    file: hpAI,
  },
  {
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE",
    description:
      "Foundational cybersecurity awareness and security concepts.",
    year: "2025",
    file: hpCybersecurity,
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    description:
      "Practical cybersecurity tasks completed through Deloitte's job simulation.",
    year: "2025",
    file: deloitteCyber,
  },
  {
    title: "Python Basic",
    issuer: "HackerRank",
    description:
      "HackerRank certification demonstrating foundational Python programming skills.",
    year: "2025",
    file: hackerRankPython,
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    description:
      "HackerRank certification covering foundational SQL concepts.",
    year: "2025",
    file: hackerRankSQL,
  },
  {
    title: "CSS Basic",
    issuer: "HackerRank",
    description:
      "HackerRank certification demonstrating foundational CSS knowledge.",
    year: "2025",
    file: hackerRankCSS,
  },
  {
    title: "Java Bootcamp",
    issuer: "LetsUpgrade",
    description:
      "Java programming bootcamp certification.",
    year: "2025",
    file: letsUpgradeJava,
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "LetsUpgrade",
    description:
      "JavaScript programming bootcamp certification.",
    year: "2025",
    file: letsUpgradeJavaScript,
  },
  {
    title: "Object-Oriented Principles in Java",
    issuer: "upGrad",
    description:
      "Course covering abstraction, encapsulation, inheritance, and polymorphism.",
    year: "2025",
    file: upgradJavaOOP,
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Certifications
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learning that{" "}
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              compounds.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            Certifications and practical learning experiences that have
            strengthened my foundation across software development, AI,
            cybersecurity, and programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal
              key={`${certification.title}-${certification.issuer}`}
              delay={index * 0.05}
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-violet-400">
                      ✓
                    </div>

                    <span className="text-xs text-white/25">
                      {certification.year}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.15em] text-violet-400/80">
                    {certification.issuer}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-7 text-white/90">
                    {certification.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {certification.description}
                  </p>

                  {/* View Certificate */}
                  <a
                    href={certification.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white/60 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    View Certificate
                    <span className="text-violet-400">↗</span>
                  </a>

                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications