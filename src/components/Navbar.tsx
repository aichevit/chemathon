import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import image1 from "../assests/header.webp";
import image2 from "../assests/logo.webp";
const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Events',    href: '#events'    },
  { label: 'Timeline',  href: '#timeline'  },
  { label: 'Speakers',  href: '#talkshow'  },
  { label: 'Committee', href: '#committee' },
  { label: 'Patrons',   href: '#patron'    },
  { label: 'Contact',   href: '#contact'   },
];

function scrollToSection(href: string, onDone?: () => void) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  onDone?.();
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(3,7,16,0.92)] backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group select-none focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={image1}
                alt="Chem-A-Thon Logo"
                style={{ width: '200%', height: '200%', objectFit: 'cover' }}
              />
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1.5">
                <span className="font-orbitron text-[13px] font-bold text-chem-text tracking-widest">
                  CHEM-A-THON
                </span>
                <span className="font-orbitron text-[13px] font-black neon-blue">7.0</span>
              </div>
              <div className="font-mono text-[9px] text-chem-muted tracking-[0.22em] uppercase mt-0.5">
                INNOVATE · INVENT · INSPIRE
              </div>
            </div>
          </button>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="font-exo text-[12px] font-medium text-chem-muted hover:text-chem-blue uppercase tracking-widest transition-colors duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── AIChE-VIT branding pil ── */}
          <div
            className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(0,194,255,0.06)',
              border:     '1px solid rgba(0,194,255,0.2)',
            }}
          >
            <div
              className="w-30 h-10 rounded-s overflow-hidden flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(0,194,255,0.35)' ,background: 'rgb(255,255,255)'}}
            >
              <img src={image2} alt="AIChE VIT" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <div className="font-orbitron font-bold text-[11px] text-chem-text tracking-widest leading-none">
                AIChE
              </div>
              <div className="font-mono text-[9px] text-chem-muted tracking-[0.18em] uppercase mt-0.5">
                VIT
              </div>
            </div>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden text-chem-muted hover:text-chem-blue transition-colors p-1.5 focus:outline-none"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          MOBILE MENU — fixed overlay, not height-clip
          ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="mobile-panel"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed inset-x-0 z-50 lg:hidden"
              style={{
                top:            '64px',
                background:     'rgba(3,7,16,0.98)',
                backdropFilter: 'blur(24px)',
                borderBottom:   '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="px-5 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToSection(link.href), 120);
                    }}
                    className="w-full text-left font-exo text-sm text-chem-muted hover:text-chem-blue uppercase tracking-widest py-3.5 border-b border-white/[0.05] transition-colors focus:outline-none"
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* AIChE-VIT branding inside mobile menu */}
                <div
                  className="mt-5 flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(0,194,255,0.06)',
                    border:     '1px solid rgba(0,194,255,0.15)',
                  }}
                > <button
            onClick={() => window.open('https://aichevit.in', '_blank')}
            className="flex items-center gap-3 group select-none focus:outline-none"
          >
            <div
              className="w-30 h-10 rounded-s overflow-hidden flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(0,194,255,0.35)' ,background: 'rgb(255,255,255)'}}
            >         
                    <img src={image2} alt="AIChE VIT" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-orbitron font-bold text-[12px] text-chem-text tracking-widest">
                      AIChE-VIT
                    </div>
                    <div className="font-mono text-[9px] text-chem-muted/60 tracking-[0.2em] uppercase mt-0.5">
                      Vellore Institute of Technology
                    </div>

                  </div>
                  </button>
                </div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}