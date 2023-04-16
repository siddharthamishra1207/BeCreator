import React from 'react'
import img2 from './wave.svg'
import 'animate.css';
import imp4 from './lp2.svg'

const FirstPart = () => {
  return (<>

  <section class="text-gray-600 body-font bg-mycolor">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1> */}
                  <h1
                        class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white ">
               <div class="animate__animated animate__bounceInDown">  Transforming </div>
                        <span class="text-5xl sm:text-7xl">
                        <div class="animate__animated animate__backInLeft">      21st century </div>
                        </span>
                        <span class="text-5xl pt-2 sm:text-7xl">
                      <div class="animate__animated animate__backInUp">   Creator Economy </div>
                        </span>

                        {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Creator Economy
      </h1> */}
                    </h1>


      
      {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      <div class="flex justify-center">
       
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}

      </div>
    </div>
    <div >
    <img src={imp4} />

  </div>
  </div>
</section>
<img src={img2}/>
  </>
  
  
  )
}

export default FirstPart