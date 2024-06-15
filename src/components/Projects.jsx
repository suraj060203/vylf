import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  gdBanner2023,
  gdBg,
  ppBanner2024,
  ppBg,
  bgVytoflowLogo,
  ButtonBg,
  gdOne,
  gdThree,
  gdTwo,
  pqOne,
  pqTwo,
  appD,
  webD,
  uiux,
  webDbg,
  uiuxbg,
  bigapp,
  bigweb,
  biguiux,
  iotD,
  gameD
} from "../assets";



const Events = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div style={{ position: 'relative', bottom: '20px' }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <button
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            backgroundColor: "#dee2e6",
            margin: "5px 5px",   
            border: "none",
            cursor: "pointer",
          }}
        ></button>
      );
    },
    arrows: false,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
   appendDots: (dots) => (
      <div style={{ position: 'relative', bottom: '80px' }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <button
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "100%",
            backgroundColor: "#e5e5e5",
            margin: "5px 5px",   
            border: "none",
            cursor: "pointer",
          }}
        ></button>
      );
    },
  };
  
  const items = [
    { id: 1, image: bigapp  },
    { id: 2, image: bigweb },
    { id: 3, image: biguiux },
    { id: 4, image: iotD },
    { id: 5, image: gameD },

  ];


  return (
    <div className="relative h-screen bg-gradient-to-t from-[50rem] from-blue-50 to-white flex items-center justify-center">
      <div  className=" h-screen overflow-hidden" style={{margin:"5px",borderRadius: "1%"}}>
      
      <motion.div
        className="absolute top-[1rem] left-[0rem] w-[35rem] h-[35rem] spinning-background"
        style={{
          backgroundImage: `url(${bgVytoflowLogo})`,
          backgroundAttachment: "fixed",
          backgroundSize: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      ></motion.div>
      <div className="absolute bottom-40 right-[10rem] text-2xl text-n-7 p-3">
      <a href="https://forms.gle/JDjSDSNteSov5D4m9" target="_blank" rel="noopener noreferrer">
      <motion.button
        className="bg-gradient-to-br relative lg:-left-36 lg:top-44 lg:auto z-10 lg:mr-20  -ml-28 -mr-32 font-sans font-semibold text-white px-6 py-[0.4rem] backdrop-blur-sm rounded-2xl shadow-xl"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        style={{
          marginTop: '92px',
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-red-300 rounded-2xl" />
        <span
          className="absolute inset-2 bg-cover bg-no-repeat left-[0.50rem]"
          style={{
            backgroundImage: `url(${ButtonBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'left',
          }}
        />
        <span style={{ left: '17px' }} className="relative z-20 text-[1.2rem]">
          Work With Us
        </span>
      </motion.button>
    </a>
        <motion.h2
  initial="hidden"
  animate={controls}
  variants={{
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.5 } },
    hidden: { opacity: 0, y: -50, transition: { duration: 0.9 } },
  }}
>
  <div className="flex three mt-150 lg:mr-20 lg:-ml-96 lg:-mb-5">
    <span className="flex three mt-15 lg:-ml-54 lg:-mb-14">Secure Your Spot In The Tech Arena:</span>
    </div>
  <motion.span className=" -mt-20 md:mt-3  md:ml-20 -mr-36 "
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: -70, scale: 1, transition: { duration: 0.6, delay: 1 } },
      hidden: { opacity: 0, y: -20, scale: 0.8, transition: { duration: 0.6 } },
    }}
  >
  </motion.span>
</motion.h2>
      </div>

      <div className="relative p-8 w-full h-full bg-transparent" ref={ref}>
        <motion.h1
          className="lg:text-6xl md:text-6xl text-5xl flex mt-16 text-black font-semibold"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
            hidden: { opacity: 0, y: -150, transition: { duration: 0.9 } },
          }}
        >
          Our Offerings: 
        </motion.h1>
        <motion.h1
          className="mt-7 text-3xl lg:text-4xl text-black font-bold font-grotesk mb-32"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -50, transition: { duration: 0.6 } },
          }}
        >
          Services We Provide
        </motion.h1>

        <h4 className="-mt-[9.6rem] py-12 ml-10 -mr-1 ">
          <motion.div
            className="-mt-[12.14rem] py-12  ml-[41rem]"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 2 } },
              hidden: { opacity: 0, y: 84, transition: { duration: 1 } },
            }}
          >
            <div className="paragraph overflow-auto"
              style={{
                padding: "19px",
                border: "2px solid rgba(3, 4, 94, 0.1)",
                borderRadius: "10px",
              
                
              }}
            >
              
              <p 
                style={{
                  maxHeight: "7rem",
                  overflow: "none",
                  lineHeight: "1.5",
                  color: "#161a1d",
                  
                }}
              >
                Discover our extensive suite of IT solutions and services,
Crafted to empower your business with cutting-edge technology.
From software development to network security, we've got you covered,
Unlocking your potential for digital transformation and success.
              </p>
            </div>
          </motion.div>
        </h4>
        <div className="relative">
          <Slider {...settings1} className="absolute -top-36 lg:top-[-10rem] right-[-1.5rem] md:w-full lg:right-[-2rem] w-[850px] lg:w-[830px]  h-[900px]">
            <motion.div
              className="p-4 h-96 mb-12 mt-5 carousel-item max-w-3xl rounded-3xl shadow-xl relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="hover-slide-down">
                <img src={webD} className="w-full shadow-xl h-[13rem] rounded-2xl" />
                <style>
                  {`
                    .hover-slide-down img {
                      transition: transform 0.2s ease-in-out;
                    }

                    .hover-slide-down:hover img {
                      transform: translateY(-40px);
                    }
                    .slick-dots {
                      bottom: 70px; /* Adjust the value as needed */
                    }
                      @media (max-width: 1480px) {
  .carousel1,
  .carousel2-container {
    display: none;
    
  }
}
  @media (max-width: 768px) {
  .spinning-background {
    display: none;
  }
}
  @media (max-width: 1000px) {
  .paragraph {
    display: none;
  }
}
   @media (max-width: 700px) {
  .three {
    display: none;
  }
}
  .three{
  }



                   
                    .hover-slide-down button {
                      position: absolute;
                      bottom: 10px; 
                      left: 50%;
                      transform: translateX(-50%);

                      z-index: 5;
                      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out;
                      opacity: 0;
                      width: 100px; /* initial width */
                      height: 3px; /* initial height */
                    }

                    .hover-slide-down:hover button {
                      opacity: 1;
                      width: 100px; /* increased width on hover */
                      height: 40px; /* increased height on hover */
                    }

                    .extra-image {
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      z-index: -1;
                    }

                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }

                    .spinning-background {
                      animation: spin 100s linear infinite;
                      will-change: transform;
                    }

                    .fade-in {
                      opacity: 1;
                      transition: opacity 1s ease-in-out;
                    }
                    .carousel-container {
  position: absolute;
  top: -10rem;
  right: -2rem;
  width: 100%; /* Make the carousel full width */
  height: auto; /* Allow the height to adjust automatically */
}
                    .carousel-item {
                      width: 100px; /* Adjust the width as needed */
                      height: 240px; /* Adjust the height as needed */
                    }
                    .carousel2-container {
  width: 100%; /* Make the carousel full width */
  height: auto; /* Allow the height to adjust automatically */
}
                    .slick-slide {
                      padding: 100px 20px; /* Adjust the padding around each slide */
                    }
                  `}
                </style>
                <a href="https://forms.gle/JDjSDSNteSov5D4m9">
                <button className="bg-gradient-to-br text-xs shadow-xl from-red-500 via-red-400 to-red-300 font-semibold text-white max-w-xl px-4 py-2  rounded-full ">
                  View more
                </button>
                </a>
              </div>
              <img
                src={webDbg}
                className="w-full h-full shadow-xl object-cover rounded-3xl extra-image"
              />
            </motion.div>

            <motion.div
              className="p-4 h-96 mb-12 mt-5 shadow-xl max-w-xl bg-transparent carousel-item rounded-3xl  relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="hover-slide-down">
                <img
                  src={appD}
                  className=" w-full h-[13rem] object-cover rounded-2xl"
                />
                 <a href="https://forms.gle/JDjSDSNteSov5D4m9">
                <button className="bg-gradient-to-br text-xs from-blue-500 via-blue-300 to-blue-200 font-semibold text-white px-4 py-2 rounded-full ">
                  View more
                </button>
                </a>
              </div>
              <img
                src={ppBg}
                className="w-full h-full object-cover rounded-3xl extra-image"
              />
            </motion.div>
            <motion.div
              className="p-4 h-96 mb-12 mt-5 shadow-xl max-w-xl bg-transparent carousel-item rounded-3xl  relative"
              whileHover={{ scale: 1.1 }}
            >
              <div className="hover-slide-down">
                <img
                  src={uiux}
                  className=" w-full h-[13rem] object-cover rounded-2xl"
                />
                <a href="https://forms.gle/JDjSDSNteSov5D4m9">
                <button className="bg-gradient-to-br text-xs from-orange-500 via-orange-300 to-orange-200 font-semibold text-white px-4 py-2 rounded-full ">
                  View more
                </button>
                </a>
              </div>
              <img
                src={uiuxbg}
                className="w-full h-full object-cover rounded-3xl extra-image"
              />
            </motion.div>
          </Slider>
          <div className="absolute bottom-0 -left-15 w-full flex justify-start p-3">
            <div className="w-3/4 md:w-2/3 lg:w-[44rem] h-96 md:h-128 lg:h-36">
            <Slider {...settings2} className="carousel2-container">
  {items.map(item => (
    <div key={item.id} className="p-4 h-[30rem]">
      <div className="bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 p-6 rounded-3xl shadow-lg h-full w-auto flex flex-col justify-center">
        {/* Render image here */}
        <img
          src={item.image}
          alt={item.content}
          className="w-full h-full rounded-xl object-cover"
          style={{ maxHeight: "100%", maxWidth: "100%" }} // Added style for autofitting
        />
      </div>
    </div>
  ))}
</Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;
