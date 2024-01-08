
import Login from "./components/Login"
import Home from "../src/Pages/Home"
import Signup from '../src/components/Signup'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
 

  return (
  <>
         <Router>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Signup/>} />
        </Routes>
        
      </Router>

  
  </>
  )
}

export default App
