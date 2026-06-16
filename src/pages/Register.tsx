import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(136,197,37,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(136,197,37,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#88c525] rotate-45 flex items-center justify-center mx-auto mb-4 green-glow">
              <span className="-rotate-45 font-black text-black text-2xl font-display">K</span>
            </div>
            <h1 className="font-display text-4xl mb-1">JOIN THE RIDE</h1>
            <p className="text-white/50 text-sm">Create your Kawasaki account</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#88c525] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#88c525] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#88c525] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#88c525] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#88c525] transition-colors"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-white/50 cursor-pointer">
              <input type="checkbox" className="accent-[#88c525] mt-0.5" />
              <span>I agree to the <a href="#" className="text-[#88c525] hover:text-[#aef03a]">Terms of Service</a> and <a href="#" className="text-[#88c525] hover:text-[#aef03a]">Privacy Policy</a></span>
            </label>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(136,197,37,0.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#88c525] text-black font-bold py-3.5 rounded-lg uppercase tracking-wider btn-kawa"
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-white/50 text-sm">Already have an account? </span>
            <Link to="/login" className="text-[#88c525] hover:text-[#aef03a] font-semibold transition-colors">Sign in</Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link to="/" className="flex items-center justify-center gap-2 text-white/40 hover:text-[#88c525] text-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5m7-7-7 7 7 7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
