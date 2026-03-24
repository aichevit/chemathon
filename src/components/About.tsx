import { motion } from 'framer-motion';
import { Users, Lightbulb, Mic, CircleStar} from 'lucide-react';


const STATS = [
  { icon: CircleStar,     value: 'Flagship Event', label: 'AIChE-VIT' },
  { icon: Lightbulb, value: '36 hrs', label: 'Hackathon' },
  { icon: Users,     value: '300+', label: 'Participants' },
  { icon: Mic,    value: 'Exclusive Talkshow', label: 'Legacy' },
];

const fade = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050B1A]" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-purple opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3"></p>
          <h2 className="section-title">[ About ]</h2>
          <div className="gradient-rule" />
        </motion.div>

        {/* two-col */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">

          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-hover p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-10 rounded-full"
                style={{ background: 'linear-gradient(to bottom, #00C2FF, #7B5BF2)' }}
              />
              <h3 className="font-orbitron font-bold text-lg text-chem-text tracking-wide">
                Chem-A-Thon 7.0 
              </h3>
            </div>
            <p className="font-exo text-chem-muted leading-relaxed text-[15px] mb-4">
              Chem-A-Thon is the flagship event of AIChE VIT, an annual competition welcoming
              undergraduate students from universities around the world. It is a <span className="text-chem-blue font-semibold">36-hour hackathon</span> where
              students tackle problem statements spanning various fields of Chemical Engineering
              and must design working models.
            </p>
            <p className="font-exo text-chem-muted leading-relaxed text-[15px]">
              It brings together diverse minds to confront industrial challenges, transforming
              them into structured strategies and real-world solutions. Through expert interactions,
              practical problem solving, and targeted skill development, participants gain the ability
              to apply knowledge where it truly matters.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-hover p-8 border border-[rgba(0,255,135,0.08)]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-10 rounded-full"
                style={{ background: 'linear-gradient(to bottom, #00FF87, #00C2FF)' }}
              />
              <h3 className="font-orbitron font-bold text-lg text-chem-text tracking-wide">
                Chem-A-Thon 6.0 — Legacy
              </h3>
            </div>
            <p className="font-exo text-chem-muted leading-relaxed text-[15px] mb-4">
              The sixth edition set a strong benchmark for the event it represents today. Students
              tackled a real-world problem statement encompassing multiple areas of Chemical
              Engineering, designing and fabricating models to address specific challenges.
            </p>
            <p className="font-exo text-chem-muted leading-relaxed text-[15px]">
              Over 36 hours of intensive collaboration, the hackathon connected participants with
              VIT faculty and featured an industry expert talk show. The final phase saw completed
              models evaluated by industry professionals on technical merit and presentation quality.
            </p>
          </motion.div>
        </div>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass-hover p-6 flex flex-col items-center gap-3 text-center"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.18)' }}
              >
                <Icon size={20} style={{ color: '#00C2FF' }} strokeWidth={1.8} />
              </div>
              <span
                className="font-orbitron font-bold text-xl"
                style={{ color: '#00C2FF', textShadow: '0 0 18px rgba(0,194,255,0.5)' }}
              >
                {value}
              </span>
              <span className="font-exo text-xs text-chem-muted uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
