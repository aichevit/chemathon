import { FlaskConical, Instagram, Globe, Linkedin, Phone, Mail, ExternalLink } from 'lucide-react';

const CONTACTS = [
  {
    name: 'Mr. Ameya Shukla',
    role: 'Chairperson',
    phone: '+91 73851 22063',
    color: '#00C2FF',
  },
  {
    name: 'Ms. Ananya Lakshmi J',
    role: 'Vice Chairperson',
    phone: '+91 88485 74031',
    color: '#00FF87',
  },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/aichevit',
    handle: '@aichevit',
    icon: Instagram,
    color: '#E1306C',
  },
  {
    label: 'Website',
    href: 'https://aichevit.in',
    handle: 'aichevit.in',
    icon: Globe,
    color: '#00C2FF',
  },
  {
    label: 'LinkedIn',
    href: '#',
    handle: 'AIChE VIT',
    icon: Linkedin,
    color: '#0A66C2',
  },
];

const NAV_LINKS = [
  { label: 'About',    href: '#about'       },
  { label: 'Events',   href: '#events'      },
  { label: 'Timeline', href: '#timeline'    },
  { label: 'Speakers', href: '#talkshow'    },
  { label: 'Sponsors', href: '#sponsors'    },
  { label: 'Contact',  href: '#contact'     },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* top gradient rule */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00C2FF, #00FF87, transparent)' }} />

      <div className="relative bg-[#030710]">
        <div className="absolute inset-0 bg-grid opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12 mb-14">

            {/* brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#00C2FF,#7B5BF2)', boxShadow: '0 0 18px rgba(0,194,255,0.4)' }}
                >
                  <FlaskConical size={20} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-orbitron text-sm font-bold text-chem-text tracking-widest">CHEM-A-THON</span>
                    <span className="font-orbitron text-sm font-black neon-blue">7.0</span>
                  </div>
                  <div className="font-mono text-[9px] text-chem-muted tracking-[0.22em] uppercase">AIChE · VIT Vellore</div>
                </div>
              </div>
              <p className="font-exo text-[13px] text-chem-muted/70 leading-relaxed mb-6">
                Initiate. Innovate. Invent. — The flagship Chemical Engineering hackathon of
                the AIChE Student Chapter, VIT Vellore. Transforming industrial challenges into
                real-world solutions.
              </p>

              {/* social icons */}
              <div className="flex gap-3">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = s.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${s.color}55`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <s.icon size={15} style={{ color: s.color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* quick links */}
            <div>
              <h4 className="font-orbitron font-bold text-xs text-chem-text tracking-[0.2em] uppercase mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-exo text-sm text-chem-muted/70 hover:text-chem-blue transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-chem-muted/30 group-hover:bg-chem-blue transition-colors"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="font-orbitron font-bold text-xs text-chem-text tracking-[0.2em] uppercase mb-5">
                Contact Us
              </h4>
              <div className="space-y-5">
                {CONTACTS.map(c => (
                  <div
                    key={c.name}
                    className="glass p-4 rounded-xl"
                    style={{ border: `1px solid rgba(${hexToRgb(c.color)}, 0.12)` }}
                  >
                    <p className="font-orbitron font-bold text-[12px] text-chem-text mb-0.5">{c.name}</p>
                    <p className="font-mono text-[10px] mb-2" style={{ color: c.color }}>{c.role}</p>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 font-exo text-[13px] text-chem-muted/70 hover:text-chem-blue transition-colors"
                    >
                      <Phone size={12} />
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* web/email row */}
              <div className="mt-4 space-y-2">
                <a
                  href="https://aichevit.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-exo text-sm text-chem-muted/70 hover:text-chem-blue transition-colors"
                >
                  <Globe size={13} /> aichevit.in <ExternalLink size={10} />
                </a>
                <a
                  href="mailto:aiche.vit@vit.ac.in"
                  className="flex items-center gap-2 font-exo text-sm text-chem-muted/70 hover:text-chem-blue transition-colors"
                >
                  <Mail size={13} /> aichevit@vit.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div
            className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="font-mono text-[11px] text-chem-muted/50 tracking-widest uppercase">
              © 2026 Chem-A-Thon 7.0 · AIChE VIT · All rights reserved
            </p>
            <p className="font-mono text-[11px] tracking-wider"
              style={{ color: '#00C2FF', textShadow: '0 0 12px rgba(0,194,255,0.4)' }}>
              Built for Chem-A-Thon 7.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function hexToRgb(hex: string) {
  const c = hex.replace('#', '');
  return `${parseInt(c.slice(0,2),16)},${parseInt(c.slice(2,4),16)},${parseInt(c.slice(4,6),16)}`;
}
