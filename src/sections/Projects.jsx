import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Reveal from "../components/Reveal"

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've{" "}
            <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            A collection of projects exploring full-stack engineering,
            Generative AI, distributed systems, and modern product design.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard
                project={project}
                large={index < 2}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/30">
              More Projects
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects