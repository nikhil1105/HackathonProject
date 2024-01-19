import React from 'react'
import "../App.css";
import Nav from './Navbar';

function Landing() {
  return (
    <div>
      <Nav/>
        <div className=' flex items-center landing-main h-[100vh] w-[100vw] ' >
            <div className=' p-5 ' >
                <div  className=' capitalize sm:w-[60vw] lg:w-[40vw] text-[30px] text-white font-bold p-10 rounded-2xl bg-gray-600 border-4 text-center  ' >
                All the suffering, stress, and addiction comes from not realizing you already are what you are looking for.<br/>
                <button className=' mx-4 px-2 rounded-2xl  border-4 border-[#a88d8d80] bg-white text-black hover:bg-slate-400' > Let’s Be Drug Free. </button>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Landing
