export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-blue-100 dark:border-slate-800 backdrop-blur-sm shadow-sm dark:shadow-lg transition-colors duration-300">
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
          Urvi Desai
        </a>
        <div className="flex items-center gap-8">
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:scale-110">
            Skills
          </a>
          <a href="#timeline" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:scale-110">
            Timeline
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:scale-110">
            Projects
          </a>
          <a href="#research" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:scale-110">
            Research
          </a>
          <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-slate-700">
            <a
              href="mailto:urvi8785@gmail.com"
              title="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm hover:scale-110"
            >
              Email
            </a>
            <a
              href="https://github.com/urvidesai02"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/urvi-desai-446359385/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm hover:scale-110"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
