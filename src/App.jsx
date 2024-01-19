import {  } from "module";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Landing from "./componenets/landing";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="landing" element={<Landing/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}