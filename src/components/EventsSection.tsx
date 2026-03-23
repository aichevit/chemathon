import { motion } from 'framer-motion';
import { Beaker, Car, CheckCircle, ChevronRight } from 'lucide-react';

const HACKATHON_TRACKS = [
  { label: 'Category 1', desc: 'First-Year Students' },
  { label: 'Category 2', desc: 'Second-Year Students' },
  { label: 'Category 3', desc: 'Open to All — Advanced/Mixed Teams' },
];

const HACKATHON_HIGHLIGHTS = [
  'Real-world Chemical Engineering problem statements',
  'Physical working model fabrication — not just digital',
  'Inventory of chemicals & electronic equipment provided',
  'Evaluated by industry professionals & professors',
  'Expert networking throughout the event',
];

const CAR_HIGHLIGHTS = [
  'Single chemically-powered car for all three tracks',
  'Track conditions: Normal · Ramp · Obstacle',
  'Target distance of 6 metres per run',
  'Scored on proximity to finish line',
  'Tests precision, control & reaction timing',
];

function Card({
  id, delay, icon: Icon, accent, title, description, highlights, tracks,
}: {
  id: string; delay: number;
  icon: typeof Beaker; accent: string;
  title: string; description: string;
  highlights: string[]; tracks?: typeof HACKATHON_TRACKS;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: delay < 0.2 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay, ease: 'easeOut' }}
      className="glass-hover p-8 md:p-10 flex flex-col gap-6"
      style={{ borderColor: `rgba(${accent}, 0.12)` }}
    >
      {/* header */}
      <div className="flex items-start gap-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `rgba(${accent}, 0.1)`,
            border: `1px solid rgba(${accent}, 0.25)`,
            boxShadow: `0 0 24px rgba(${accent}, 0.15)`,
          }}
        >
          <Icon size={26} style={{ color: `rgb(${accent})` }} strokeWidth={1.7} />
        </div>
        <div>
          <h3 className="font-orbitron font-bold text-xl text-chem-text">{title}</h3>
        </div>
      </div>

      <p className="font-exo text-chem-muted leading-relaxed text-[15px]">{description}</p>

      {/* tracks */}
      {tracks && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tracks.map(t => (
            <div
              key={t.label}
              className="rounded-xl p-4 text-center"
              style={{
                background: `rgba(${accent}, 0.06)`,
                border: `1px solid rgba(${accent}, 0.14)`,
              }}
            >
              <p className="font-orbitron font-bold text-xs mb-1" style={{ color: `rgb(${accent})` }}>
                {t.label}
              </p>
              <p className="font-exo text-xs text-chem-muted/80">{t.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* highlights */}
      <ul className="space-y-2.5">
        {highlights.map(h => (
          <li key={h} className="flex items-start gap-3">
            <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: `rgb(${accent})` }} strokeWidth={2.2} />
            <span className="font-exo text-[14px] text-chem-muted/85">{h}</span>
          </li>
        ))}
      </ul>

      <div>
      </div>
    </motion.div>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050B1A]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 bg-radial-green opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">[ Competition ]</p>
          <h2 className="section-title">Events at Chem-A-Thon 7.0</h2>
          <div className="gradient-rule" />
          <p className="font-exo text-chem-muted mt-5 max-w-2xl mx-auto text-[15px]">
            A 36-hour journey of fabrication, logic, and professional networking — bringing together
            the brightest minds in chemical engineering to solve real-world industrial problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            id="hackathon"
            delay={0.1}
            icon={Beaker}
            accent="0,194,255"
            title="The 36-Hour Hackathon"
            description="An intensive, multi-category hackathon where teams research, collaborate, and engineer technical solutions to complex problem statements. Unlike digital hackathons, teams receive inventories of chemicals and electronic equipment to build physical working models."
            highlights={HACKATHON_HIGHLIGHTS}
            tracks={HACKATHON_TRACKS}
          />
          <Card
            id="chemecar"
            delay={0.25}
            icon={Car}
            accent="0,255,135"
            title="The Tri-Track Challenge"
            description="A high-precision engineering event that tests the adaptability of chemical reactions under real-world conditions. Teams must engineer a single chemically-powered car capable of performing consistently across three distinct track conditions."
            highlights={CAR_HIGHLIGHTS}
          />
        </div>
      </div>
    </section>
  );
}
