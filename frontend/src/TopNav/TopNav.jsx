function TopNav() {
    return (
      <div className="w-full h-16 flex items-center justify-between px-6 py-3 bg-cyan-100 dark:bg-cyan-800 shadow-sm">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-nowrap text-cyan-900 dark:text-cyan-200">
          Tailwind Generator
        </div>
  
        {/* Nav Items */}
        <div className="flex gap-4 items-center text-cyan-800 dark:text-cyan-100 font-medium">
          <a
            href="/"
            className="px-3 py-2 rounded-md hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="px-3 py-2 rounded-md hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="https://github.com/luckyguyluck/TailwindCSSGenerator"
            target="_blank"
            className="px-3 py-2 rounded-md hover:bg-fuchsia-100 dark:hover:bg-fuchsia-600 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="/generator"
            className="px-4 py-2 bg-cyan-600 text-white dark:bg-cyan-400 dark:text-cyan-950 font-semibold rounded-md hover:scale-[1.03] transition-transform shadow-sm"
          >
            Start Building
          </a>
        </div>
      </div>
    );
  }
  
  export default TopNav;
  