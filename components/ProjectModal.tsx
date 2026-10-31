'use client';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  achievements: string[];
  date: string;
  category: 'llm' | 'vision' | 'data-science' | 'fullstack';
  links?: { label: string; url: string }[];
}

const categoryColors = {
  research: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700',
  systems: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-700',
  applied: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-700',
};

const categoryBadgeColors = {
  research: 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200',
  systems: 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200',
  applied: 'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200',
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
          categoryColors[project.category]
        } border-2 shadow-2xl transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 p-6 border-b border-gray-200 dark:border-slate-700 flex items-start justify-between transition-colors">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
            <p className="text-lg text-blue-700 dark:text-blue-400 font-medium mb-3">{project.subtitle}</p>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  categoryBadgeColors[project.category]
                }`}
              >
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none transition-colors hover:scale-125"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">What came out of it</h3>
            <ul className="space-y-3">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills/Tags */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tools & methods</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Resources</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 font-medium hover:scale-105"
                  >
                    {link.label}
                    <span className="text-sm">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 p-6 flex gap-3 transition-colors">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 font-medium hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
