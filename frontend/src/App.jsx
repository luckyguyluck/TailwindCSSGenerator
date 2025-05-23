import Landing from "./Landing/Landing"
import TopNav from "./TopNav/TopNav"
import Footer from "./Components/Footer"
import GeneratorUI from "./Core/UI/GeneratorUI"
import { Routes, Route} from "react-router-dom"
import SafelistHelper from "./Components/SafelistHelper"

function App() {

  return (
    <>

      <div className="w-full min-h-screen dark:bg-gray-950 bg-cyan-100">
        {/* Top nav */}
        <div className="w-full fixed z-50">
          <TopNav />
        </div>
        <div className="w-full min-h-screenm pt-16">
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/generator" element = {<GeneratorUI />}></Route>
            </Routes>
        </div>
        <div className="w-full">
          <Footer></Footer>
        </div>
      </div>
    
    <SafelistHelper />
    </>
  )
}

export default App
