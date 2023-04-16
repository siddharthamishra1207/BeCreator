import React from 'react'
import Card from '../Card'
import rank from './Rank1.svg'


const Rank = () => {
  return (
    <div >
     <img src={rank}/>
    <div className='bg-mycolor '> 

     <div class="container  ">
                <div class="text-center ">     
                    <h1 class="sm:text-3xl text-5xl font-black title-font text-gray-900 mb-4">CREATORS OF THE WEEK</h1>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                </div>
   
      <section class="pb-10 m-20">
        <div class="container mx-auto px-4"> </div>
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg">
                
                  <Card/>
                
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center ">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  
                  <Card/>
                  
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words  w-full mb-8 shadow-lg rounded-lg border-3">
                <div class="px-4 py-5 flex-auto">
                  
                 <Card/>
                  
                </div>
              </div>
            </div>
          </div>
           
      </section>
      </div>
    </div>
  )
}

export default Rank
