import { motion } from 'framer-motion';
import { UserPlus, FileText, Zap, Mic2, Presentation, Award } from 'lucide-react';

const PHASES = [
  {
    icon: UserPlus,
    phase: '01',
    title: 'Registration Opens',
    desc: 'Form your team and submit registrations through the official portal. Open to undergraduate students from all universities.',
    color: '#00C2FF',
    status: 'open',
  },
  {
    icon: FileText,
    phase: '02',
    title: 'Problem Statement Release',
    desc: 'Challenge domains are revealed. Teams begin initial research into the technical problem space before the clock starts.',
    color: '#7B5BF2',
    status: 'upcoming',
  },
  {
    icon: Zap,
    phase: '03',
    title: 'Hackathon Kickoff',
    desc: 'The 36-hour sprint begins. Teams receive chemical inventories and electronic equipment to start fabricating their models.',
    color: '#00FF87',
    status: 'upcoming',
  },
  {
    icon: Mic2,
    phase: '04',
    title: 'Expert Talk Show',
    desc: 'Industry professionals share insights into Chemical Engineering across research and large-scale industrial applications.',
    color: '#F59E0B',
    status: 'upcoming',
  },
  {
    icon: Presentation,
    phase: '05',
    title: 'Final Presentations',
    desc: 'Teams present completed working models to a panel of industry professionals and professors for rigorous evaluation.',
    color: '#00C2FF',
    status: 'upcoming',
  },
  {
    icon: Award,
    phase: '06',
    title: 'Awards Ceremony',
    desc: 'Champions are crowned. Prizes awarded across all tracks — recognition, experience, and rewards for the best solutions.',
    color: '#00FF87',
    status: 'upcoming',
  },
];

function hexToRgb(hex: string) {
  const c = hex.replace('#', '');
  return `${parseInt(c.slice(0,2),16)},${parseInt(c.slice(2,4),16)},${parseInt(c.slice(4,6),16)}`;
}

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040A18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-purple opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">[ Roadmap ]</p>
          <h2 className="section-title">Event Timeline</h2>
          <div className="gradient-rule" />
        </motion.div>

        <div className="relative">
          {/* vertical spine */}
          <div
            className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0,194,255,0.3) 10%, rgba(0,194,255,0.3) 90%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-10">
            {PHASES.map((phase, i) => {
              const isRight = i % 2 === 0;
              const rgb = hexToRgb(phase.color);

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* card — desktop alternates sides, mobile always right */}
                  <div className={`flex-1 pl-14 md:pl-0 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div
                      className="glass-hover p-6 inline-block w-full"
                      style={{ border: `1px solid rgba(${rgb}, 0.15)` }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `rgba(${rgb}, 0.12)`, border: `1px solid rgba(${rgb}, 0.25)` }}
                        >
                          <phase.icon size={16} style={{ color: phase.color }} strokeWidth={2} />
                        </div>
                        <span className="font-mono text-[10px] text-chem-muted tracking-widest uppercase">
                          Phase {phase.phase}
                        </span>
                      </div>
                      <h3
                        className="font-orbitron font-bold text-[15px] mb-2"
                        style={{ color: phase.color }}
                      >
                        {phase.title}
                      </h3>
                      <p className="font-exo text-[13px] text-chem-muted leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* dot — fixed position on mobile, centred on desktop */}
                  <div
                    className="absolute left-0 top-6 md:static md:flex-shrink-0 md:self-start md:mt-6 timeline-dot z-10"
                    style={{
                      background: phase.color,
                      boxShadow: `0 0 0 4px rgba(${rgb},0.15), 0 0 18px rgba(${rgb},0.55)`,
                    }}
                  />

                  {/* spacer for alternating side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
