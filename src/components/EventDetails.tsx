import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Clock, Users } from 'lucide-react';

const DETAILS = [
  {
    icon: Calendar,
    color: '#00C2FF',
    label: 'Date',
    value: 'April 25–26, 2026',
    sub: 'Update with actual date',
  },
  {
    icon: MapPin,
    color: '#00FF87',
    label: 'Venue',
    value: 'VIT Vellore',
    sub: 'Tamil Nadu, India',
  },
  {
    icon: Clock,
    color: '#7B5BF2',
    label: 'Duration',
    value: '36 Hours',
    sub: 'Non-stop hackathon',
  },
  {
    icon: Trophy,
    color: '#F59E0B',
    label: 'Prize Pool',
    value: 'TBA',
    sub: 'Exciting rewards await',
  },
  {
    icon: Users,
    color: '#00C2FF',
    label: 'Categories',
    value: '3 Tracks',
    sub: 'Year 1 · Year 2 · Open',
  },
];

export function EventDetails() {
  return (
    <section id="event-details" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#040A18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-0 top-0 w-1/2 h-full bg-radial-blue opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">[ Event Details ]</p>
          <h2 className="section-title">Mark Your Calendar</h2>
          <div className="gradient-rule" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {DETAILS.map(({ icon: Icon, color, label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-hover p-6 flex flex-col items-center text-center gap-4"
            >
              {/* icon ring */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `rgba(${hexToRgb(color)}, 0.1)`,
                  border: `1px solid rgba(${hexToRgb(color)}, 0.25)`,
                  boxShadow: `0 0 20px rgba(${hexToRgb(color)}, 0.12)`,
                }}
              >
                <Icon size={24} style={{ color }} strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-mono text-[10px] text-chem-muted uppercase tracking-[0.2em] mb-1.5">
                  {label}
                </p>
                <p
                  className="font-orbitron font-bold text-base leading-tight"
                  style={{ color, textShadow: `0 0 18px rgba(${hexToRgb(color)},0.5)` }}
                >
                  {value}
                </p>
                <p className="font-exo text-xs text-chem-muted/70 mt-1">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
