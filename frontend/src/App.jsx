import Landing from "./Landing/Landing"
import TopNav from "./TopNav/TopNav"
import Footer from "./Components/Footer"
import {Router , Routes, Route} from "react-router-dom"

function App() {

  return (
    <>

      <div className="w-full min-h-screen dark:bg-gray-950 bg-cyan-100">
        {/* Top nav */}
        <div className="w-full fixed">
          <TopNav />
        </div>
        <div className="w-full min-h-screenm pt-16">
            <Routes>
              <Route path="/" element={<Landing />}></Route>
            </Routes>
        </div>
        <div className="w-full">
          <Footer></Footer>
        </div>
      </div>
    
    </>
  )
}

export default App
