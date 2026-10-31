export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 dark:text-gray-400 py-8 border-t border-gray-800 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p>© 2026 Urvi Desai. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/urvidesai02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white dark:hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/urvi-desai-446359385/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white dark:hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              LinkedIn
            </a>
            <a href="mailto:urvi8785@gmail.com" className="hover:text-white dark:hover:text-blue-300 transition-all duration-300 hover:scale-110">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
