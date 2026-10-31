'use client';

import { useState } from 'react';
import TimelineModal from './TimelineModal';

interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  date: string;
  period: string;
  description: string;
  details: string[];
  impact?: string[];
  skills: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: 'btech-start',
    type: 'education',
    title: 'B.Tech in Computer Science',
    subtitle: 'MIT World Peace University',
    date: '2020',
    period: 'Aug 2020 — May 2024',
    description: 'I studied computer science at MIT-WPU, with coursework in algorithms, databases, operating systems, and mathematics.',
    details: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Discrete Mathematics',
      'Linear Algebra & Probability',
    ],
    impact: ['9.33/10 GPA', '4 years', 'Society of Women Engineers', '5 publications'],
    skills: ['Problem Solving', 'Algorithms', 'Software Engineering Fundamentals'],
  },
  {
    id: 'capgemini',
    type: 'experience',
    title: 'Software Associate',
    subtitle: 'Capgemini India',
    date: '2023',
    period: 'Jun 2023 — Dec 2023',
    description: 'At Capgemini, I built backend services and Angular interfaces for production applications.',
    details: [
      'Built RESTful services in Flask + MongoDB',
      'Implemented WebSocket streaming for real-time performance',
      'Developed Angular front-ends with test coverage',
      'Worked with teammates through Git and code reviews',
    ],
    impact: ['5+ production services', 'Full-stack development', 'CI/CD practices'],
    skills: ['Full-Stack Development', 'Production Systems', 'Team Collaboration'],
  },
  {
    id: 'seriate',
    type: 'experience',
    title: 'Lead Engineer',
    subtitle: 'Seriate Innovations',
    date: '2024',
    period: 'Aug 2024 — Apr 2025',
    description: 'I joined as the only software developer, then grew into leading four engineers on an IoT platform.',
    details: [
      'Started as the sole developer and went on to lead four engineers',
      'Connected 50+ sensors using MQTT and stored their readings in InfluxDB',
      'Designed ML pipelines for anomaly detection',
      'Integrated real-time dashboards with WebSocket updates',
    ],
    impact: ['4 engineers led', '50+ sensors deployed'],
    skills: ['System Architecture', 'Team Leadership', 'Distributed Systems', 'ML Integration'],
  },
  {
    id: 'ms-start',
    type: 'education',
    title: 'M.S. in Computer Science',
    subtitle: 'Rutgers University',
    date: '2025',
    period: 'Sep 2025 — May 2027',
    description: 'I’m pursuing my master’s at Rutgers, specializing in AI and studying machine learning, language models, and interpretable AI.',
    details: [
      'Machine Learning & Natural Language Processing',
      'Interpretable & Explainable AI',
      'Discrete Structures & Graph Theory',
      'Brain-Inspired Computing',
      'Massive Data Mining',
    ],
    impact: ['3.9/4.0 GPA', 'AI Specialization'],
    skills: ['Machine Learning', 'Research', 'Mathematical Foundations', 'Teaching'],
  },
  {
    id: 'teaching-assistant',
    type: 'experience',
    title: 'Teaching Assistant',
    subtitle: 'Rutgers University',
    date: '2026',
    period: 'Jan 2026 — Present',
    description: 'I help students work through machine learning and discrete math, from the concepts to the code and proofs.',
    details: [
      'Teaching CS461 (Machine Learning Principles)',
      'Teaching CS206 (Discrete Structures II)',
      'Design problem sets and provide structured guidance',
      'Grade assignments with detailed feedback',
    ],
    impact: ['2 courses taught', 'Current role'],
    skills: ['Teaching', 'Communication', 'Curriculum Design', 'Mentoring'],
  },
  {
    id: 'research-assistant',
    type: 'experience',
    title: 'Graduate Research Assistant',
    subtitle: 'Rutgers University',
    date: '2026',
    period: 'May 2026 — Aug 2026',
    description: 'With Prof. Lesia Semenova, I studied how differences between equally accurate teacher models carry over to the models that learn from them.',
    details: [
      'Derived closed-form Rashomon-set results for linear & logistic student models',
      'Investigated model multiplicity in knowledge distillation with privileged information',
      'Measured how differences between equally accurate teachers carry through to student models',
      'Validated theoretical results empirically on benchmark datasets',
    ],
    impact: ['Novel theoretical results'],
    skills: ['Research Methodology', 'Mathematical Analysis', 'ML Theory', 'Academic Writing'],
  },
];

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const sortedItems = [...timelineItems].reverse();

  return (
    <section id="timeline" className="py-20 md:py-32 bg-gradient-to-b from-blue-400 to-blue-300 dark:from-blue-500 dark:to-blue-400 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education & Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The places where I’ve studied, built software, led a team, and taught.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 opacity-70 dark:opacity-60" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {sortedItems.map((item, idx) => {
              const isEducation = item.type === 'education';

              return (
                <div key={item.id} className="relative pl-24 fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 transition-all duration-300 hover:scale-125 hover:shadow-lg ${
                      isEducation ? 'bg-blue-500 dark:bg-blue-600' : 'bg-purple-500 dark:bg-purple-600'
                    }`}
                  >
                    <span className="text-white font-bold text-sm">{item.date}</span>
                  </div>

                  {/* Card */}
                  <button
                    onClick={() => setSelectedItem(item)}
                    className={`w-full p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl text-left interactive-card ${
                      isEducation
                        ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-400'
                        : 'bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-400'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-4 transition-colors ${
                          isEducation
                            ? 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200'
                            : 'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200'
                        }`}
                      >
                        {isEducation ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-semibold">{item.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <TimelineModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
