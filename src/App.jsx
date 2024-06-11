import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import Partners from "./components/Partners.jsx";
import End from "./components/End.jsx";
import Community from "./components/Community.jsx";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import { bgVytoflowLogo } from "./assets";
import Projects from "./components/Projects.jsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("light");
  const appStyle = {
    backgroundImage: `url(${bgVytoflowLogo})`,
    backgroundRepeat: "no-repeat",
  };
const Home = () => {
  return (
    <div >
      <div className="-mb-3">
    <Hero/>
    </div>
    <Projects/>
    <Partners/>
    </div>
  )
}


  return (
    <>  
      <div >   
          <Header/>
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/home/projects" element={<Projects/>}/>
          </Routes>
          <End/>
          <HamburgerMenu/>
        
       
      </div>
    </>
  );
};

export default App;
