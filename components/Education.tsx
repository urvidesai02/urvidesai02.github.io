export default function Education() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">
            I studied computer science at MIT-WPU and am now pursuing my master’s at Rutgers, specializing in AI.
          </p>
        </div>

        {/* Timeline Arc */}
        <div className="relative mb-20 h-96">
          {/* SVG Arc */}
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            {/* Gradient arc */}
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Main arc path */}
            <path
              d="M 100 350 Q 500 100, 900 350"
              stroke="url(#arcGradient)"
              strokeWidth="4"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />

            {/* Milestone 1: B.Tech Start (2020) */}
            <circle cx="100" cy="350" r="12" fill="#3b82f6" />
            <text x="100" y="375" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
              2020
            </text>

            {/* Milestone 2: B.Tech End (2024) */}
            <circle cx="400" cy="220" r="12" fill="#06b6d4" />
            <text x="400" y="245" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
              2024
            </text>

            {/* Milestone 3: MS Start (2025) */}
            <circle cx="600" cy="150" r="12" fill="#10b981" />
            <text x="600" y="125" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
              2025
            </text>

            {/* Milestone 4: MS End (2027) */}
            <circle cx="900" cy="350" r="12" fill="#10b981" />
            <text x="900" y="375" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">
              2027
            </text>
          </svg>
        </div>

        {/* Degree Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* B.Tech Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology</h3>
                <p className="text-lg text-blue-700 font-semibold">Computer Science & Engineering</p>
                <p className="text-sm text-gray-600 mt-1">MIT World Peace University, Pune</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-blue-700">9.33</div>
                <div className="text-xs text-gray-600">/10 GPA</div>
              </div>
            </div>

            <div className="my-6 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Aug 2020 — May 2024</span> • 4 years
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Foundation:</span> Data structures, algorithms, databases, operating
                  systems, discrete math
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Core Skills:</span> Computational thinking, problem solving,
                  software engineering fundamentals
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['DSA', 'Databases', 'OS', 'Discrete Math', 'Linear Algebra'].map((skill, i) => (
                <span key={i} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* MS Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Science</h3>
                <p className="text-lg text-green-700 font-semibold">Computer Science (AI Specialization)</p>
                <p className="text-sm text-gray-600 mt-1">Rutgers University, New Brunswick</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-700">3.9</div>
                <div className="text-xs text-gray-600">/4.0 GPA</div>
              </div>
            </div>

            <div className="my-6 pt-6 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Sep 2025 — May 2027</span> • 2 years
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Specialization:</span> Machine learning, NLP, interpretable AI,
                  distributed systems
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Research Focus:</span> Knowledge distillation, model multiplicity,
                  LLM representation editing
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['ML', 'NLP', 'Explainable AI', 'Research', 'Teaching'].map((skill, i) => (
                <span key={i} className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-2">4</div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Publications</span> in peer-reviewed conferences
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700 mb-2">3.9+</div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">GPA Average</span> across both degrees
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700 mb-2">Teaching</div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">TA & RA</span> in machine learning & discrete structures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
