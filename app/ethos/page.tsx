import Link from "next/link";

export default function EthosPage() {
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
            Ethos
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-black/60">
            <p>
              At Ultradynamic Systems, our work is guided by a set of core principles that shape how 
              we approach problems, build systems, and interact with the world.
            </p>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Technical Rigor</h2>
              <p>
                We believe in the power of careful thought and rigorous execution. Every system we build 
                is grounded in solid engineering principles and informed by the latest research. We value 
                depth over breadth, and substance over spectacle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Autonomous Operation</h2>
              <p>
                We build systems that operate independently and adapt to changing conditions. Rather than 
                requiring constant human intervention, our systems learn, optimize, and improve on their own. 
                This autonomy amplifies human capability rather than replacing it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Long-term Thinking</h2>
              <p>
                We focus on creating compounding effects that build over time. Short-term optimizations 
                give way to fundamental improvements that reshape entire domains. We think in decades, not quarters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Ethical Alignment</h2>
              <p>
                Every system we build is designed with human values at its core. We consider not just 
                what is possible, but what is responsible. Safety, fairness, and alignment with human 
                flourishing are not afterthoughts—they are fundamental constraints.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Independent Judgment</h2>
              <p>
                We maintain the freedom to pursue directions that others might overlook or dismiss. 
                Conventional wisdom is a starting point, not a destination. We trust our judgment and 
                are willing to take calculated risks on unproven approaches.
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
          <div className="pt-8 border-t border-black/[0.08] flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-black/30">
              <Link href="/privacy" className="hover:text-black/50 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-black/50 transition-colors">Terms</Link>
              <Link href="/ethos" className="hover:text-black/50 transition-colors">Ethos</Link>
              <Link href="/uds-login" className="hover:text-black/50 transition-colors">UDS Login</Link>
            </div>
            <div className="text-xs text-black/30">
              © 2024 Ultradynamic Systems. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

