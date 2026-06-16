import { motion } from "framer-motion";

export default function MotorcycleSVG({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 800 400"
      className={className}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#aef03a" />
          <stop offset="60%" stopColor="#88c525" />
          <stop offset="100%" stopColor="#4a7a10" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fffbe6" />
          <stop offset="40%" stopColor="#aef03a" />
          <stop offset="100%" stopColor="#88c525" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="400" cy="360" rx="280" ry="14" fill="#88c525" opacity="0.15" />

      {/* Exhaust smoke */}
      <motion.g
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: [0, 0.6, 0], x: [-40, -120] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      >
        <circle cx="120" cy="290" r="10" fill="#88c525" opacity="0.4" />
        <circle cx="90" cy="280" r="14" fill="#88c525" opacity="0.3" />
        <circle cx="60" cy="285" r="8" fill="#aef03a" opacity="0.25" />
      </motion.g>

      {/* Rear wheel */}
      <g>
        <circle cx="200" cy="300" r="65" fill="url(#rimGrad)" stroke="#1a1a1a" strokeWidth="6" />
        <circle cx="200" cy="300" r="50" fill="none" stroke="#88c525" strokeWidth="2" opacity="0.3" />
        <motion.g
          style={{ transformOrigin: "200px 300px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="200"
              y1="300"
              x2={200 + 50 * Math.cos((angle * Math.PI) / 180)}
              y2={300 + 50 * Math.sin((angle * Math.PI) / 180)}
              stroke="#88c525"
              strokeWidth="3"
            />
          ))}
          <circle cx="200" cy="300" r="14" fill="#88c525" />
          <circle cx="200" cy="300" r="6" fill="#0a0a0a" />
        </motion.g>
      </g>

      {/* Front wheel */}
      <g>
        <circle cx="600" cy="300" r="65" fill="url(#rimGrad)" stroke="#1a1a1a" strokeWidth="6" />
        <circle cx="600" cy="300" r="50" fill="none" stroke="#88c525" strokeWidth="2" opacity="0.3" />
        <motion.g
          style={{ transformOrigin: "600px 300px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="600"
              y1="300"
              x2={600 + 50 * Math.cos((angle * Math.PI) / 180)}
              y2={300 + 50 * Math.sin((angle * Math.PI) / 180)}
              stroke="#88c525"
              strokeWidth="3"
            />
          ))}
          <circle cx="600" cy="300" r="14" fill="#88c525" />
          <circle cx="600" cy="300" r="6" fill="#0a0a0a" />
        </motion.g>
      </g>

      {/* Frame / body — sportbike shape */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main body */}
        <path
          d="M 180 280 L 260 230 L 360 210 L 440 180 L 540 180 L 610 230 L 620 260 L 560 280 L 450 280 L 380 290 L 280 295 Z"
          fill="url(#bodyGrad)"
          stroke="#0a0a0a"
          strokeWidth="3"
        />
        {/* Tank */}
        <path
          d="M 340 215 Q 400 185 470 190 L 460 240 L 350 250 Z"
          fill="#88c525"
          stroke="#0a0a0a"
          strokeWidth="2"
        />
        {/* Seat */}
        <path
          d="M 260 225 Q 310 210 360 215 L 350 250 L 270 255 Z"
          fill="#0a0a0a"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Windshield */}
        <path
          d="M 520 180 Q 560 155 600 170 L 590 210 L 530 210 Z"
          fill="#0a0a0a"
          opacity="0.7"
          stroke="#88c525"
          strokeWidth="1"
        />
        {/* Headlight */}
        <circle cx="605" cy="225" r="16" fill="url(#headlight)" />
        <circle cx="605" cy="225" r="6" fill="#fffbe6" />
        {/* Exhaust */}
        <path
          d="M 200 275 L 140 275 L 135 290 L 200 290 Z"
          fill="#222"
          stroke="#000"
          strokeWidth="1"
        />
        <circle cx="140" cy="282" r="8" fill="#0a0a0a" stroke="#88c525" strokeWidth="1.5" />
        {/* Handlebar */}
        <line x1="560" y1="175" x2="580" y2="145" stroke="#111" strokeWidth="5" strokeLinecap="round" />
        <line x1="580" y1="145" x2="605" y2="148" stroke="#111" strokeWidth="4" strokeLinecap="round" />
        {/* Kawasaki stripe */}
        <path
          d="M 360 220 L 470 210 L 465 230 L 358 238 Z"
          fill="#0a0a0a"
          opacity="0.85"
        />
        <text x="380" y="228" fill="#88c525" fontSize="10" fontWeight="900" fontFamily="Impact, sans-serif">KAWASAKI</text>
      </motion.g>

      {/* Speed lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], x: [-50, -200] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      >
        <line x1="780" y1="160" x2="720" y2="160" stroke="#aef03a" strokeWidth="3" strokeLinecap="round" />
        <line x1="790" y1="200" x2="700" y2="200" stroke="#88c525" strokeWidth="4" strokeLinecap="round" />
        <line x1="780" y1="240" x2="710" y2="240" stroke="#aef03a" strokeWidth="3" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}
