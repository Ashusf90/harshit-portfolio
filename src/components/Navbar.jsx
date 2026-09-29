import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 max-w-6xl rounded-3xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-2xl sm:px-6">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight"
          >
            Harshit
            <span className="text-violet-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm text-white/45 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition duration-300 hover:scale-105 hover:bg-white/90 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08] hover:text-white md:hidden"
          >
            {menuOpen ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-[1.5px] w-4 bg-white/70" />
                <span className="block h-[1.5px] w-4 bg-white/70" />
                <span className="block h-[1.5px] w-4 bg-white/70" />
              </span>
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 pb-2 pt-4 md:hidden">

            <div className="flex flex-col">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Let's Talk
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar