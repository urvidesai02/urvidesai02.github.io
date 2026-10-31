'use client';

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

const colorConfig = {
  education: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-700',
    badge: 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200',
    header: 'bg-blue-100 dark:bg-blue-900/50',
  },
  experience: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-700',
    badge: 'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200',
    header: 'bg-purple-100 dark:bg-purple-900/50',
  },
};

export default function TimelineModal({ item, onClose }: { item: TimelineItem; onClose: () => void }) {
  const config = colorConfig[item.type];

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${config.bg} border-2 ${config.border} shadow-2xl transition-all transform scale-100 hover:shadow-3xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${config.header} p-6 border-b dark:border-slate-700 sticky top-0 transition-colors`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h2>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{item.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none transition-colors hover:scale-125"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.badge}`}>
              {item.type === 'education' ? 'Education' : 'Experience'}
            </span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.period}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div className="animate-fadeInUp">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
          </div>

          {/* Details */}
          <div className="animate-fadeInUp">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">What I worked on</h3>
            <ul className="space-y-2">
              {item.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="font-bold text-gray-700 dark:text-gray-400 mt-1">→</span>
                  <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          {item.impact && item.impact.length > 0 && (
            <div className="animate-fadeInUp">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Highlights</h3>
              <div className="grid grid-cols-3 gap-4">
                {item.impact.map((metric, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-300 dark:border-slate-700 text-center hover:scale-105 transition-all hover:shadow-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="animate-fadeInUp">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Skills I used</h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-300 dark:border-slate-700 hover:scale-110 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-gray-300 dark:border-slate-700 p-6 transition-colors">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-lg hover:shadow-lg transition-all font-medium hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
