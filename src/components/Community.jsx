import React from 'react';
import { motion } from 'framer-motion';
import { ansh, suraj, siddhant, linkedinBlue, shapeani } from '../assets';
import styled from 'styled-components';
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
  pqThree,
  pqFour,
  pqTwo,
  squarewhat,
  code3,
  hinstagram,
  gdFour
} from "../assets";

const Container = styled.div`
  overflow-x: hidden;
  background-image: url(${shapeani});
  background-size: fit;
  background-color: #bfdbf7;
`;
const ImageContainer = styled.div`
  width: 290px;
  height: 230px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #000000;
  border-radius: 10px;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const ImageContainer2 = styled.div`
  width: 220px;
  height: 320px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;

`;

const Image2 = styled(motion.img)`
  max-width: 50%;
  max-height: 100%;
  border-radius: 10px;
`;






const Community = () => {
  return (
    <Container className="h-auto w-auto bg-white flex flex-col justify-start items-center">
      {/* Row of 5 white boxes */}
      <div className="relative top-28 text-n-5 vytoflow-font text-7xl">Previous Events Glimpses</div>
      <div className="relative top-32 text-n-5 mt-10 left-4 font-semibold dancing-script text-6xl">Programming Quiz Competition</div>
      <div className="flex justify-between flex-wrap lg:px-8 px-20 mt-52">
    {/* Image 1 */}
    <ImageContainer className="w-full mr-2 mb-2 lg:w-full">
        <Image src={pqOne} alt="Image 1" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 2 */}
    <ImageContainer className="w-full mr-2 mb-2 lg:w-full">
        <Image src={pqTwo} alt="Image 2" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 3 */}
    <ImageContainer className="w-full mr-2 mb-2 sm:w-1/2 lg:w-full">
        <Image src={ppBanner2024} alt="Image 3" whileHover={{ scale: 1.8 }} />
    </ImageContainer>

    {/* Image 4 */}
    <ImageContainer className="w-full mr-2 mb-2 sm:w-1/2 lg:w-full">
        <Image src={pqThree} alt="Image 4" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 5 */}
    <ImageContainer className="w-full sm:w-1/2 lg:w-full">
        <Image src={pqFour} alt="Image 5" whileHover={{ scale: 1.3 }} />
    </ImageContainer>
</div>

      <div className="relative top-32 text-n-5 left-8 dancing-script font-semibold -mt-10 text-6xl">Group Discussion Competition</div>
      <div className="flex justify-between flex-wrap lg:px-8 px-20 mt-52">
    {/* Image 1 */}
    <ImageContainer className="w-full sm:w-auto mb-2 mr-2  sm:mb-0">
        <Image src={gdOne} alt="Image 1" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 2 */}
    <ImageContainer className="w-full sm:w-auto mb-2 mr-2 sm:mb-0">
        <Image src={gdTwo} alt="Image 2" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 3 */}
    <ImageContainer className="w-full sm:w-auto mb-2 mr-2 sm:mb-0">
        <Image src={gdBanner2023} alt="Image 3" whileHover={{ scale: 2 }} />
    </ImageContainer>

    {/* Image 4 */}
    <ImageContainer className="w-full sm:w-auto mb-2 mr-2 sm:mb-0">
        <Image src={gdThree} alt="Image 4" whileHover={{ scale: 1.3 }} />
    </ImageContainer>

    {/* Image 5 */}
    <ImageContainer className="w-full sm:w-auto mb-2 mr-2 sm:mb-0">
        <Image src={gdFour} alt="Image 5" whileHover={{ scale: 1.3 }} />
    </ImageContainer>
</div>


      {/* Founder section */}
      <div className="relative top-16 right-0 mb-8 text-n-5 dancing-script font-bold text-8xl text-center">Founder:</div>
<div className="flex flex-col mt-24 ml-8 sm:flex-row sm:ml-0">
    <div className="flex flex-col items-center sm:items-start sm:w-56">
        <img src={ansh} alt="Founder" className="lg:w-full lg:mt-5 lg:ml-2 h-auto border-4 border-slate-300" />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center lg:ml-3 justify-center sm:justify-start">
            Ansh Singh
            <a href="https://www.linkedin.com/in/ansh-singh-0a5a01226/" target="_blank" rel="noopener noreferrer" className="ml-2">
                <img src={linkedinBlue} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </motion.div>
    </div>
    <div className="ml-0 mt-5 sm:ml-5 sm:w-full max-w-full">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-100 backdrop-blur-md bg-opacity-10 p-5 h-auto rounded-lg mr-7 text-black border-2 border-cyan-950 text-xl">
            
At VytoFlow Tech, we are the driving force behind cutting-edge technology solutions that propel businesses and individuals into the future. As a dynamic tech company, we specialize in crafting bespoke software development projects and engineering marvels that set industry benchmarks.
 Our expertise encompasses software development, where we breathe life into ideas by developing robust, scalable, and innovative software applications that cater to your unique needs, and engineering excellence, where we are pioneers in creating groundbreaking solutions for complex challenges across various industries
 . Additionally, we excel in hardware innovation, designing and developing IoT devices and hardware prototypes that redefine possibilities. We envision a world where technology knows no boundaries, with a mission to empower businesses with digital transformation and engineer solutions that enhance everyday life. We adopt a collaborative approach, working closely with our clients to understand their vision and goals.
        </motion.div>
    </div>
</div>


      {/* Core Members section */}
      <div className="relative lg:right-[33rem] mb-8 mt-16 text-n-5 dancing-script font-bold  text-6xl">Core Members</div>
      <div class="w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mt-2 md:ml-8">
  <div class="flex flex-col  md:mr-8">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={siddhant} alt="Siddhant" class="w-60 border-4 mt-3 h-full border-slate-300 mr-2" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 mr-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Siddhant Singh
      <a href="https://www.linkedin.com/in/siddhant-kumar-singh/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinBlue} alt="LinkedIn" class="ml-2 w-8 h-8" />
      </a>
    </motion.div>
  </div>
  <div class="flex flex-col items-center mt-2 md:mb-2 md:items-start">
    <motion.img initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} src={suraj} alt="Suraj" class="w-56 h-full mr-2 border-4  border-slate-300" />
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} class="bg-gray-100 lg:ml-6 backdrop-blur-md bg-opacity-10 p-3 h-auto rounded-lg mt-2 text-black border-2 border-cyan-950 text-lg flex items-center">
      Suraj Kumar
      <a href="https://www.linkedin.com/in/surajkumar06022003/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinBlue} alt="LinkedIn" class="ml-2 w-8 h-8" />
      </a>
    </motion.div>

</div>

        
        <div className="flex justify-between flex-wrap py-2 lg:px-8 px-28 ">
          

        {/* Image 1 */}
        <a href='https://chat.whatsapp.com/IOhhnEWX8eG8tvFZMtMDvj'>
        <ImageContainer2>
          <Image2 src={squarewhat} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mt-28'>Join Our Community On Whatsapp For Exclusive Sessions,Resources!</h6>
        </ImageContainer2>
        </a>

        {/* Image 2 */}
        <a href='https://github.com/Vytoflow-Tech'>
        <ImageContainer2 >
          <Image2 src={code3} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Github Community For Contributing In Projects!</h6>
        </ImageContainer2>
        </a>

        {/* Image 3 */}
        <a href='https://www.linkedin.com/company/vytoflow-tech/'>
        <ImageContainer2>
          <Image2 src={linkedinBlue} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Community On Linkedin To Be Updated About Us!</h6>
        </ImageContainer2>
        </a>

        {/* Image 4 */}
        <a href='https://www.instagram.com/vytoflow_tech/'>
        <ImageContainer2 >
          <Image2 src={hinstagram} alt="Image 1" className='relative -top-16 ml-14' />
          <h6 className='text-black relative left-5 -ml-44 mr-2 mt-28'>Join Our Community On Instagram! </h6>
        </ImageContainer2>
        </a>
      </div>
        <div className="relative bottom-2 right-0 "></div>
      </div>
      <style>
      {`
   /* Import the fonts */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Text:ital@0;1&family=Fjalla+One&family=Russo+One&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.vytoflow-font {
  font-family: 'DM Serif Text', serif;
}

.russo-one-font {
  font-family: 'Russo One', sans-serif;
}

        

    
.saira-font {
  font-family: 'Saira', sans-serif;
}
.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.stroke-text {

  color: white; /* Text color */
  -webkit-text-stroke: 0.5px #023e8a; /* Stroke size and color */
  text-shadow: 
    -1px -1px 0 black,  
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black; /* Shadow directions and color */
}
    .dancing-script {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

    `}
    </style>
    </Container>
  );
};

export default Community;
