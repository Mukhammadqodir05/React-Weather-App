import React from 'react'
import background from '/src/assets/background.jpg'
import FirstWeatherAPI from './firstWeatherAPI';
const App = () => {

  return (
   <main className='flex justify-center items-center space-x-[-1px] w-full h-screen  bg-center bg-cover p-2' style={{ backgroundImage: `url(${background})`}}>
         <div>
           <span className='button flex mt-[-190px] rounded-2xl h-[15px] w-[3px] md:w-[2px]'></span>   
           <span className='button flex mt-[20px] rounded-2xl h-[40px] w-[3px]'></span>   
           <span className='button flex mt-[10px] rounded-2xl h-[40px] w-[3px]'></span>   
         </div>
         <FirstWeatherAPI />
         <span className='button mt-[-210px] rounded-2xl h-[65px] w-[3px]'></span>   
   </main>
)};
export default App

