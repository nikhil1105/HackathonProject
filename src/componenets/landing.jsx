import React from 'react'
import "../App.css";

function Landing() {
  return (
    <div>
        <div className=' flex items-center landing-main h-[100vh] w-[100vw] ' >
            <div className=' p-5 ' >
                <div  className=' sm:w-[60vw] lg:w-[40vw] text-[30px] text-white font-bold p-10 rounded-2xl bg-gray-600 border-4  ' >
                All the suffering, stress, and addiction comes from not realizing you already are what you are looking for.
                <button className=' mx-4 px-2 rounded-2xl  border  ' > Too smart to start </button>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Landing
