

function DeveloperSection(){


    return(
        <>
            {/* Developed By Section */}
      <section className="py-16 bg-cyan-700 text-center dark:bg-cyan-800">
        <h2 className="text-3xl font-semibold text-white mb-8 dark:text-cyan-100">Developed By</h2>
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className="contributor bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs dark:bg-gray-900">
            <p className="text-lg text-gray-400 mb-4 dark:text-gray-300">"Tailwind Generator was built with love to help developers create stunning, responsive designs quickly."</p>
            <h3 className="text-xl font-semibold text-cyan-200 mb-2 dark:text-cyan-100">Your Name</h3>
            <p className="text-sm text-gray-400 dark:text-gray-300">Lead Developer</p>
          </div>
          <div className="contributor bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs dark:bg-gray-900">
            <p className="text-lg text-gray-400 mb-4 dark:text-gray-300">"I contributed to the design system to make the project visually appealing and user-friendly."</p>
            <h3 className="text-xl font-semibold text-cyan-200 mb-2 dark:text-cyan-100">Contributor 2</h3>
            <p className="text-sm text-gray-400 dark:text-gray-300">Designer</p>
          </div>
          <div className="contributor bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs dark:bg-gray-900">
            <p className="text-lg text-gray-400 mb-4 dark:text-gray-300">"I focused on optimizing performance and ensuring smooth user experience across devices."</p>
            <h3 className="text-xl font-semibold text-cyan-200 mb-2 dark:text-cyan-100">Contributor 3</h3>
            <p className="text-sm text-gray-400 dark:text-gray-300">Backend Developer</p>
          </div>
        </div>
      </section>
        
        </>
    )
}

export default DeveloperSection