import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function Counter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 stripe-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      <motion.div style={{ y }} className="absolute -right-40 top-20 opacity-[0.04] pointer-events-none select-none">
        <span className="font-display text-[40rem] leading-none text-[#88c525]">K</span>
      </motion.div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(136,197,37,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(136,197,37,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>
      <motion.div style={{ opacity, scale }} className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="inline-flex items-center gap-2 bg-[#88c525]/10 border border-[#88c525]/40 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#88c525] rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#aef03a]">2026 Collection · Out Now</span>
          </motion.div>
          <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[7rem] leading-[0.9] mb-4">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="block">RIDE THE</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="block text-[#88c525] text-glow">LEGEND.</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-lg text-white/70 max-w-md mb-8 leading-relaxed">
            From the screaming Ninja to the thunderous Z — every Kawasaki is engineered for one thing: <span className="text-[#aef03a] font-semibold">the drive</span>.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(136,197,37,0.6)" }} whileTap={{ scale: 0.95 }} className="bg-[#88c525] text-black font-bold px-8 py-4 rounded-sm uppercase tracking-wider btn-kawa">Explore Lineup →</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white/30 hover:border-[#88c525] text-white font-bold px-8 py-4 rounded-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">▶</span>Watch Film
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex gap-8 mt-12">
            {[
              { n: "50+", l: "Years of Racing" },
              { n: "200", l: "Mph Top Speed" },
              { n: "200K+", l: "Riders Worldwide" },
            ].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 + i * 0.1 }}>
                <div className="font-display text-3xl text-[#88c525]">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="drop-shadow-[0_20px_40px_rgba(136,197,37,0.3)]">
            <img src="/images/hero-bike.png" alt="Kawasaki Ninja" className="w-full h-auto rounded-lg object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: -8 }} transition={{ delay: 1.8, type: "spring", stiffness: 200 }} className="absolute -top-4 right-4 bg-[#aef03a] text-black px-4 py-2 rounded-sm font-black shadow-2xl">
            <div className="text-[10px] uppercase tracking-widest">From</div>
            <div className="font-display text-2xl leading-none">$12,999</div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-12 bg-gradient-to-b from-[#88c525] to-transparent" />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["NINJA", "ZX-10R", "Z H2", "VERSYS", "VULCAN", "KX450", "CONCOURS", "KLX"];
  return (
    <div className="bg-[#88c525] text-black py-5 overflow-hidden border-y-2 border-black">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-4xl tracking-widest px-8 flex items-center gap-8">
            {t} <span className="text-black/30">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const MODELS = [
  { name: "NINJA ZX-10R", tag: "Supersport", hp: 203, top: 299, weight: 207, price: "$17,399", color: "from-lime-400 to-green-700", image: "/images/ninja-zx10r.jpg", desc: "Born from the World Superbike Championship. Track-ready aggression." },
  { name: "Z H2", tag: "Hypernaked", hp: 200, top: 270, weight: 239, price: "$18,700", color: "from-lime-300 to-emerald-800", image: "/images/z-h2.jpg", desc: "Supercharged street weapon. Supercharged soul." },
  { name: "VERSYS 1000", tag: "Adventure Touring", hp: 120, top: 235, weight: 257, price: "$14,499", color: "from-green-500 to-lime-700", image: "/images/versys-1000.jpg", desc: "Any road. Any weather. Any distance. Just go." },
  { name: "VULCAN S", tag: "Cruiser", hp: 61, top: 180, weight: 228, price: "$7,999", color: "from-yellow-400 to-green-800", image: "/images/vulcan-s.jpg", desc: "Low seat. Long rides. Laid-back attitude." },
];

function Models() {
  return (
    <section id="bikes" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.3em] text-[#88c525] mb-3">→ The Lineup</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-6xl md:text-8xl leading-none">PICK YOUR <br /><span className="text-[#88c525]">MACHINE.</span></motion.h2>
          </div>
          <p className="text-white/60 max-w-sm">Four distinct lineages. One obsession: making every drive unforgettable.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-[#88c525]/60 rounded-lg overflow-hidden transition-all">
              <div className={`relative h-48 bg-gradient-to-br ${m.color} overflow-hidden`}>
                <img src={m.image} alt={m.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-20 checker-bg" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] uppercase tracking-widest">{m.tag}</div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-[#aef03a]">KAWASAKI · 2026</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-3xl mb-1 group-hover:text-[#aef03a] transition-colors">{m.name}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{m.desc}</p>
                <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-white/10">
                  <div><div className="font-display text-xl text-[#88c525]">{m.hp}</div><div className="text-[9px] uppercase tracking-wider text-white/40">HP</div></div>
                  <div><div className="font-display text-xl text-[#88c525]">{m.top}</div><div className="text-[9px] uppercase tracking-wider text-white/40">KM/H</div></div>
                  <div><div className="font-display text-xl text-[#88c525]">{m.weight}</div><div className="text-[9px] uppercase tracking-wider text-white/40">KG</div></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl">{m.price}</span>
                  <motion.button whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-[#88c525] text-black flex items-center justify-center font-bold">→</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section id="performance" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{ background: "radial-gradient(circle at 30% 40%, rgba(136,197,37,0.15), transparent 50%)" }} />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#88c525] mb-3">→ Drive By The Numbers</div>
          <h2 className="font-display text-6xl md:text-8xl leading-none">ENGINEERED FOR<br /><span className="text-[#88c525]">VELOCITY.</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: 203, s: "HP", l: "Peak Power", suffix: "" },
            { n: 299, s: "KM/H", l: "Top Speed", suffix: "" },
            { n: 2, s: ".9s", l: "0 → 100 km/h", suffix: "" },
            { n: 14, s: "K RPM", l: "Redline", suffix: "" },
          ].map((stat, i) => (
            <motion.div key={stat.l} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, borderColor: "#88c525" }} className="bg-black/40 backdrop-blur border border-white/10 p-8 rounded-lg text-center transition-all">
              <div className="font-display text-7xl text-[#88c525] mb-2">
                <Counter end={stat.n} /><span className="text-3xl text-white/60">{stat.suffix || stat.s}</span>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">{stat.l}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 relative h-24 rounded-lg overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 moving-road opacity-70" />
          <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 0.4, repeat: Infinity }} className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#88c525] shadow-lg">
            <img src="/images/ninja-zx10r.jpg" alt="Ninja" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute top-4 right-6 font-mono text-xs text-[#88c525] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#88c525] rounded-full animate-pulse" />DRIVE MODE
          </div>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  const years = [
    { y: 1966, t: "First Drive", d: "Kawasaki enters two-wheeled world with the H1." },
    { y: 1972, t: "Z1 Launched", d: "The original superbike. 903cc of revolution." },
    { y: 1984, t: "GPZ900R Ninja", d: "Birth of the Ninja legend. 250 km/h stock." },
    { y: 2015, t: "Ninja H2R", d: "Supercharged insanity. 326 HP track monster." },
    { y: 2026, t: "Electrified Era", d: "Hybrid Ninja debuts. The future roars." },
  ];
  return (
    <section id="racing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#88c525] mb-3">→ Racing Heritage</div>
          <h2 className="font-display text-6xl md:text-8xl leading-none">60 YEARS OF <br /><span className="text-[#88c525]">DOMINANCE.</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#88c525] to-transparent" />
          <div className="space-y-12">
            {years.map((y, i) => (
              <motion.div key={y.y} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                <div className="flex-1 text-right md:text-right hidden md:block">
                  {i % 2 === 0 && (
                    <motion.div whileHover={{ scale: 1.03 }} className="inline-block bg-zinc-900 border border-[#88c525]/30 p-6 rounded-lg hover:border-[#88c525] transition-colors">
                      <div className="font-display text-5xl text-[#88c525] mb-2">{y.y}</div>
                      <div className="font-display text-2xl mb-1">{y.t}</div>
                      <div className="text-white/60 text-sm">{y.d}</div>
                    </motion.div>
                  )}
                </div>
                <motion.div whileHover={{ scale: 1.3, rotate: 180 }} className="relative z-10 w-16 h-16 bg-[#88c525] rounded-full flex items-center justify-center shrink-0 green-glow">
                  <span className="font-display text-black text-xl">{y.y.toString().slice(-2)}</span>
                </motion.div>
                <div className="flex-1 md:text-left">
                  {i % 2 !== 0 && (
                    <motion.div whileHover={{ scale: 1.03 }} className="inline-block bg-zinc-900 border border-[#88c525]/30 p-6 rounded-lg hover:border-[#88c525] transition-colors">
                      <div className="font-display text-5xl text-[#88c525] mb-2">{y.y}</div>
                      <div className="font-display text-2xl mb-1">{y.t}</div>
                      <div className="text-white/60 text-sm">{y.d}</div>
                    </motion.div>
                  )}
                  <div className="md:hidden bg-zinc-900 border border-[#88c525]/30 p-4 rounded-lg">
                    <div className="font-display text-3xl text-[#88c525]">{y.y}</div>
                    <div className="font-display text-xl">{y.t}</div>
                    <div className="text-white/60 text-sm">{y.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { t: "Ninja ZX-10R", s: "Track Day", img: "/images/ninja-action.jpg", c: "from-lime-500 to-green-900" },
    { t: "Z H2", s: "Street", img: "/images/z-action.jpg", c: "from-emerald-400 to-black" },
    { t: "Versys", s: "Adventure", img: "/images/versys-action.jpg", c: "from-green-600 to-lime-800" },
    { t: "Vulcan S", s: "Cruise", img: "/images/vulcan-action.jpg", c: "from-yellow-500 to-green-900" },
    { t: "KX450", s: "Motocross", img: "/images/kx-action.jpg", c: "from-lime-400 to-emerald-700" },
    { t: "Ninja H2R", s: "Supercharged", img: "/images/ninja-action.jpg", c: "from-red-500 via-lime-500 to-green-900" },
  ];
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-[#88c525] mb-3">→ In Action</div>
          <h2 className="font-display text-6xl md:text-8xl leading-none">BORN TO <span className="text-[#88c525]">PERFORM.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div key={img.t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.03 }} className={`group relative aspect-square bg-gradient-to-br ${img.c} rounded-lg overflow-hidden cursor-pointer`}>
              <img src={img.img} alt={img.t} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 checker-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="font-display text-2xl">{img.t}</div>
                <div className="text-xs uppercase tracking-widest text-[#aef03a]">{img.s}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="dealers" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#88c525] via-lime-500 to-green-700 rounded-2xl p-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 checker-bg opacity-20" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-80 h-80 border-8 border-black/20 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -bottom-24 -left-16 w-72 h-72 border-8 border-black/20 rounded-full" />
          <div className="relative text-center text-black">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-8xl leading-none mb-6">FEEL THE<br /><span className="italic">RUSH.</span></motion.div>
            <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">Book a free test ride at your nearest Kawasaki dealer. The thrill is waiting.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="bg-black text-[#88c525] font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-lg">Find A Dealer →</motion.button>
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="border-2 border-black text-black font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-lg">Build Yours</motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Models />
      <Performance />
      <Heritage />
      <Gallery />
      <CTA />
    </>
  );
}
