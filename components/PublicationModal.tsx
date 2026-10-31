'use client';

interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  keyPoints: string[];
}

export default function PublicationModal({
  publication,
  onClose,
}: {
  publication: Publication;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-200 dark:border-blue-700 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-blue-50 dark:bg-blue-950/50 p-6 border-b border-blue-200 dark:border-blue-700 flex items-start justify-between transition-colors">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 rounded-full text-sm font-semibold mb-3">
              {publication.year}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">"{publication.title}"</h2>
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
          {/* Authors & Venue */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Publication Details</h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Authors:</span> {publication.authors}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Venue:</span> {publication.venue}
              </p>
              {publication.doiUrl && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">DOI:</span>{' '}
                  <a
                    href={publication.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 underline transition-colors"
                  >
                    {publication.doi}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">About the work</h3>
            <ul className="space-y-3">
              {publication.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 p-6 transition-colors">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 font-medium hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
