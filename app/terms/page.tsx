import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-black/60">
            <p className="text-sm text-black/40 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Agreement to Terms</h2>
              <p>
                By accessing or using the Ultradynamic Systems website, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any 
                of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on our website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not modify or copy the materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Disclaimer</h2>
              <p>
                The materials on our website are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Limitations</h2>
              <p>
                In no event shall Ultradynamic Systems or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Revisions</h2>
              <p>
                We may revise these terms of service at any time without notice. By using this website 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] mt-24 px-8">
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-lg font-semibold mb-3 tracking-tight">
                ULTRA<span className="font-light">DYNAMIC</span>
              </div>
              <p className="text-sm text-black/40 mb-4">
                ultradynamic.capital
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-black/30">
                <Link href="/privacy" className="hover:text-black/50 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-black/50 transition-colors">Terms</Link>
                <Link href="/ethos" className="hover:text-black/50 transition-colors">Ethos</Link>
                <Link href="/uds-login" className="hover:text-black/50 transition-colors">UDS Login</Link>
              </div>
            </div>
            <div className="text-sm text-black/40 leading-relaxed">
              <p className="mb-4">Building the future of intelligent systems.</p>
              <div className="text-xs text-black/30">
                © 2024 Ultradynamic Systems. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

