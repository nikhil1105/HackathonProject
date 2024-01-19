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

        <Route path="landing" element={<Landing/>}/>
        <Route path="register" element={<Registration/>}/>
        <Route path="*" element={<Landing/>}/>
        <Route path="*" element={<Landing/>}/>
        <Route path="about" element={<About/>}/>
        

      </Routes>
    </BrowserRouter>
    
    </>
  )
}