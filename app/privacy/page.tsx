import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-black/60">
            <p className="text-sm text-black/40 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Introduction</h2>
              <p>
                Ultradynamic Systems ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Information We Collect</h2>
              <p>
                We may collect information that you provide directly to us, including but not limited to 
                your name, email address, and any other information you choose to provide when contacting us 
                or using our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to 
                communicate with you, and to comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except as described in this policy or with your consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-black/80 mt-12">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us.
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

