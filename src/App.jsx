import {  } from "module";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Landing from "./componenets/landing";
import { Registration } from "./componenets/registration";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
        <Route path="*" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}