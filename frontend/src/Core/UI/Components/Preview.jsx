import Screensizebtn from "./screensizebtn";


function Preview(){

    const screenSizes = {
        full: 'w-full',         // Full width (Window/Responsive mode)
        desktop: 'w-3/4',       // Desktop-like
        laptop: 'w-2/3',        // Laptop
        tablet: 'w-1/2',        // Tablet
        mobile: 'w-1/3',        // Mobile-ish
        tiny: 'w-1/4',          // Small mobile or preview constraint
      };

    return(

        <div className="w-full">
           <Screensizebtn screenSizes = {screenSizes}/>

           <div className="preview w-full h-full dark:bg-cyan-700 p-2 rounded-lg">
                <div className="border rounded-sm p-2 h-screen flex justify-center items-center">
                    Here's preview section
                </div>
           </div>
        </div>
    )

}


export default Preview;