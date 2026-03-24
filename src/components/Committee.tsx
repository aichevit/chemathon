import { motion } from 'framer-motion';
import { Crown, Star, Shield, Users, Microscope } from 'lucide-react';

const SECTIONS = [
  {
    tier: 'Honourable Patron',
    icon: Crown,
    accent: '245,158,11',
    accentHex: '#F59E0B',
    single: true,
    members: [
      {
        name:  'Dr. G. Viswanathan',
        role:  'Founder & Chancellor',
        org:   'VIT',
        image: '/patron/vishwa.jpg',
      },
    ],
  },
  {
    tier: 'Patrons',
    icon: Star,
    accent: '0,194,255',
    accentHex: '#00C2FF',
    single: false,
    members: [
      { name: 'Dr. Sankar Viswanathan', role: 'Vice President', org: 'VIT', image: '/patron/sankar.jpg' },
      { name: 'Dr. Sekar Viswanathan',  role: 'Vice President', org: 'VIT', image: '/patron/sekar.jpg' },
      { name: 'Dr. G. V. Selvam',       role: 'Vice President', org: 'VIT', image: '/patron/selvam.jpg' },
    ],
  },
  {
    tier: 'Co-Patrons',
    icon: Shield,
    accent: '123,91,242',
    accentHex: '#7B5BF2',
    single: false,
    members: [
      { name: 'Dr. V S Kanchana Bhaaskaran', role: 'Vice Chancellor',    org: 'VIT', image: '/patron/kanchana.jpg' },
      { name: 'Dr. Partha Sharathi Mallick', role: 'Pro-Vice Chancellor', org: 'VIT', image: '/patron/partha.jpg' },
      { name: 'Dr. Sandhya Pentareddy',      role: 'Executive Director',  org: 'VIT', image: '/patron/sandhya.jpg' },
      { name: 'Dr. T. Jayabarathi',          role: 'Registrar',           org: 'VIT', image: '/patron/jayabarathi.jpg' },
      {name: 'Ms. Kadhambari S. Viswanathan', role: 'Assistant Vice President', org: 'VIT', image: '/patron/kadhambarig.jpeg' },
    ],
  },
  {
    tier: 'Convenors',
    icon: Users,
    accent: '0,255,135',
    accentHex: '#00FF87',
    single: false,
    members: [
      { name: 'Dr. S. Velu',  role: 'Dean',     org: 'SCHEME',                    image: '/patron/velu.jpg' },
      { name: 'Dr. CD Naiju', role: 'Director',  org: 'Office of Student Welfare', image: '/patron/naiju.jpg' },
    ],
  },
  {
    tier: 'Coordinators',
    icon: Microscope,
    accent: '99,179,237',
    accentHex: '#63B3ED',
    single: false,
    members: [
      { name: 'Dr. Monash P',          role: 'Faculty Coordinator, AIChE VIT', org: 'VIT',    image: '/patron/monash.jpg' },
      { name: 'Dr. A. Babu Ponnusami', role: 'Faculty',                        org: 'SCHEME', image: '/patron/babu.jpg' },
      { name: 'Dr. Chitra D',          role: 'Faculty',                        org: 'SCHEME', image: '/patron/chitra.jpg' },
      { name: 'Dr. Aslam Abdullah M',  role: 'Head of Department',             org: 'SCHEME', image: '/patron/aslam.jpg' },
    ],
  },
];

function Avatar({
  name,
  image,
  accentR,
  size = 'md',
}: {
  name:    string;
  image:   string;
  accentR: string;
  size?:   'lg' | 'md' | 'sm';
}) {
  const dim =
    size === 'lg' ? 'w-28 h-28 text-2xl' :
    size === 'md' ? 'w-20 h-20 text-base' :
                   'w-14 h-14 text-xs';

  const initials = name
    .split(' ')
    .filter(w => w.length > 1 && !['Dr.', 'Mr.', 'Ms.'].includes(w))
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  if (image) {
    return (
      <div
        className={`${dim} rounded-2xl overflow-hidden flex-shrink-0`}
        style={{
          border:    `2px solid rgba(${accentR}, 0.4)`,
          boxShadow: `0 0 24px rgba(${accentR}, 0.25), 0 0 0 1px rgba(${accentR},0.1)`,
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`${dim} rounded-2xl flex items-center justify-center font-orbitron font-bold flex-shrink-0 select-none`}
      style={{
        background:  `linear-gradient(135deg, rgba(${accentR},0.22) 0%, rgba(${accentR},0.06) 100%)`,
        border:      `1px solid rgba(${accentR}, 0.35)`,
        boxShadow:   `0 0 22px rgba(${accentR}, 0.14), inset 0 1px 0 rgba(255,255,255,0.06)`,
        color:       `rgb(${accentR})`,
        textShadow:  `0 0 14px rgba(${accentR},0.6)`,
      }}
    >
      {initials}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MEMBER CARD
   ════════════════════════════════════════════════════════════════════════ */
function MemberCard({
  member,
  accent,
  accentHex,
  size = 'md',
  i,
}: {
  member:    { name: string; role: string; org: string; image: string };
  accent:    string;
  accentHex: string;
  size?:     'lg' | 'md' | 'sm';
  i:         number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.09 }}
      className="glass-hover flex flex-col items-center text-center gap-4 p-6"
      style={{ border: `1px solid rgba(${accent}, 0.12)` }}
    >
      <Avatar
        name={member.name}
        image={member.image}
        accentR={accent}
        size={size}
      />

      <div>
        <h4
          className={`font-orbitron font-bold leading-tight mb-1 ${size === 'lg' ? 'text-base' : 'text-[13px]'}`}
          style={{ color: `rgb(${accent})` }}
        >
          {member.name}
        </h4>
        <p className="font-exo text-xs text-chem-muted/80 leading-snug">{member.role}</p>
        <p
          className="font-mono text-[9px] uppercase tracking-[0.18em] mt-1.5 px-2 py-0.5 rounded-full inline-block"
          style={{
            color:      accentHex,
            background: `rgba(${accent},0.1)`,
            border:     `1px solid rgba(${accent},0.18)`,
          }}
        >
          {member.org}
        </p>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   SECTION BLOCK  (one tier at a time)
   ════════════════════════════════════════════════════════════════════════ */
function CommitteeSection({
  section,
  delay,
}: {
  section: (typeof SECTIONS)[number];
  delay:   number;
}) {
  const { tier, icon: Icon, accent, accentHex, members, single } = section;

  const colClass =
    members.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' :
    members.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto' :
    members.length === 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto' :
                           'grid-cols-2 sm:grid-cols-4 max-w-4xl mx-auto';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="mb-14"
    >
      {/* tier label row */}
      <div className="flex items-center gap-4 mb-7">
        <div className="h-px flex-1" style={{ background: `rgba(${accent},0.18)` }} />
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: `rgba(${accent},0.12)`, border: `1px solid rgba(${accent},0.25)` }}
          >
            <Icon size={15} style={{ color: `rgb(${accent})` }} strokeWidth={2} />
          </div>
          <span
            className="font-orbitron font-bold text-sm tracking-[0.14em] uppercase"
            style={{ color: `rgb(${accent})`, textShadow: `0 0 18px rgba(${accent},0.45)` }}
          >
            {tier}
          </span>
        </div>
        <div className="h-px flex-1" style={{ background: `rgba(${accent},0.18)` }} />
      </div>

      {/* member cards */}
      <div className={`grid gap-5 ${colClass}`}>
        {members.map((m, i) => (
          <MemberCard
            key={m.name}
            member={m}
            accent={accent}
            accentHex={accentHex}
            size={single ? 'lg' : 'md'}
            i={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════════════════════════════ */
export function Committee() {
  return (
    <section id="committee" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040A18]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-radial-blue opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-radial-purple opacity-30 pointer-events-none" />

      {/* corner accent triangles */}
      <div
        className="absolute top-0 left-0 w-56 h-56 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,194,255,0.07) 0%, transparent 60%)',
          clipPath:   'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none"
        style={{
          background: 'linear-gradient(315deg, rgba(123,91,242,0.07) 0%, transparent 60%)',
          clipPath:   'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">[ Organizing Body ]</p>
          <h2 className="section-title">Committee Members</h2>
          <div className="gradient-rule" />
          <p className="font-exo text-chem-muted mt-5 max-w-xl mx-auto text-[15px]">
            The distinguished faculty and administration of VIT Vellore who make
            Chem-A-Thon 7.0 possible.
          </p>
        </motion.div>

        {/* render each tier */}
        {SECTIONS.map((section, i) => (
          <CommitteeSection key={section.tier} section={section} delay={i * 0.08} />
        ))}

        {/* institution footer badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-4 p-6 text-center"
          style={{ border: '1px solid rgba(0,194,255,0.1)', background: 'rgba(0,194,255,0.02)' }}
        >
          <p className="font-mono text-[10px] text-chem-muted/50 uppercase tracking-[0.25em] mb-1">
            Hosted by
          </p>
          <p className="font-orbitron font-bold text-chem-text tracking-wide text-sm">
            AIChE Student Chapter · VIT Vellore
          </p>
          <p className="font-exo text-xs text-chem-muted/60 mt-0.5">
            Office of Students' Welfare &amp; School of Chemical Engineering (SCHEME)
          </p>
        </motion.div>
      </div>
    </section>
  );
}