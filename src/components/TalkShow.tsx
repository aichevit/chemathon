import { motion } from 'framer-motion';
import { Mic2, Building2, FlaskConical, Quote } from 'lucide-react';
import img1 from '../assests/naveen.webp';
import img2 from '../assests/senthil.webp';
const SPEAKERS = [
  {
    name: 'Naveen V S',
    role: 'Senior Principal Scientist',
    org: 'CSIR – NAL',
    orgLong: 'Council of Scientific & Industrial Research — National Aerospace Laboratories',
    domain: 'Advanced Research & Development',
    icon: img1,
    accent: '0,194,255',
    bio: 'Bringing deep expertise from the frontier of scientific research, Naveen offers a rare window into how fundamental Chemical Engineering principles are applied to solve complex R&D challenges at one of India\'s premier research institutions.',
    tag: 'Research Domain',
  },
  {
    name: 'Senthil Kumar Subramanian',
    role: 'Project Engineering Manager',
    org: 'Dow Chemicals',
    orgLong: 'Dow Chemicals International Pvt. Ltd.',
    domain: 'Large-Scale Process Implementation',
    icon: img2,
    accent: '0,255,135',
    bio: 'With hands-on experience driving complex engineering projects from concept to execution, Senthil brings the industrial perspective — how engineers think, design, and build under real constraints at one of the world\'s largest chemical companies.',
    tag: 'Industry Domain',
  },
];

export function TalkShow() {
  return (
    <section id="talkshow" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050B1A]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-blue opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-radial-green opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="section-label mb-3">[ Talk Show ]</p>
          <h2 className="section-title">Expert Speaker Session</h2>
          <div className="gradient-rule" />
        </motion.div>

        {/* intro blurb */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-center font-exo text-chem-muted max-w-2xl mx-auto mb-14 text-[15px] leading-relaxed"
        >
          A dual-guest session bringing together perspectives from advanced research and
          large-scale industry — exploring how Chemical Engineering principles translate into
          innovation, design, and execution under real constraints.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-7">
          {SPEAKERS.map((sp, i) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.18 }}
              className="glass-hover p-8 flex flex-col gap-6"
              style={{ border: `1px solid rgba(${sp.accent}, 0.12)` }}
            >
              {/* speaker head */}
              <div className="flex items-start gap-5">
                {/* avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <img src={sp.icon} alt={sp.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-offset-2" />
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className="font-mono text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full inline-block mb-2"
                    style={{
                      color: `rgb(${sp.accent})`,
                      background: `rgba(${sp.accent}, 0.1)`,
                      border: `1px solid rgba(${sp.accent}, 0.2)`,
                    }}
                  >
                    {sp.tag}
                  </span>
                  <h3 className="font-orbitron font-bold text-[15px] text-chem-text leading-tight">
                    {sp.name}
                  </h3>
                  <p
                    className="font-exo font-medium text-sm mt-0.5"
                    style={{ color: `rgb(${sp.accent})` }}
                  >
                    {sp.role}
                  </p>
                  <p className="font-exo text-xs text-chem-muted mt-0.5">{sp.orgLong}</p>
                </div>
              </div>

              {/* domain badge */}
              <div
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                style={{ background: `rgba(${sp.accent}, 0.06)`, border: `1px solid rgba(${sp.accent}, 0.12)` }}
              >
                <Building2 size={13} style={{ color: `rgb(${sp.accent})` }} strokeWidth={2} />
                <span className="font-mono text-[11px] text-chem-muted tracking-wider">{sp.domain}</span>
              </div>

              {/* bio */}
              <div className="relative">
                <Quote
                  size={32}
                  className="absolute -top-1 -left-1 opacity-10"
                  style={{ color: `rgb(${sp.accent})` }}
                />
                <p className="font-exo text-[14px] text-chem-muted/80 leading-relaxed pl-4">
                  {sp.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div
            className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ border: '1px solid rgba(0,194,255,0.15)' }}
          >
            <Mic2 size={15} style={{ color: '#00C2FF' }} />
            <span className="font-exo text-sm text-chem-muted">
              Don't miss this session — insights straight from the industry frontline
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
