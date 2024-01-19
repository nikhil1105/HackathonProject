import {  } from "module";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Landing from "./componenets/landing";
import { Registration } from "./componenets/registration";
import About from "./componenets/about";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
        <Route path="*" element={<Landing/>}/>
<<<<<<< HEAD
=======
        <Route path="*" element={<Landing/>}/>
        <Route path="about" element={<About/>}/>
        

>>>>>>> 0d698b05424fc80a86360a3831b3d6ce3884f874
      </Routes>
    </BrowserRouter>
    
    </>
  )
}