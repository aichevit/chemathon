import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

// !! UPDATE THIS to your actual event date !!
const EVENT_DATE = new Date('2026-03-28T09:00:00');

/* ── Molecular network canvas ─────────────────────────────────────────── */
function MolecularCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; color: string };

    const palette = [
      'rgba(0,194,255,0.9)',
      'rgba(0,255,135,0.85)',
      'rgba(123,91,242,0.85)',
    ];

    const particles: Particle[] = Array.from({ length: 65 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.38,
      vy:    (Math.random() - 0.5) * 0.38,
      r:     Math.random() * 2.0 + 0.7,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    let raf: number;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // move
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
      }

      // edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < 155) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,194,255,${(1 - d / 155) * 0.18})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle   = p.color;
        ctx.shadowBlur  = 14;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

/* ── Countdown unit ───────────────────────────────────────────────────── */
function Unit({ val, label }: { val: number; label: string }) {
  const str = String(val).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="glass relative overflow-hidden px-4 py-3 md:px-7 md:py-4 min-w-[64px] md:min-w-[96px] text-center border border-[rgba(0,194,255,0.14)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,194,255,0.1)] to-transparent pointer-events-none" />
        {/* scan line */}
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.6)] to-transparent animate-scanline opacity-40 pointer-events-none"
        />
        <span
          className="relative font-mono text-[2rem] md:text-[3rem] font-bold leading-none"
          style={{ color: '#00C2FF', textShadow: '0 0 22px rgba(0,194,255,0.75)' }}
        >
          {str}
        </span>
      </div>
      <span className="font-mono text-[9px] md:text-[11px] text-chem-muted uppercase tracking-[0.22em]">
        {label}
      </span>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */
export function Hero() {
  const cd = useCountdown(EVENT_DATE);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030710] via-[#050B1A] to-[#071222]" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-blue pointer-events-none" />
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      {/* molecular canvas */}
      <div className="absolute inset-0 opacity-55">
        <MolecularCanvas />
      </div>

      {/* soft centre glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(0,194,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">

        {/* eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 glass px-5 py-2 mb-9 rounded-full border border-[rgba(0,194,255,0.14)]"
        >
          <Zap size={11} style={{ color: '#00FF87' }} />
          <span className="font-mono text-[10px] md:text-[11px] text-chem-muted tracking-[0.22em] uppercase">
            AIChE VIT &nbsp;&middot;&nbsp; Flagship Event &nbsp;&middot;&nbsp; Edition 7.0
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-chem-green animate-pulse-glow" />
        </motion.div>

        {/* title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="select-none"
        >
          <div
            className="font-orbitron font-black tracking-[0.14em] leading-none"
            style={{ fontSize: 'clamp(2rem, 7.5vw, 5.5rem)', color: 'rgba(232,240,255,0.88)' }}
          >
            CHEM-A-THON
          </div>
          <div
            className="font-orbitron font-black leading-none"
            style={{
              fontSize: 'clamp(5.5rem, 22vw, 15rem)',
              color: '#00C2FF',
              textShadow: '0 0 50px rgba(0,194,255,0.45), 0 0 120px rgba(0,194,255,0.15)',
            }}
          >
            7.0
          </div>
        </motion.div>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.42 }}
          className="font-exo font-light text-chem-muted uppercase tracking-[0.4em] mt-1 mb-11"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)' }}
        >
          Initiate &ensp;·&ensp; Innovate &ensp;·&ensp; Invent
        </motion.p>

        {/* countdown */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62 }}
          className="mb-11"
        >
          <p className="font-mono text-[10px] text-chem-muted/50 tracking-[0.3em] uppercase mb-5">
            ── Event Commences In ──
          </p>
          <div className="flex items-start justify-center gap-2 md:gap-5">
            <Unit val={cd.days}    label="Days"    />
            <span className="font-orbitron text-3xl md:text-4xl text-chem-muted/30 mt-[14px] md:mt-[18px] select-none">:</span>
            <Unit val={cd.hours}   label="Hours"   />
            <span className="font-orbitron text-3xl md:text-4xl text-chem-muted/30 mt-[14px] md:mt-[18px] select-none">:</span>
            <Unit val={cd.minutes} label="Minutes" />
            <span className="font-orbitron text-3xl md:text-4xl text-chem-muted/30 mt-[14px] md:mt-[18px] select-none">:</span>
            <Unit val={cd.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#register" className="btn-primary">Register Now</a>
          <a href="#events"   className="btn-outline">Explore Event</a>
        </motion.div>

        {/* stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-11 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            { dot: '#00FF87', text: '36-Hour Hackathon' },
            { dot: '#00C2FF', text: 'VIT Vellore' },
            { dot: '#7B5BF2', text: 'All Universities Welcome' },
          ].map(({ dot, text }) => (
            <span key={text} className="flex items-center gap-2 font-exo text-sm text-chem-muted/60">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                style={{ background: dot }}
              />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-chem-muted/35 hover:text-chem-blue transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
