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
            
            {/* GitHub Links */}
            {project.githubLinks && project.githubLinks.length > 0 && (
              <div className="border-t border-black/[0.08] pt-8">
                <h3 className="text-sm font-medium mb-4 text-black/70 uppercase tracking-wider">Repositories</h3>
                <div className="flex flex-wrap gap-3">
                  {project.githubLinks.map((url, idx) => {
                    const repoName = url.split('/').pop() || url;
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-2 border border-black/10 hover:border-black/30 transition-colors text-black/60 hover:text-black/80"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                        {repoName}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
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
