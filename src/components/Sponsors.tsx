import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

/* placeholder sponsors — replace with real logos/names */
const MARQUEE_SPONSORS = [
  { name: 'Gold Sponsor',     tier: 'Gold Tier'         },
  { name: 'Silver Sponsor',   tier: 'Silver Tier'       },
  { name: 'Tech Partner',     tier: 'Tech Sponsor'      },
  { name: 'Media Partner',    tier: 'Media Sponsor'     },
];

// duplicate for seamless loop
const LOOP = [...MARQUEE_SPONSORS, ...MARQUEE_SPONSORS];

const TIER_GRID = [
  { tier: 'Title Sponsor',    accent: '#F59E0B', sponsors: ['TBA'] },
  { tier: 'Gold Partners',    accent: '#00C2FF', sponsors: ['TBA', 'TBA'] },
  { tier: 'Silver Partners',  accent: '#6B82A8', sponsors: ['TBA', 'TBA', 'TBA'] },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040A18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-purple opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">[ Partners ]</p>
          <h2 className="section-title">Our Sponsors</h2>
          <div className="gradient-rule" />
          <p className="font-exo text-chem-muted mt-5 text-[15px]">
            Powering innovation at Chem-A-Thon 7.0
          </p>
        </motion.div>

        {/* marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden mb-16 relative"
        >
          {/* fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #040A18, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #040A18, transparent)' }} />

          <div className="flex animate-marquee gap-6 w-max">
            {LOOP.map((sp, i) => (
              <div
                key={i}
                className="glass flex-shrink-0 px-7 py-4 flex flex-col items-center justify-center text-center gap-1 min-w-[100px]"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="font-orbitron font-bold text-[13px] text-chem-text">{sp.name}</span>
                <span className="font-mono text-[9px] text-chem-muted uppercase tracking-[0.18em]">{sp.tier}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* tier grid */}
        <div className="space-y-8 mb-16">
          {TIER_GRID.map((row, ri) => (
            <motion.div
              key={row.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: ri * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1" style={{ background: `rgba(${hexToRgb(row.accent)},0.2)` }} />
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full"
                  style={{
                    color: row.accent,
                    background: `rgba(${hexToRgb(row.accent)},0.1)`,
                    border: `1px solid rgba(${hexToRgb(row.accent)},0.2)`,
                  }}
                >
                  {row.tier}
                </span>
                <div className="h-px flex-1" style={{ background: `rgba(${hexToRgb(row.accent)},0.2)` }} />
              </div>

              <div className={`grid gap-4 ${row.sponsors.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : row.sponsors.length === 2 ? 'grid-cols-2 max-w-lg mx-auto' : 'grid-cols-3 max-w-2xl mx-auto'}`}>
                {row.sponsors.map((name, si) => (
                  <div
                    key={si}
                    className="glass-hover px-8 py-8 flex items-center justify-center text-center"
                    style={{ border: `1px solid rgba(${hexToRgb(row.accent)},0.1)` }}
                  >
                    <span className="font-orbitron font-bold text-chem-muted/40 text-sm tracking-widest">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass p-8 md:p-10 text-center"
          style={{ border: '1px solid rgba(0,194,255,0.14)', background: 'rgba(0,194,255,0.03)' }}
        >
          <Handshake size={32} className="mx-auto mb-4" style={{ color: '#00C2FF' }} strokeWidth={1.5} />
          <h3 className="font-orbitron font-bold text-xl text-chem-text mb-3">
            Become a Sponsor
          </h3>
          <p className="font-exo text-chem-muted text-[15px] max-w-xl mx-auto mb-6">
            Partner with AIChE VIT to connect with the next generation of Chemical Engineering
            innovators. Reach out to discuss sponsorship opportunities for Chem-A-Thon 7.0.
          </p>
          <a href="mailto:aichevit@vit.ac.in" className="btn-primary inline-flex">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string) {
  const c = hex.replace('#', '');
  return `${parseInt(c.slice(0,2),16)},${parseInt(c.slice(2,4),16)},${parseInt(c.slice(4,6),16)}`;
}
