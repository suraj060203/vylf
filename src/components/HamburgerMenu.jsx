import React, { useState, useEffect, useRef } from 'react';
import './css/HamburgerMenu.css';
import { comingSoon } from '../assets';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const menuRef = useRef(null);
  const imageRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleComingSoonClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setShowImage(true);
  };

  const handleClickOutside = (event) => {
    if (
      imageRef.current && 
      !imageRef.current.contains(event.target)
    ) {
      setShowImage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <style>
        {`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .coming-soon-image {
          max-width: 100%;
          height: auto;
        }
        `}
      </style>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/event" onClick={handleComingSoonClick}>Coming Soon</a></li>
        </ul>
      </nav>
      {showImage && (
        <div className="overlay">
          <div ref={imageRef}>
            <img className="coming-soon-image" src={comingSoon} alt="Coming Soon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
