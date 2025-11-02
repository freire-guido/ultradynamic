import Link from "next/link";

export default function JoinPage() {
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
            Join Us
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <div className="border-l-4 border-black/10 pl-6 py-2">
              <p className="text-black/80 font-medium mb-2">
                We are currently not hiring.
              </p>
              <p className="text-black/60">
                If you're deeply aligned with our mission and have exceptional capabilities 
                in AI systems, automation, or related fields, we encourage you to reach out 
                informally through our contact channels.
              </p>
            </div>

            {/* Application Link */}
            <div className="pt-4">
              <a
                href="https://ultradynamic.typeform.com/to/YOUR_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-black text-white hover:bg-black/90 transition-colors duration-200 text-base font-medium"
              >
                Submit Application
              </a>
            </div>
            
            <div className="pt-8">
              <p className="text-black/60 mb-6">
                We look for people who combine technical excellence with independent thinking, 
                who can operate with minimal structure while maintaining high standards, and who 
                are genuinely excited about building systems that reshape industries.
              </p>
              
              <p className="text-black/60">
                Our team works across a broad range of technical domains—from deep learning 
                and control theory to distributed systems and economic mechanisms. What unites 
                us is a shared commitment to rigor, impact, and thoughtful innovation.
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

