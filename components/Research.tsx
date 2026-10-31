'use client';

import { useState } from 'react';
import PublicationModal from './PublicationModal';

interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  keyPoints: string[];
}

const allPublications: Publication[] = [
  {
    authors: 'U. Desai, T. Kulkarni, J. S. Jacob, N. Patil, M. Bedekar',
    title: 'Developing a Digital Twin of the Subsea System',
    venue: '2024 5th International Conference on Image Processing and Capsule Networks (ICIPCN)',
    year: 2024,
    doi: '10.1109/ICIPCN63822.2024.00151',
    doiUrl: 'https://doi.org/10.1109/ICIPCN63822.2024.00151',
    keyPoints: [
      'Built a digital twin of a reciprocating air compressor',
      'Polynomial Regression: RMSE 0.09 (outlet temp) / 0.036 (pressure)',
      'AdaBoost: RMSE 0.019 (air flow)',
    ],
  },
  {
    authors: 'J. Ghorpade-Aher and U. Desai',
    title: 'A Recap into the Application of Natural Language Processing for Identification of Cognitive Impairment in Patients',
    venue: '2025 1st International Conference on AIML-Applications for Engineering & Technology (ICAET)',
    year: 2025,
    doi: '10.1109/ICAET63349.2025.10932196',
    doiUrl: 'https://doi.org/10.1109/ICAET63349.2025.10932196',
    keyPoints: [
      'Systematic review of NLP for cognitive decline detection',
      'Benchmarking: BERT, LASSO, Random Forest, Gradient Boosting, SVM',
      'Healthcare NLP applications',
    ],
  },
  {
    authors: 'S. Sonawani, J. S. Jacob, U. Desai, N. Deokar',
    title: 'Advancements in Football Analytics: Optimising Expected Goals Modelling Using Machine Learning',
    venue: 'International Conference on Data Analytics and Insights, Springer Nature Singapore',
    year: 2024,
    doi: '10.1007/978-981-96-3287-9_31',
    doiUrl: 'https://doi.org/10.1007/978-981-96-3287-9_31',
    keyPoints: [
      'Improved expected-goals models using StatsBomb data',
      'Used SMOTENC to account for the imbalance between goals and non-goals',
      'LightGBM achieving Brier Score 0.0684',
    ],
  },
  {
    authors: 'N. Deokar, M. Singh, J. S. Jacob, U. Desai, S. Sonawani',
    title: 'Mitigating Climate Change Impact Through Smart Agriculture — Soil Temperature Analysis and Forecasting',
    venue: 'National Conference on Control Instrumentation System Conference, Springer Nature Singapore',
    year: 2023,
    doi: '10.1007/978-981-97-5157-0_29',
    doiUrl: 'https://doi.org/10.1007/978-981-97-5157-0_29',
    keyPoints: [
      'Comparative regression analysis: RF, SVR, KNN, GB, AdaBoost',
      'AdaBoost R² = 0.986 / 0.809',
      'NERC meteorological data 2016–2018',
    ],
  },
];

export default function Research() {
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

  return (
    <section id="research" className="py-20 md:py-32 bg-gradient-to-b from-blue-200 to-blue-100 dark:from-blue-300 dark:to-blue-200 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Research & Publications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My research at Rutgers focused on how models learn from other models. I’ve also co-authored the four papers below, on digital twins, language and cognition, football analytics, and soil temperature forecasting.
          </p>
        </div>

        {/* Research Position */}
        <div className="mb-16 p-8 bg-gradient-to-r from-amber-50 dark:from-amber-950/30 to-orange-50 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-700 rounded-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up interactive-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Research Assistant</h3>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Rutgers University</p>
            </div>
            <span className="px-3 py-1 bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 rounded-full text-sm font-semibold">
              May 2026 — Aug 2026
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I worked with Prof. Lesia Semenova on a question in knowledge distillation: when equally accurate teacher models behave differently, how do those differences affect their students?
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Research Focus</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="font-bold text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-700 dark:text-gray-300">Model multiplicity and Rashomon sets</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="font-bold text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-700 dark:text-gray-300">How uncertainty carries through distillation when teachers have access to extra information</span>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <span className="font-bold text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-700 dark:text-gray-300">Derived closed-form results for linear and logistic models</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Research areas</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-300 dark:border-amber-700 hover:scale-110 transition-transform">
                  ML Theory
                </span>
                <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-300 dark:border-amber-700 hover:scale-110 transition-transform">
                  Mathematical Foundations
                </span>
                <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-300 dark:border-amber-700 hover:scale-110 transition-transform">
                  Knowledge Distillation
                </span>
                <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-300 dark:border-amber-700 hover:scale-110 transition-transform">
                  Rashomon Sets
                </span>
                <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-300 dark:border-amber-700 hover:scale-110 transition-transform">
                  Uncertainty Quantification
                  </span>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {allPublications.map((pub, idx) => (
            <div
              key={pub.title}
              onClick={() => setSelectedPublication(pub)}
              className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-700 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:scale-105 hover:-translate-y-2 fade-in-up interactive-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 rounded-full text-sm font-semibold">
                    {pub.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">"{pub.title}"</h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
              <p className="text-blue-700 dark:text-blue-300 font-medium text-sm mb-4">{pub.venue}</p>

              <div className="flex gap-2">
                {pub.keyPoints.slice(0, 1).map((point, i) => (
                  <span key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                    {point.length > 50 ? point.substring(0, 50) + '...' : point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publication Detail Modal */}
      {selectedPublication && (
        <PublicationModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}
    </section>
  );
}
