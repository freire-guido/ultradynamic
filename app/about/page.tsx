import Link from "next/link";

export default function AboutPage() {
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

      {/* Content */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-12">
            About Us
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-black/60">
            <p>
              Ultradynamic Systems is a team of highly motivated engineers, researchers, and entrepreneurs 
              working at the intersection of artificial intelligence, automation, and industrial transformation.
            </p>
            
            <p>
              We believe that intelligent systems have the power to fundamentally reshape how industries 
              operate. Our approach combines cutting-edge research with practical implementation, ensuring 
              that theoretical advances translate into real-world impact.
            </p>
            
            <p>
              Each of our projects represents a deliberate bet on a specific transformation—whether it's 
              autonomous retail operations, culturally-aware AI systems, incentive-aligned education, or 
              safety-oriented control mechanisms.
            </p>
            
            <p>
              We operate with a focus on both technical excellence and ethical considerations, building 
              systems that are not only powerful but also responsible and aligned with human values.
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

