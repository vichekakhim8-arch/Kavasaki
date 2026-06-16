import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const links = ["Bikes", "Performance", "Racing", "Gallery", "Dealers"];

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) setLoginOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md border-b border-lime-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#88c525] rotate-45 flex items-center justify-center green-glow">
              <span className="-rotate-45 font-black text-black text-xl font-display">K</span>
            </div>
            <span className="font-display text-2xl tracking-widest">KAWASAKI</span>
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -2, color: "#88c525" }}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-[#88c525] transition-colors"
            >
              {l}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 30 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="hidden md:flex w-9 h-9 rounded-full border border-white/20 items-center justify-center text-sm hover:border-[#88c525] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#88c525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#88c525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </motion.button>

          <div className="relative" ref={loginRef}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLoginOpen(!loginOpen)}
              className="hidden md:flex w-9 h-9 rounded-full border border-white/20 items-center justify-center hover:border-[#88c525] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#88c525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </motion.button>
            <AnimatePresence>
              {loginOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-48 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                >
                  <div className="p-4 border-b border-white/10">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Welcome</p>
                    <Link to="/login">
                      <motion.button
                        whileHover={{ backgroundColor: "#88c525", color: "#000" }}
                        className="w-full bg-[#88c525] text-black font-bold py-2.5 rounded-sm uppercase text-sm tracking-wider btn-kawa"
                      >
                        Sign In
                      </motion.button>
                    </Link>
                  </div>
                  <div className="p-4 space-y-2">
                    <Link to="/register" className="block text-sm text-white/70 hover:text-[#88c525] transition-colors">Create Account</Link>
                    <a href="#" className="block text-sm text-white/70 hover:text-[#88c525] transition-colors">My Garage</a>
                    <a href="#" className="block text-sm text-white/70 hover:text-[#88c525] transition-colors">Test Ride History</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-[#88c525] text-black font-bold px-5 py-2.5 rounded-sm uppercase text-sm tracking-wider btn-kawa"
          >
            Book Test Ride
          </motion.button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <div className="w-7 h-0.5 bg-white mb-1.5"></div>
          <div className="w-7 h-0.5 bg-white mb-1.5"></div>
          <div className="w-5 h-0.5 bg-[#88c525]"></div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 border-t border-lime-500/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block py-2 uppercase text-sm tracking-widest">
                  {l}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <Link to="/login" className="block py-2 text-sm text-[#88c525] font-bold tracking-wider">Sign In</Link>
              <Link to="/register" className="block py-2 text-sm text-white/70 tracking-wider">Create Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
