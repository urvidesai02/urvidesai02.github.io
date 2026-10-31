export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white py-20 md:py-32 transition-colors duration-300">
      <div className="section-container">
        <div className="max-w-3xl fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I’m Urvi.
          </h1>
          <p className="text-lg md:text-xl text-blue-50 dark:text-blue-100 mb-8 leading-relaxed">
            I’m a computer science master’s student at Rutgers, working on machine learning and the software around it.  
            I study how models learn and behave,and build systems that bring their capabilities to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary bg-white dark:bg-blue-100 text-blue-700 dark:text-blue-900 hover:bg-blue-50 dark:hover:bg-white text-center">
              See My Work
            </a>
            <a
              href="https://github.com/urvidesai02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border border-white text-white hover:bg-white dark:hover:bg-blue-100 hover:text-blue-700 dark:hover:text-blue-900 text-center"
            >
              GitHub
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-blue-300 dark:border-blue-700 border-opacity-30">
            <p className="text-sm text-blue-100 dark:text-blue-200 mb-3">A few highlights</p>
            <div className="flex flex-wrap gap-6 text-blue-50 dark:text-blue-100">
              <span>• Peer-reviewed research</span>
              <span>• HackHERS winner · Bitcamp runner-up</span>
              <span>• Former lead engineer at Seriate Innovations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
