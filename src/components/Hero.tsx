import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, MapPin, Smartphone, Sparkles } from 'lucide-react';
import { profile, stats } from '../data';

function FloatingOrb({ color, size, x, y, delay }: { color: string; size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none blob"
      style={{
        width: `min(${size}px, ${Math.round(size * 0.5)}vw)`,
        height: `min(${size}px, ${Math.round(size * 0.5)}vw)`,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color}15, ${color}05, transparent)`,
        filter: `blur(${size / 3}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Floating organic orbs */}
      <FloatingOrb color="#6366f1" size={600} x="10%" y="20%" delay={0} />
      <FloatingOrb color="#a855f7" size={400} x="70%" y="60%" delay={2} />
      <FloatingOrb color="#ec4899" size={300} x="80%" y="15%" delay={4} />
      <FloatingOrb color="#06b6d4" size={250} x="5%" y="70%" delay={1} />

      {/* Radial center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative orbiting dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-20">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const radius = 120 + i * 15;
          return (
            <motion.div
              key={deg}
              className="absolute w-1 h-1 rounded-full bg-brand"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            >
              <div
                className="w-1 h-1 rounded-full bg-brand/60"
                style={{ transform: `translateX(${radius}px)` }}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full glass-raised px-5 py-2.5 mb-10"
        >
          <Smartphone size={13} className="text-brand" />
          <span className="text-xs sm:text-[11px] text-zinc-400 font-mono tracking-[0.2em] uppercase">
            Mobile App Architect
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        {/* Name — large editorial treatment */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.25rem,7vw,7rem)] font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-shimmer">{profile.name.split(' ')[0]}</span>
          <br />
          <span className="text-white/90">{profile.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Title with decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-3"
        >
          <div className="hidden sm:block w-12 h-[1px] bg-gradient-to-r from-transparent to-brand/40" />
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl px-2">
            {profile.title}
          </p>
          <div className="hidden sm:block w-12 h-[1px] bg-gradient-to-l from-transparent to-brand/40" />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-zinc-600 text-sm mb-12"
        >
          <MapPin size={12} />
          <span>{profile.location}</span>
        </motion.div>

        {/* Stats — floating cards with perspective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="dark-card corner-squares rounded-xl p-4 text-center group"
            >
              <CornerSquaresMini />
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-display">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-mono">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative rounded-full bg-brand px-8 py-3.5 text-sm font-medium text-white hover:bg-brand-light transition-all duration-300 glow-brand shine-sweep"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} />
              View My Work
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full glass-raised px-8 py-3.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-brand/30 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] sm:text-[9px] font-mono text-zinc-600 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CornerSquaresMini() {
  return (
    <>
      <span className="sq sq-tl" />
      <span className="sq sq-tr" />
      <span className="sq sq-bl" />
      <span className="sq sq-br" />
    </>
  );
}
