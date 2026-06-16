import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#88c525] rotate-45 flex items-center justify-center">
                <span className="-rotate-45 font-black text-black text-xl font-display">K</span>
              </div>
              <span className="font-display text-2xl tracking-widest">KAWASAKI</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Let the good times roll. Since 1966.
            </p>
          </div>
          {[
            { t: "Models", l: ["Ninja Series", "Z Series", "Versys", "Vulcan", "Off-Road"] },
            { t: "Company", l: ["About", "Racing", "Heritage", "Careers", "Press"] },
            { t: "Support", l: ["Dealers", "Service", "Parts", "Warranty", "Contact"] },
          ].map((col) => (
            <div key={col.t}>
              <h4 className="font-display text-xl mb-4 text-[#88c525]">{col.t}</h4>
              <ul className="space-y-2">
                {col.l.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-[#aef03a] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs uppercase tracking-widest">
            © 2026 Kawasaki Motors · Ride Safe · Wear Helmet
          </div>
          <div className="flex gap-4">
            {["FB", "IG", "YT", "X", "TT"].map((s) => (
              <motion.a
                key={s}
                href="#"
                whileHover={{ scale: 1.2, y: -3, backgroundColor: "#88c525", color: "#000" }}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold"
              >
                {s}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
