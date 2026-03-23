import { motion } from 'framer-motion';
import {
  Flag, FlaskConical, Mic2, Cpu, CheckSquare, Car, Gavel, PartyPopper,
} from 'lucide-react';

const DAYS = [
  {
    day: 'Day 1',
    date: 'Saturday, 28 March 2026',
    color: '#00C2FF',
    accent: '0,194,255',
    phases: [
      { icon: Flag,        title: 'Inauguration Ceremony',         desc: 'Official opening of Chem-A-Thon 7.0 at Ambedkar Auditorium.',                              venue: 'Ambedkar Auditorium' },
      { icon: Car,         title: 'The Tritrack Challenge',        desc: 'Chem-E-Car teams take to the tracks — Normal, Ramp, and Obstacle.',                         venue: "Foody's 2" },
      { icon: Mic2,        title: 'Talk Show',                     desc: 'Dual-guest expert session with industry leaders from CSIR-NAL and Dow Chemicals.',           venue: 'Ambedkar Auditorium' },
      { icon: Cpu,         title: 'Model Development — Phase 1',   desc: 'Hackathon kicks off. Teams begin fabricating working models using supplied inventories.',    venue: 'SMV Labs' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, 29 March 2026',
    color: '#7B5BF2',
    accent: '123,91,242',
    phases: [
      { icon: Cpu,          title: 'Model Development — Phase 1 (Cont.)', desc: 'Teams continue overnight fabrication through the first development phase.',           venue: 'SMV Labs' },
      { icon: CheckSquare,  title: 'Checkpoint 1',                        desc: 'First evaluation checkpoint — progress review by faculty and mentors.',               venue: 'SMV Labs' },
      { icon: Cpu,          title: 'Model Development — Phase 2',         desc: 'Second development sprint; teams refine designs and integrate systems.',               venue: 'SMV Labs' },
      { icon: CheckSquare,  title: 'Checkpoint 2',                        desc: 'Mid-hackathon progress assessment by the evaluation panel.',                           venue: 'SMV Labs' },
      { icon: FlaskConical, title: 'Model Development — Phase 3',         desc: 'Final functional assembly and testing sprint before the wrap-up phase.',               venue: 'SMV Labs' },
      { icon: CheckSquare,  title: 'Checkpoint 3',                        desc: 'Third evaluation checkpoint — models reviewed ahead of the final phase.',              venue: 'SMV Labs' },
      { icon: Cpu,          title: 'Model Development — Final Phase',     desc: 'Last development window begins; teams push to complete and polish their models.',      venue: 'SMV Labs' },
    ],
  },
  {
    day: 'Day 3',
    date: 'Monday, 30 March 2026',
    color: '#00FF87',
    accent: '0,255,135',
    phases: [
      { icon: Flag,        title: '36-Hour Hackathon Ends',     desc: 'Tools down at 9:00 AM sharp — the build phase officially concludes.',                           venue: 'SMV Labs' },
      { icon: Gavel,       title: 'Final Evaluation & Judging', desc: 'Completed models presented to and assessed by the panel of industry professionals.',             venue: "Foody's" },
      { icon: PartyPopper, title: 'Awards & Closing Ceremony',  desc: 'Champions crowned, prizes awarded, and Chem-A-Thon 7.0 closes with the Gala Ceremony.',         venue: 'VOC Gallery' },
    ],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040A18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-purple opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">[ Schedule ]</p>
          <h2 className="section-title">Event Timeline</h2>
          <div className="gradient-rule" />
          <p className="font-exo text-chem-muted mt-5 text-[15px]">
            28th – 30th March, 2026 · VIT Vellore
          </p>
        </motion.div>

        <div className="space-y-16">
          {DAYS.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: di * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="flex-shrink-0 font-orbitron font-black text-[11px] tracking-[0.18em] px-4 py-2 rounded-full uppercase"
                  style={{
                    color: day.color,
                    background: `rgba(${day.accent},0.1)`,
                    border: `1px solid rgba(${day.accent},0.3)`,
                    boxShadow: `0 0 18px rgba(${day.accent},0.18)`,
                  }}
                >
                  {day.day}
                </div>
                <div className="h-px flex-1" style={{ background: `rgba(${day.accent},0.2)` }} />
                <span className="font-mono text-[11px] text-chem-muted/50 flex-shrink-0">
                  {day.date}
                </span>
              </div>

              <div className="relative pl-8">
                <div
                  className="absolute left-[7px] top-3 bottom-3 w-px"
                  style={{
                    background: `linear-gradient(to bottom, rgba(${day.accent},0.5) 0%, rgba(${day.accent},0.15) 100%)`,
                  }}
                />

                <div className="space-y-5">
                  {day.phases.map((phase, pi) => (
                    <motion.div
                      key={phase.title}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: di * 0.08 + pi * 0.07 }}
                      className="relative flex gap-5 items-start"
                    >
                      <div
                        className="absolute -left-8 mt-[18px] w-3.5 h-3.5 rounded-full flex-shrink-0 z-10"
                        style={{
                          background: day.color,
                          boxShadow: `0 0 0 3px rgba(${day.accent},0.15), 0 0 12px rgba(${day.accent},0.55)`,
                        }}
                      />

                      <div
                        className="glass-hover flex-1 p-5 flex gap-4 items-start"
                        style={{ border: `1px solid rgba(${day.accent},0.1)` }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: `rgba(${day.accent},0.1)`,
                            border: `1px solid rgba(${day.accent},0.2)`,
                          }}
                        >
                          <phase.icon size={16} style={{ color: day.color }} strokeWidth={2} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <h4
                              className="font-orbitron font-bold text-[13px] leading-tight"
                              style={{ color: day.color }}
                            >
                              {phase.title}
                            </h4>
                            <span className="font-mono text-[9px] text-chem-muted/50 uppercase tracking-widest flex-shrink-0 mt-0.5">
                              {phase.venue}
                            </span>
                          </div>
                          <p className="font-exo text-[13px] text-chem-muted/75 leading-relaxed mt-1.5">
                            {phase.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
