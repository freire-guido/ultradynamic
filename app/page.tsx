import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-black/[0.08] bg-white/70 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity">
            ULTRA<span className="font-light">DYNAMIC</span>
          </Link>
          <div className="flex gap-6 text-sm text-black/50">
            <a href="#projects" className="hover:text-black/80 transition-colors duration-200">
              Projects
            </a>
            <Link href="/about" className="hover:text-black/80 transition-colors duration-200">
              About
            </Link>
            <Link href="/join" className="hover:text-black/80 transition-colors duration-200">
              Join
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-10 leading-[1.05]">
            Transforming industries through intelligent automation
          </h1>
          <p className="text-lg md:text-xl text-black/50 max-w-2xl leading-relaxed">
            Ultradynamic Systems is an umbrella company building cutting-edge solutions 
            across logistics, AI evaluation, education, and AI safety.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-20 text-black/70 tracking-tight">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                href={`/projects/${project.id}`}
                className="border border-black/[0.08] p-10 hover:border-black/[0.12] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-2xl font-medium mb-5 text-black/90 group-hover:text-black transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-black/50 mb-8 leading-relaxed text-[15px]">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 bg-black/[0.04] text-black/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] mt-24 px-8">
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-lg font-semibold mb-3 tracking-tight">
                ULTRA<span className="font-light">DYNAMIC</span>
              </div>
              <p className="text-sm text-black/40">
                ultradynamic.capital
              </p>
            </div>
            <div className="text-sm text-black/40 leading-relaxed">
              <p>Building the future of intelligent systems.</p>
            </div>
          </div>
          <div className="pt-8 border-t border-black/[0.08] text-xs text-black/30">
            © {new Date().getFullYear()} Ultradynamic Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

