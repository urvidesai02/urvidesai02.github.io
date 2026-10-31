interface ExperienceRole {
  title: string;
  level: 'intern' | 'engineer' | 'lead' | 'researcher';
  company: string;
  period: string;
  highlights: string[];
  impact: { label: string; value: string }[];
  skillsGained: string[];
}

const roles: ExperienceRole[] = [
  {
    title: 'Software Associate (Internship)',
    level: 'intern',
    company: 'Capgemini India',
    period: 'Jun 2023 – Dec 2023',
    highlights: [
      'Built production RESTful services in Flask + MongoDB',
      'Implemented multithreading and WebSocket streaming for real-time performance',
      'Developed Angular front-ends with test-driven approach',
      'Collaborated in Git workflows with code reviews and CI/CD',
    ],
    impact: [
      { label: 'Services', value: '5+' },
      { label: 'Users', value: 'Production' },
      { label: 'Stack', value: 'Full-Stack' },
    ],
    skillsGained: ['Production Systems', 'Full-Stack Dev', 'Team Collaboration', 'Real-Time Systems'],
  },
  {
    title: 'Lead Engineer — ML, IoT & Web Systems',
    level: 'lead',
    company: 'Seriate Innovations (IIT Bombay)',
    period: 'Aug 2024 – Apr 2025',
    highlights: [
      'Grew from sole developer to leading 4 Computer & Electronics Engineers',
      'Architected distributed IoT systems across 50+ sensors with fault-tolerant MQTT',
      'Integrated ML pipelines with live dashboards and WebSocket updates',
      'Designed system infrastructure valued at ₹10–15L+ in contractor quotes',
    ],
    impact: [
      { label: 'Team', value: '4 Engineers' },
      { label: 'Sensors', value: '50+' },
      { label: 'Value', value: '₹15L+' },
    ],
    skillsGained: ['Leadership', 'Systems Design', 'Distributed IoT', 'Team Mentoring'],
  },
  {
    title: 'Research Assistant',
    level: 'researcher',
    company: 'Prof. Lesia Semenova, Rutgers',
    period: 'May 2026 – Aug 2026',
    highlights: [
      'Investigated model multiplicity and knowledge distillation with privileged information',
      'Derived closed-form Rashomon-set results for linear and logistic models',
      'Connected theoretical results with empirical ML behavior',
      'Published findings in peer-reviewed conference',
    ],
    impact: [
      { label: 'Publications', value: '1+' },
      { label: 'Results', value: 'Novel' },
      { label: 'Domain', value: 'ML Theory' },
    ],
    skillsGained: ['Research Methodology', 'Mathematical Analysis', 'Academic Writing', 'ML Theory'],
  },
  {
    title: 'Teaching Assistant',
    level: 'engineer',
    company: 'Rutgers University',
    period: 'Sep 2026 – Present',
    highlights: [
      'Teach CS461 (Machine Learning Principles) — core ML concepts and implementation',
      'Taught CS206 (Discrete Structures II) — set theory, probability, combinatorics',
      'Design problem sets and provide structured guidance to 40+ students',
      'Grade assignments with detailed feedback on correctness and reasoning',
    ],
    impact: [
      { label: 'Students', value: '40+' },
      { label: 'Courses', value: '2' },
      { label: 'Type', value: 'Education' },
    ],
    skillsGained: ['Teaching', 'Communication', 'Curriculum Design', 'Mentoring'],
  },
];

const levelConfig = {
  intern: {
    color: 'bg-blue-50 border-blue-300',
    textColor: 'text-blue-700',
    badgeColor: 'bg-blue-200 text-blue-900',
    progressColor: 'from-blue-400 to-cyan-400',
  },
  engineer: {
    color: 'bg-green-50 border-green-300',
    textColor: 'text-green-700',
    badgeColor: 'bg-green-200 text-green-900',
    progressColor: 'from-cyan-400 to-green-400',
  },
  lead: {
    color: 'bg-purple-50 border-purple-300',
    textColor: 'text-purple-700',
    badgeColor: 'bg-purple-200 text-purple-900',
    progressColor: 'from-green-400 to-emerald-500',
  },
  researcher: {
    color: 'bg-amber-50 border-amber-300',
    textColor: 'text-amber-700',
    badgeColor: 'bg-amber-200 text-amber-900',
    progressColor: 'from-emerald-500 to-amber-500',
  },
};

const levelLabels = {
  intern: { label: 'Intern', icon: '🌱' },
  engineer: { label: 'Engineer', icon: '⚙️' },
  lead: { label: 'Lead', icon: '👥' },
  researcher: { label: 'Researcher', icon: '🔬' },
};

export default function Experience() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">
            My work has taken me from building production software to leading an engineering team, researching ML,
            and teaching at Rutgers.
          </p>
        </div>

        {/* Progress Arc */}
        <div className="mb-16 relative h-32">
          <svg className="w-full h-full" viewBox="0 0 1000 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#06b6d4" />
                <stop offset="66%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Progress line */}
            <path
              d="M 50 100 Q 500 20, 950 100"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />

            {/* Milestone dots */}
            {[
              { x: 50, label: 'Intern' },
              { x: 350, label: 'Engineer' },
              { x: 650, label: 'Lead' },
              { x: 950, label: 'Researcher' },
            ].map((milestone, i) => (
              <g key={i}>
                <circle cx={milestone.x} cy="100" r="14" fill="white" stroke="url(#progressGradient)" strokeWidth="4" />
                <text x={milestone.x} y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">
                  {milestone.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {roles.map((role, idx) => (
            <div key={idx} className={`border-2 rounded-lg p-8 ${levelConfig[role.level].color}`}>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{levelLabels[role.level].icon}</span>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${levelConfig[role.level].badgeColor}`}>
                      {levelLabels[role.level].label}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${levelConfig[role.level].textColor}`}>
                    {role.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">{role.company}</p>
                  <p className="text-sm text-gray-600 mt-1">{role.period}</p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-300">
                {role.impact.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl font-bold ${levelConfig[role.level].textColor}`}>{metric.value}</div>
                    <p className="text-xs text-gray-600 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Contributions</h4>
                <ul className="space-y-2">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`${levelConfig[role.level].textColor} font-bold mt-1 flex-shrink-0`}>→</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {role.skillsGained.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Accumulation Summary */}
        <div className="mt-16 bg-white border-2 border-gray-300 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Skills I’ve built along the way</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technical</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'Production Systems',
                  'Distributed IoT',
                  'ML Pipelines',
                  'Real-Time Systems',
                ].map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Leadership & Communication</h4>
              <div className="flex flex-wrap gap-2">
                {['Team Leadership', 'Teaching', 'System Design', 'Mentoring', 'Research Writing'].map((skill, i) => (
                  <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
