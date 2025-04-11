function FeatureSection() {
    return (
      <>
        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-800 dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-cyan-200 mb-12 dark:text-cyan-300">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-cyan-200 mb-4 dark:text-cyan-300">Easy to Use and Full Control Over the Design</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Quickly generate components with a simple and intuitive interface, giving you complete control over the design.
                </p>
              </div>
              <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-cyan-200 mb-4 dark:text-cyan-300">Click and Complete Flow</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Easily click through and complete your components without writing any code. It’s that simple!
                </p>
              </div>
              <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-cyan-200 mb-4 dark:text-cyan-300">Component Based</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Build your layout using reusable components that make your design process more efficient.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default FeatureSection;
  