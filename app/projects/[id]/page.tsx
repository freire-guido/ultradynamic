import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById } from "@/lib/projects";
import ProjectSVG from "@/components/ProjectSVG";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-black/[0.08] bg-white/70 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity">
            ULTRA<span className="font-light">DYNAMIC</span>
          </Link>
          <div className="flex gap-6 text-sm text-black/50">
            <Link href="/#projects" className="hover:text-black/80 transition-colors duration-200">
              Projects
            </Link>
            <Link href="/about" className="hover:text-black/80 transition-colors duration-200">
              About
            </Link>
            <Link href="/join" className="hover:text-black/80 transition-colors duration-200">
              Join
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black/80 transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs uppercase tracking-wider px-4 py-2 bg-black/[0.04] text-black/50 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Graphic */}
          <div className="mb-20 border border-black/[0.08] p-16 bg-black/[0.01]">
            <ProjectSVG projectId={project.id} className="w-full h-auto text-black/60" />
          </div>

          {/* Project Description */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-light mb-6 text-black/80">Overview</h2>
            <p className="text-lg leading-relaxed text-black/60 mb-8">
              {project.longDescription}
            </p>
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

