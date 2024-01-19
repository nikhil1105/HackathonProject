import {  } from "module";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Landing from "./componenets/landing";
import { Registration } from "./componenets/registration";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="landing" element={<Landing/>}/>
        <Route path="register" element={<Registration/>}/>
=======
        <Route path="*" element={<Landing/>}/>
        <Route path="*" element={<Landing/>}/>
>>>>>>> 1fee1d59ee3dda0bf82b41f070edc32f105dc7a4

      </Routes>
    </BrowserRouter>
    
    </>
  )
}