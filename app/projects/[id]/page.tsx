import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById } from "@/lib/projects";
import AnimatedHeader from "@/components/AnimatedHeader";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  
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

      {/* Animated Header */}
      <AnimatedHeader projectName={project.name} tags={project.tags} projectId={project.id} />

      {/* Project Content */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Project Description */}
          <div className="mb-20">
            <h2 className="text-3xl font-light mb-8 text-black/80">Overview</h2>
            <p className="text-xl leading-relaxed text-black/60 mb-12">
              {project.longDescription}
            </p>
          </div>

          {/* Additional Content Sections */}
          <div className="space-y-20">
            <div>
              <h2 className="text-2xl font-light mb-6 text-black/80">Approach</h2>
              <p className="text-lg leading-relaxed text-black/60">
                Our approach combines rigorous technical execution with thoughtful consideration 
                of real-world impact. We build systems that operate autonomously, adapt intelligently, 
                and align with long-term human values.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6 text-black/80">Impact</h2>
              <p className="text-lg leading-relaxed text-black/60">
                By transforming how critical infrastructure operates, we create compounding effects 
                that reshape entire industries. Each system we build is designed to scale, adapt, 
                and improve autonomously.
              </p>
            </div>
          </div>

          {/* GitHub Links */}
          {project.githubLinks && project.githubLinks.length > 0 && (
            <div className="border-t border-black/[0.08] pt-12">
              <div className="flex flex-wrap gap-3">
                {project.githubLinks.map((url, idx) => {
                  const repoName = url.split('/').pop() || url;
                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`https://img.shields.io/github/stars${url.replace('https://github.com', '')}?style=social`}
                        alt={`GitHub stars for ${repoName}`}
                        className="h-5 opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
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
