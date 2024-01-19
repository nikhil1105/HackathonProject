import { useState } from "react";

export const Registration = () => {
  const [name,setname]=useState()
  const [lname,setlname]=useState()
  const [num,setnum]=useState()
  const [email,setemail]=useState()
  const [age,setage]=useState()
  const [adic,setadic]=useState()


  function submit(e) {
    
  }

  return (
    <div className="main  w-[100vw] bg-cyan-300 h-[100vh]">
      <div className="part1 text-[40px] text-center w-[100vw] my-5">
        <h1>Welcome</h1>
      </div>
      <div className=" bg-white rounded-2xl border border-gray-500 m-6 p-5 w-fit">
        <form onSubmit={submit}>
        <label>Name</label>
        <br />
        <input className=" border-black m-1 " type="text" onChange={(e)=>{setname(e.target.value)}}  placeholder="First" />
        <input type="text" onChange={(e)=>{setlname(e.target.value)}}  placeholder="Last" />
        <br />
        <label>Contact Phone Number</label>
        <br />
        <input type="text" onChange={(e)=>{setnum(e.target.value)}}  placeholder="number" />
        <br />
        <label>Your Age</label>
        <br />
        <input type="text" onChange={(e)=>{setage(e.target.value)}} placeholder="age" />
        <br />
        <label>Email Address</label>
        <br />

        <input type="text"  onChange={(e)=>{setemail(e.target.value)}}  placeholder="email" />
        <br />

        <label>Type(s) Of Substance(s) Abused</label>
        <br />

        <select  onChange={(e)=>{setadic(e.target.value)}} >
        <option value="select">Select</option>
          <option value="smoking">Smoking Addiction</option>
          <option value="alcohol">Alcohol Addiction</option>
          <option value="cocaine">Cocaine Addiction</option>
          <option value="tobacco">Tobacco Addiction</option>
          <option value="smoking">Cannabis</option>
        </select>
        <br />


        <input className="border-2 border-black rounded-2xl p-2 my-2 bg-black text-white " type="submit"/>
        </form>


      </div>
    </div>
  );
};
