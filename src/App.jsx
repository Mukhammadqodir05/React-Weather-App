import React, { useState, useEffect } from 'react'
import background from '/src/assets/background.jpg'
import FirstWeatherAPI from './firstWeatherAPI';
const App = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, []);
  
  return (
  <main className='flex w-full h-screen justify-center items-center bg-gray-600'> 
   { imageLoaded ? 
    <div className='flex justify-center items-center space-x-[-1px] w-full h-screen  bg-center bg-cover p-2' style={{ backgroundImage: `url(${background})`}}>
      <div>
        <span className='button flex mt-[-190px] rounded-2xl h-[15px] w-[3px] md:w-[2px]'></span>   
        <span className='button flex mt-[20px] rounded-2xl h-[40px] w-[3px]'></span>   
        <span className='button flex mt-[10px] rounded-2xl h-[40px] w-[3px]'></span>   
      </div>
      <FirstWeatherAPI />
      <span className='button mt-[-210px] rounded-2xl h-[65px] w-[3px]'></span>   
    
      </div> : (
         <div className="animate-pulse rounded-lg shadow-lg border p-2 h-[600px] w-80">
         <div className="h-[582px] bg-gray-200 rounded-lg" > 
           <div className="h-[25px] top-[75px] absolute bg-black rounded-full w-[120px] my-2 ml-[90px]" /> 
           <div className="h-2 bottom-[75px] absolute bg-black rounded w-[120px] my-2 ml-[90px]" /> 
         </div>
       </div>
      )}
   </main>
)};
export default App
