function ProjectCard({ project, large = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05] ${
        large ? "min-h-[420px] p-8" : "min-h-[330px] p-7"
      }`}
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

      {/* Number */}
      <div className="relative flex items-center justify-between">
        <span className="text-sm font-medium text-white/25">
          {project.number}
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/35">
          {project.featured ? "Featured" : "Project"}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-16">

        <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
          {project.subtitle}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/50 transition group-hover:text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Links */}
      <div className="relative mt-8 flex gap-3">

        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/60 transition hover:border-white/20 hover:text-white"
          >
            GitHub →
          </a>
        )}

        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/90"
          >
            Live Demo ↗
          </a>
        )}

      </div>

    </article>
  )
}

export default ProjectCard