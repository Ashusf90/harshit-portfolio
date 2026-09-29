import Reveal from "../components/Reveal"

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "AI / GenAI",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "LangChain",
      "LangGraph",
      "Agents",
      "Function Calling",
      "Structured Outputs",
      "OpenAI API",
      "Gemini API",
      "Hugging Face",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "AWS",
      "Vercel",
      "Render",
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              build with.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            Technologies I use across frontend development, backend
            engineering, databases, and Generative AI.
          </p>
        </div>

        {/* Skills */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.08}
            >
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>

                  <span className="text-xs text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/50 transition duration-300 group-hover:border-white/15 group-hover:text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills