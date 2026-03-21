import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FlaskConical } from 'lucide-react';
import image1 from "../assests/header.webp";

const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Events',    href: '#events'    },
  { label: 'Timeline',  href: '#timeline'  },
  { label: 'Speakers',  href: '#talkshow'  },
  { label: 'Contact',   href: '#contact'   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(3,7,16,0.88)] backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-3 group select-none">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-shadow duration-300"
  
            >
              <img src={image1} alt="Logo" style={{ width: '200%', height: '200%', objectFit: 'cover' }} />
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1.5">
                <span className="font-orbitron text-[13px] font-bold text-chem-text tracking-widest">
                  CHEM-A-THON
                </span>
                <span className="font-orbitron text-[13px] font-black neon-blue">7.0</span>
              </div>
              <div className="font-mono text-[9px] text-chem-muted tracking-[0.22em] uppercase mt-0.5">
                AIChE &middot; VIT
              </div>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-exo text-[13px] font-medium text-chem-muted hover:text-chem-blue uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-3">
            <a href="#register" className="btn-primary hidden md:inline-flex py-2.5 px-5 text-[11px]">
              Register Now
            </a>
            <button
              className="md:hidden text-chem-muted hover:text-chem-blue transition-colors p-1"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-[rgba(3,7,16,0.97)] backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="font-exo text-sm text-chem-muted hover:text-chem-blue uppercase tracking-widest py-3 border-b border-white/[0.05] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#register" className="btn-primary mt-4 w-full justify-center">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
