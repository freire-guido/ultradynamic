import Link from "next/link";

export default function PartnerLoginPage() {
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
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-12">
            Partner Login
          </h1>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-black/[0.08] bg-white text-black focus:outline-none focus:border-black/20 transition-colors"
                placeholder="partner@ultradynamic.capital"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black/70 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 border border-black/[0.08] bg-white text-black focus:outline-none focus:border-black/20 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button className="w-full px-8 py-4 bg-black text-white hover:bg-black/90 transition-colors duration-200 text-base font-medium">
              Sign In
            </button>
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

