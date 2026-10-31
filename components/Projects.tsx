'use client';

import { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';

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

const allProjects: Project[] = [
  {
    title: 'When Both Sides Learn',
    subtitle: 'Kyle Market Microstructure with Two-Sided Learning Agents',
    description:
      'For my CS 598 research project, I simulated a market where both informed traders and market makers learn through reinforcement learning. I used Q-learning, DQN, and PPO to study whether the Kyle (1985) equilibrium still holds, who profits from private information, and whether the agents settle into a stable pattern or keep changing strategies.',
    tags: ['Reinforcement Learning', 'Market Microstructure', 'DQN', 'Q-Learning', 'Kyle Model', 'Game Theory'],
    achievements: [
      'Tested Kyle equilibrium when both sides learn',
      'Compared single-sided vs. bilateral learning scenarios',
      'Analyzed price informativeness, bid-ask impact (λ), and insider rents vs. benchmarks',
      'Investigated tacit collusion between learning insiders and adaptive market makers',
    ],
    date: '2026-10',
    category: 'llm',
  },
  {
    title: 'Engaged or Absent',
    subtitle: 'Causal Inference on Economic Shocks & School Interventions',
    description:
      'I studied how school interventions and economic changes affect education outcomes. I combined 7,280 findings from 186 programs in a meta-analysis, then used difference-in-differences to examine 18 court-ordered school finance reforms. I also treated 517 Amazon facility openings as a natural experiment, working with 86,000 district-year observations.',
    tags: ['Causal Inference', 'Meta-Analysis', 'DiD', 'FLAME', 'Econometrics'],
    achievements: [
      'Meta-analysis of 7,280+ findings',
      '+0.106 SD effect on school finance reforms',
      'FLAME & propensity score matching for covariate balance',
    ],
    date: '2026-04',
    category: 'data-science',
  },
  {
    title: 'ICONOCLAST',
    subtitle: 'LLM Representation Editing Framework',
    description:
      'I built a Python package for editing how language models behave at inference time, with support for 10 architectures ranging from 1B to 9B parameters. I ran benchmarks across GPUs on Slurm and used Optuna to search for hyperparameters.',
    tags: ['PyTorch', 'LLMs', 'Slurm', 'PEFT', 'Optuna'],
    achievements: [
      'Outperformed baseline on all 10 models',
      'Reduced output divergence by up to 30×',
      'One interface for 10 model architectures',
    ],
    date: '2026-04',
    category: 'llm',
  },
  {
    title: 'Crucible',
    subtitle: 'Adversarial Agentic Security System',
    description:
      'I built a two-agent system that detects prompt-injection attacks and draws on past incidents to propose fixes. Each patch is tested before acceptance: it has to block the attack without making the agent worse at its original task.',
    tags: ['Agentic AI', 'RAG', 'MongoDB', 'LLMs', 'Security'],
    achievements: [
      'Two agents for detecting and responding to attacks',
      'Automated policy generation and validation',
      'Used vector search to find relevant past incidents',
    ],
    date: '2026-08',
    category: 'llm',
  },
  {
    title: 'Diffusion Language Modeling',
    subtitle: 'Structured Text Generation from Scratch',
    description:
      'I implemented three discrete diffusion language models from scratch. The work covered both the math and the code: continuous-time Markov chains, reverse-time sampling, and ELBO/KL bounds for training.',
    tags: ['Diffusion Models', 'PyTorch', 'Transformers'],
    achievements: [
      'Mathematical framework for discrete diffusion',
      'Implemented three models from scratch',
      'Derived an ELBO training bound',
    ],
    date: '2026-04',
    category: 'llm',
  },
  {
    title: 'EyeQ',
    subtitle: 'Real-Time Caregiver Abuse Detection',
    description:
      'I built a real-time system that uses YOLO pose estimation and Gemini to flag potential caregiver abuse and send iOS alerts. One problem was false alarms when people overlapped in a 2D image without actually touching. I traced that to missing depth information and revised the detection logic.',
    tags: ['YOLO', 'Computer Vision', 'iOS', 'LLMs', 'Edge Computing'],
    achievements: [
      'Runner-up, Bitcamp Social Good Track',
      'Real-time detection + native iOS alerts',
      'Debugged depth-information edge case',
    ],
    date: '2026-03',
    category: 'fullstack',
  },
  {
    title: "Can't HackHER",
    subtitle: 'AI-Powered Payment Risk Modeling',
    description:
      'I built a payment system that scores transaction risk using location, amount, and recipient patterns. I added liveness checks designed to resist deepfakes and used Solana for settlement.',
    tags: ['ML', 'Computer Vision', 'Solana', 'FinTech'],
    achievements: [
      'Winner, MLH Best Use of Solana',
      'Real-time risk scoring engine',
      'Biometric verification under constraints',
    ],
    date: '2026-01',
    category: 'fullstack',
  },
  {
    title: 'MedCheck',
    subtitle: 'Medication Verification & Caregiver Platform',
    description:
      'I built medication verification workflows that compare names and strengths before recording a dose. Label recognition runs separately from medication management, with confirmation and eligibility checks between the two.',
    tags: ['FastAPI', 'Flask', 'PostgreSQL', 'React', 'Healthcare'],
    achievements: [
      'Full-stack system design and integration',
      'OCR + verification workflow',
      'Confidence-aware medication tracking',
    ],
    date: '2026-09',
    category: 'fullstack',
  },
  {
    title: 'Pathfinding',
    subtitle: 'Bot Localization & Search Strategies',
    description:
      'I worked on helping a bot find its way through a grid it can only partly observe. I combined BFS and A* search with Bayesian filtering to track possible locations, then built a CNN heuristic to guide the search.',
    tags: ['Algorithms', 'POMDP', 'Bayesian Filtering', 'CNN', 'Python'],
    achievements: [
      'Belief-state filtering for uncertainty under partial observability',
      'CNN-based neural heuristics',
      'Benchmarked against classical planning',
    ],
    date: '2025-11',
    category: 'data-science',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/urvidesai02/Localization_POMDP_NeuralHeuristicSearch',
      },
    ],
  },
  {
    title: 'Personalized Movie Recommendation Engine',
    subtitle: 'High-Performance PageRank on Sparse Graphs',
    description:
      'I built a movie recommender using personalized PageRank and collaborative filtering on more than five million ratings. I worked on memory use and added a Streamlit dashboard with caching to make it easier to explore recommendations.',
    tags: ['PageRank', 'Graph Algorithms', 'SciPy', 'Streamlit', 'Recommendation Systems', 'Python'],
    achievements: [
      'Handled 5M+ ratings efficiently',
      '40% performance improvement over baseline',
      'Streamlit dashboard with cached results',
    ],
    date: '2025-12',
    category: 'data-science',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/urvidesai02/movie_recommendation_personalized_pagerank',
      },
    ],
  },
  {
    title: 'Intelligent Traffic Safety System',
    subtitle: 'Real-Time Vehicle Detection on Edge',
    description:
      'I deployed YOLOv5 on a Raspberry Pi to detect vehicles traveling the wrong way and trigger alerts for traffic authorities. The image processing runs on the device.',
    tags: ['YOLO', 'Computer Vision', 'Raspberry Pi', 'Edge Computing', 'IoT'],
    achievements: [
      'Real-time edge inference',
      'Low-latency response',
      'Ran inference within Raspberry Pi resource limits',
    ],
    date: '2023-05',
    category: 'fullstack',
  },
  {
    title: 'Skin Cancer (Melanoma) Detection',
    subtitle: 'CNN for Dermoscopic Image Classification',
    description:
      'I trained a CNN to classify dermoscopic images for melanoma detection, using data augmentation and transfer learning to improve classification.',
    tags: ['CNN', 'TensorFlow', 'Keras', 'Computer Vision', 'Healthcare'],
    achievements: [
      'Transfer learning on medical images',
      'Data augmentation strategies',
      'Classification optimization',
    ],
    date: '2024-04',
    category: 'vision',
  },
  {
    title: "Alzheimer's Disease Prediction System",
    subtitle: 'Early Detection via Genetic & Clinical Data',
    description:
      'I explored Alzheimer’s prediction using genetic data and clinical biomarkers. I prepared features, reduced the number of input dimensions, and evaluated classification models with cross-validation.',
    tags: ['scikit-learn', 'Feature Engineering', 'Ensemble Methods', 'Healthcare'],
    achievements: [
      'Complex medical data handling',
      'Ensemble method integration',
      'Cross-validation and evaluation',
    ],
    date: '2023-05',
    category: 'vision',
  },
];

const categoryColors = {
  llm: 'bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700',
  vision: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700',
  'data-science': 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700',
  fullstack: 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700',
};

const categoryTextColors = {
  llm: 'text-purple-900',
  vision: 'text-emerald-900',
  'data-science': 'text-amber-900',
  fullstack: 'text-rose-900',
};

const categoryBadgeColors = {
  llm: 'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200',
  vision: 'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200',
  'data-science': 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200',
  fullstack: 'bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200',
};

const categoryDisplayNames = {
  llm: 'LLM & Deep Learning',
  vision: 'Computer Vision',
  'data-science': 'Data Science & Algorithms',
  fullstack: 'Full-Stack ML Products',
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allUniqueTags = useMemo(() => {
    const tags = new Set<string>();
    allProjects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesSearch =
        searchTerm === '' ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTags =
        selectedTags.size === 0 || p.tags.some((tag) => selectedTags.has(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredProjects]);

  const years = useMemo(() => {
    const allYears = new Set<number>();
    allProjects.forEach((p) => {
      allYears.add(new Date(p.date).getFullYear());
    });
    return Array.from(allYears).sort((a, b) => b - a);
  }, []);

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-blue-300 to-blue-200 dark:from-blue-400 dark:to-blue-300 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} — end-to-end ML
            systems from research to production.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-16 space-y-4 fade-in-up">
          <input
            type="text"
            placeholder="Search projects by name or tech..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-blue-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
          />

          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by technology:</p>
            <div className="flex flex-wrap gap-2">
              {allUniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    selectedTags.has(tag)
                      ? 'bg-blue-700 dark:bg-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline + Grid Layout */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects match your search. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="flex gap-8 md:gap-12">
            {/* Left: Timeline */}
            <div className="hidden md:flex flex-col justify-start w-24">
              <div className="space-y-16">
                {years.map((year) => (
                  <div key={year} className="relative">
                    {/* Year label */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border-2 border-gray-400 dark:border-slate-600 rounded text-sm font-bold text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform">
                        {year}
                      </span>
                    </div>
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-12 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 transform -translate-x-1/2 opacity-60"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Project Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.map((project, idx) => (
                  <div
                    key={project.title}
                    onClick={() => setSelectedProject(project)}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 fade-in-up interactive-card flex flex-col h-full ${
                      categoryColors[project.category]
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="mb-2 flex-1">
                      <h3 className={`font-bold text-lg line-clamp-2 ${categoryTextColors[project.category]}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{project.subtitle}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-white dark:bg-slate-700 bg-opacity-70 dark:bg-opacity-50 px-2 py-1 rounded font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs bg-white dark:bg-slate-700 bg-opacity-70 dark:bg-opacity-50 px-2 py-1 rounded font-medium text-gray-700 dark:text-gray-300">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-current border-opacity-20 pt-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ${categoryBadgeColors[project.category]}`}>
                          {categoryDisplayNames[project.category]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
