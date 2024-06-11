import React, { useState } from "react";
import { vytoflowLogo, searchDay,sphone, comingSoon, hinstagram, hgmail, hphone, hwhatsapp } from "../assets";
import { useLocation, NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

const Header = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const [isExploreMenuVisible, setIsExploreMenuVisible] = useState(false);
  const [isContactMenuVisible, setIsContactMenuVisible] = useState(false);
  const [isComingSoonHovered, setIsComingSoonHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [borderColor, setBorderColor] = useState("cyan-600");
  const [phoneNumberColor, setPhoneNumberColor] = useState("text-black"); // State for phone number color

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setBorderColor("green-600"); // Change border color to green when copied
      setPhoneNumberColor("text-green-800"); // Change phone number color to green when copied
      setTimeout(() => {
        setIsCopied(false);
        setBorderColor("cyan-600"); // Reset border color after 2 seconds
        setPhoneNumberColor("text-black"); // Reset phone number color after 2 seconds
      }, 500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  
  const handleExploreMouseEnter = () => {
    setIsExploreMenuVisible(true);
  };

  const handleExploreMouseLeave = () => {
    setIsExploreMenuVisible(false);
  };

  const handleContactMouseEnter = () => {
    setIsContactMenuVisible(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactMenuVisible(false);
  };

  const handleComingSoonMouseEnter = () => {
    setIsComingSoonHovered(true);
  };

  const handleComingSoonMouseLeave = () => {
    setIsComingSoonHovered(false);
  };

  return (
    <div className="flex flex-col">
      <style>
        {`.mega-menu1, .mega-menu2 {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s, max-height 0.3s ease-in-out, max-width 0.3s ease-in-out;
          max-height: 0;
          max-width: 0;
          width: 0;
          width: auto;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(38, 70, 83, 0.9), rgba(0, 190, 255, 0.8)); /* Adjust the RGBA values and alpha (transparency) as needed */
          backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
          opacity: 0.3; /* Adjust the opacity as needed */
          overflow: hidden;
        }

        .mega-menu1.visible, .mega-menu2.visible {
          opacity: 1;
          visibility: visible;
          max-height: 500px; /* A large enough value to accommodate the content */
          max-width: 90px;  /* A large enough value to accommodate the content */
          width: auto;
          opacity: 1;
        }
        
        .logo-link:hover img {
          scale: 1.3; /* Adjust brightness to change the hover effect */
        }
        
        .mega-menu1, .mega-menu2 {
          display: flex;
          flex-direction: column; /* Change to column */
        }
          ::-webkit-scrollbar {
  width: 10px;
}
/* scrollbar.css */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #bde0fe; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0077b6; 
  width: 6px; /* Adjust the width to make the thumb thinner */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #023e8a; 
}


        `}
      </style>
      <div className="fixed md:bg-transparent md:backdrop-blur-none shadow-md lg:shadow-none md:shadow-none lg:backdrop-blur-none backdrop-blur-lg bg-slate-100 w-full lg:bg-transparent z-50 lg:top-0 -top-1 left-0 lg:w-full lg:h-[4.56rem]">
        <div className="flex py-4 items-center px-5 lg:px-8 xl:px-10 lg:py-4">
          <a
            className="block xl:mr-8"
            href="/"
            style={{ marginTop: "-1rem", marginLeft: "-1rem" }}
          >
            <img
              src={vytoflowLogo}
              width={165}
              height={80}
              alt="Vytoflowtech"
            />
          </a>
          <nav className="hidden fixed top-[5rem] lg:static lg:flex lg:mx-auto justify-center lg:bg-transparent">
            <div
              className="relative border-x-cyan-600 border-r-4 border-l-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-50 shadow-md justify-center rounded-2xl h-12 backdrop-blur-3xl z-90 flex flex-col items-center mx-auto lg:flex-row"
              style={{ marginTop: "-20px" }}
            >
              {/* Home */}
              <NavLink
                to="/home"
                className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
              >
                Home
                <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
              </NavLink>

              <NavLink
                to="/community"
                className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/community" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
              >
                Community
                <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
              </NavLink>
              <div
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
                className="relative">
                <NavLink
                 
                  className={clsx("block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800", pathname === "/contact" ? "z-2 lg:text-cyan-700" : "lg:text-black", "group")}
                >
                  Contact Us
                  <span className="absolute top-[3.09rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                </NavLink>
                <div
                  className={clsx(
                    "mega-menu1 absolute top-full left-0 bg-white shadow-lg p-6 z-50 transition-opacity duration-300",
                    isContactMenuVisible && "visible"
                  )}
                >
                  <div className="flex flex-col"> {/* Change to flex-col */}
                      {/* Gmail */}
                      <div className="mb-4 logo-link">
                      <a href="mailto:vytoflow.community@its.edu.in" target="_blank" rel="noopener noreferrer">
                        <img src={hgmail} alt="Gmail" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
                  
                    {/* WhatsApp */}
                    <div className="mb-4 logo-link">
                      <a href="https://wa.me/+918700745848" target="_blank" rel="noopener noreferrer">
                        <img src={hwhatsapp} alt="WhatsApp" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
                    {/* Instagram */}
                    <div className="logo-link">
                      <a href="https://www.instagram.com/vytoflow_tech/" target="_blank" rel="noopener noreferrer">
                        <img src={hinstagram} alt="Instagram" className="w-10 h-10 mr-9 inline-block" />
                      </a>
                    </div>
            
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div
                onMouseEnter={handleComingSoonMouseEnter}
                onMouseLeave={handleComingSoonMouseLeave}
                className="relative"
              >
                <NavLink
                  
                  className={clsx(
                    "block relative font-mono text-2xl bg- text-n-1 transition-colors px-6 py-6 md:py-8 lg:py-3 lg:-mr-0.25 text-[1.060rem] lg:font-serif hover:text-cyan-800",
                    pathname === "/explore" ? "z-2 lg:text-cyan-700" : "lg:text-black",
                    "group"
                  )}
                >
                  Coming Soon
                  <span className="absolute top-[3.09rem] left-[1.6rem] w-full h-[0.2rem] bg-cyan-800 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-50"></span>
                </NavLink>
                {/* Show image only when hovering over Coming Soon */}
                {isComingSoonHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mb-4"
                  >
                    <img
                      src={comingSoon}
                      alt="Coming Soon"
                      style={{ maxWidth: "400px", maxHeight: "400px",opacity: 1,borderRadius: "10px" }}
                    />
                  </motion.div>
                )}
              </div>


              {/* Contact Us */}
              
            </div>
          </nav>
          {/* search bar*/}
           {/* Your existing code */}
      <div
        onClick={() => copyToClipboard("+91 87007 45848")}
        className={clsx(
          "hidden lg:flex items-center backdrop-blur-3xl border-l-4 border-r-4 bg-gradient-to-r h-12 from-slate-100 via-slate-50 to-slate-50 shadow-md p-6 px-4 py-0 rounded-2xl text-black cursor-pointer",
          borderColor === "cyan-600" ? "border-cyan-600" : "border-green-700"
        )}
        style={{ marginTop: "-22px", borderTop: "none", borderBottom: "none" }}
      >
        <h6 className={`p-1 bg-transparent backdrop-blur-3xl lg:max-w-36 lg:h-8 outline-0 text-[0.99rem] font-sans h-10 ${phoneNumberColor}`}>
          +91 87007 45848
        </h6>
        <img
          src={sphone}
          alt="Search_Icon"
          className="hidden lg:flex w-[1.8rem]"
        />
      </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
