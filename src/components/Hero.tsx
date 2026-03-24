import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, X, UserPlus, LogIn, ExternalLink, BedDouble, Info } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

const EVENT_DATE = new Date('2026-03-28T09:00:00');

/* ── Molecular canvas ─────────────────────────────────────────────────── */
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
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
      }
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
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.6)] to-transparent animate-scanline opacity-40 pointer-events-none" />
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

/* ── Registration Modal ───────────────────────────────────────────────── */
function RegisterModal({ onClose }: { onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    /* Backdrop */
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(3,7,16,0.82)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Panel — stop click propagation so it doesn't close when clicking inside */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{ opacity: 0,    scale: 0.93, y: 24 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background:   'rgba(8,16,34,0.98)',
          border:       '1px solid rgba(0,194,255,0.2)',
          boxShadow:    '0 0 60px rgba(0,194,255,0.12), 0 30px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* top glow bar */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00C2FF, #00FF87, transparent)' }} />

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-chem-muted/50 hover:text-chem-blue transition-colors focus:outline-none"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="px-7 pt-7 pb-8">

          {/* heading */}
          <div className="mb-6">
            <p className="font-mono text-[10px] text-chem-blue uppercase tracking-[0.25em] mb-2">
              [ Registration ]
            </p>
            <h2 className="font-orbitron font-black text-xl text-chem-text tracking-wide leading-tight">
              Chem-A-Thon 7.0
            </h2>
            <p className="font-exo text-sm text-chem-muted mt-1">
              28<sup>th</sup> – 30<sup>th</sup> March, 2026 &nbsp;·&nbsp; VIT Vellore
            </p>
          </div>

          {/* steps */}
          <div
            className="rounded-xl p-4 mb-6 space-y-2"
            style={{ background: 'rgba(0,194,255,0.04)', border: '1px solid rgba(0,194,255,0.1)' }}
          >
            <p className="font-mono text-[10px] text-chem-blue/70 uppercase tracking-widest mb-3">
              How to register
            </p>
            {[
              'Create a new account or log in if you already have one.',
              'Search for and select "Chem-A-Thon 7.0" from the events list.',
              'Fill in your team and participant details.',
              'Complete the payment to confirm your spot.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="font-orbitron font-bold text-[10px] flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(0,194,255,0.15)', color: '#00C2FF' }}
                >
                  {i + 1}
                </span>
                <p className="font-exo text-[13px] text-chem-muted/80 leading-snug">{step}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 mb-5">
            <a
              href="https://events.vit.ac.in/Users/newUser"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl transition-all duration-250 group"
              style={{
                background:  'linear-gradient(135deg, rgba(0,194,255,0.14) 0%, rgba(0,194,255,0.06) 100%)',
                border:      '1px solid rgba(0,194,255,0.28)',
                boxShadow:   '0 0 20px rgba(0,194,255,0.08)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 28px rgba(0,194,255,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0,194,255,0.08)')}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,194,255,0.15)', border: '1px solid rgba(0,194,255,0.25)' }}
                >
                  <UserPlus size={16} style={{ color: '#00C2FF' }} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-orbitron font-bold text-[12px] text-chem-text">New User</p>
                  <p className="font-exo text-[11px] text-chem-muted/60">Create your account</p>
                </div>
              </div>
              <ExternalLink size={13} className="text-chem-muted/40 group-hover:text-chem-blue transition-colors" />
            </a>

            <a
              href="https://events.vit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl transition-all duration-250 group"
              style={{
                background:  'rgba(255,255,255,0.03)',
                border:      '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border      = '1px solid rgba(0,255,135,0.25)';
                e.currentTarget.style.background  = 'rgba(0,255,135,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border      = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.background  = 'rgba(255,255,255,0.03)';
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,255,135,0.1)', border: '1px solid rgba(0,255,135,0.2)' }}
                >
                  <LogIn size={16} style={{ color: '#00FF87' }} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-orbitron font-bold text-[12px] text-chem-text">Already Registered?</p>
                  <p className="font-exo text-[11px] text-chem-muted/60">Log in to your account</p>
                </div>
              </div>
              <ExternalLink size={13} className="text-chem-muted/40 group-hover:text-chem-green transition-colors" />
            </a>
          </div>

          {/* accommodation note */}
          <div
            className="rounded-xl p-4 flex gap-3"
            style={{
              background: 'rgba(245,158,11,0.05)',
              border:     '1px solid rgba(245,158,11,0.18)',
            }}
          >
            <div className="flex-shrink-0 mt-0.5">
              <BedDouble size={15} style={{ color: '#F59E0B' }} strokeWidth={2} />
            </div>
            <div>
              <p className="font-orbitron font-bold text-[11px] text-[#F59E0B] mb-1 tracking-wide">
                Accommodation (External Students)
              </p>
              <p className="font-exo text-[12px] text-chem-muted/70 leading-relaxed">
                If accommodation is required, please select{' '}
                <span className="text-[#F59E0B] font-semibold">"Chem-A-Thon 7.0 – Accommodation"</span>{' '}
                as a separate event during registration.
              </p>
            </div>
          </div>

          {/* fine print */}
          <div className="mt-4 flex items-start gap-2">
            <Info size={11} className="text-chem-muted/30 flex-shrink-0 mt-0.5" />
            <p className="font-mono text-[10px] text-chem-muted/30 leading-relaxed">
              Registration is handled via the official VIT Events portal. Make sure to complete payment to confirm participation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */
export function Hero() {
  const cd = useCountdown(EVENT_DATE);
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#030710] via-[#050B1A] to-[#071222]" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-blue pointer-events-none" />
      <div className="absolute inset-0 bg-radial-purple pointer-events-none" />

      <div className="absolute inset-0 opacity-55">
        <MolecularCanvas />
      </div>

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

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 glass px-5 py-2 mb-9 rounded-full border border-[rgba(0,194,255,0.14)]"
        >
          <Zap size={11} style={{ color: '#00FF87' }} />
          <span className="font-mono text-[10px] md:text-[11px] text-chem-muted tracking-[0.22em] uppercase">
            AIChE-VIT Proudly Presents
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-chem-green animate-pulse-glow" />
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.42 }}
          className="font-exo font-light text-chem-muted uppercase tracking-[0.4em] mt-1 mb-11"
          style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)' }}
        >
          Initiate &ensp;·&ensp; Innovate &ensp;·&ensp; Invent
        </motion.p>

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

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* ← opens modal instead of navigating directly */}
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            Register Now
          </button>
          <a href="#events" className="btn-outline">Explore Event</a>
        </motion.div>
      </div>

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

      {/* ── Registration modal ── */}
      <AnimatePresence>
        {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
}