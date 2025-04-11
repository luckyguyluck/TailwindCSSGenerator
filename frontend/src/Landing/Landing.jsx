import React from 'react';
import FeatureSection from './Components/FeatureSection';
import DeveloperSection from './Components/DeveloperSection';

function Landing() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero bg-cyan-800 text-white py-16 flex flex-col items-center text-center dark:bg-cyan-900">
        <h1 className="text-5xl font-bold mb-4 text-white dark:text-cyan-100">Create Beautiful Components with Tailwind CSS</h1>
        <p className="text-lg mb-8 text-gray-200 dark:text-gray-300">Easily generate components like Cards, Navbars, and Forms in minutes with Tailwind Generator.</p>
        <a
          href="/generator"
          className="px-6 py-3 bg-cyan-700 text-white rounded-md text-lg font-semibold 
            hover:bg-fuchsia-900 transition
            dark:hover:bg-fuchsia-600 
          dark:bg-cyan-500 dark:text-cyan-900"
        >
          Start Building
        </a>
      </section>

        <div className="w-full">
            <FeatureSection />
        </div>


        <div className="w-full">
            <DeveloperSection />
        </div>

    </div>
  );
}

export default Landing;
