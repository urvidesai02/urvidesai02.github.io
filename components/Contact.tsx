export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-blue-100 to-white dark:from-blue-200 dark:to-slate-900 transition-colors duration-300">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let’s talk</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I’m open to ML roles and research collaborations. If my work overlaps with something you’re working on, I’d like to hear about it.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 dark:from-blue-950/30 to-purple-50 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-12 text-center hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in-up interactive-card">
          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Email is the best way to reach me about work. You can also find me on LinkedIn or take a look at my code on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:urvi8785@gmail.com"
                className="btn-primary bg-blue-700 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-700 hover:scale-105"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t border-blue-200 dark:border-blue-700">
            <a
              href="https://github.com/urvidesai02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-400 font-medium hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/urvi-desai-446359385/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-400 font-medium hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1pl1hRuwCYRYFFFYK14vVjmgykWvZaEaI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-400 font-medium hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:underline"
            >
              Resume / CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
