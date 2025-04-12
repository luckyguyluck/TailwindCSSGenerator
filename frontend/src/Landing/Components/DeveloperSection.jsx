import MyImage from "../../assets/myimage.jpg"

function DeveloperSection(){

  return (
    <>
    <section className="py-16 bg-cyan-700 text-center dark:bg-cyan-800">
  <h2 className="text-3xl font-semibold text-white mb-8 dark:text-cyan-100">Developed By</h2>
  <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-center items-stretch">
    
    {/* Developer - You */}
    <div className="contributor bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs w-full dark:bg-gray-900 flex flex-col h-full">
      <img
        src={MyImage}
        alt="Developer"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400"
      />
      <p className="text-lg text-gray-400 mb-4 dark:text-gray-300 flex-grow">
        "Tailwind Generator was built with love to help developers create stunning, responsive designs quickly."
      </p>
      <h3 className="text-xl font-semibold text-cyan-200 mb-2 dark:text-cyan-100">Luck</h3>
      <p className="text-sm text-gray-400 dark:text-gray-300">Lead Developer</p>
    </div>
  </div>
</section>

</>
  )
}

export default DeveloperSection