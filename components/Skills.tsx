export default function Skills() {
  const skillCategories = [
    {
      name: 'Languages & Core ML',
      skills: ['Python', 'C++', 'C', 'Java', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'SciPy', 'Streamlit'],
    },
    {
      name: 'Distributed Systems & Infrastructure',
      skills: ['MQTT', 'HTTP', 'InfluxDB', 'Slurm', 'Docker', 'REST APIs', 'WebSockets', 'Git', 'Linux/Unix', 'Bash', 'CI/CD', 'Swift'],
    },
    {
      name: 'Web & Full-Stack',
      skills: ['Flask', 'FastAPI', 'Angular', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'LLMs & Agentic AI',
      skills: ['NLP', 'LLMs', 'Knowledge Distillation', 'RAG', 'Agentic AI', 'PEFT', 'Optuna', 'LoRA', 'Transformers', 'Model Probing'],
    },
    {
      name: 'Statistics & Causal Inference',
      skills: [
        'Difference-in-Differences',
        'Event Studies',
        'Propensity Score Matching',
        'FLAME',
        'Meta-Analysis',
        'Regression Discontinuity',
        'Fixed Effects Models',
        'Causal Inference',
      ],
    },
    {
      name: 'Computer Vision & IoT',
      skills:['CNN', 'Diffusion Models', 'OpenCV', ' YOLO', 'Edge Computing', 'Raspberry Pi', 'Arduino', 'Sensor Networks', 'Embedded Systems', 'IoT Protocols', 'MQTT', 'InfluxDB'],
    },
    {
      name: 'Reinforcement Learning & Game Theory',
      skills: ['Reinforcement Learning', 'POMDP', 'Bayesian Filtering', 'DQN', 'Q-Learning', 'Game Theory', 'Markov Decision Processes', 'POMDPs'],
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The tools and methods I use to train models, run experiments, and build the applications around them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-700 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up interactive-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-700 font-medium text-sm hover:scale-110 hover:shadow-md dark:hover:shadow-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
