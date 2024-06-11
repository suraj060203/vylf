import React from 'react';
import { github,instagram,linkedin,whatsapp,youtube } from '../assets';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <footer
      className="bg-cyan-100 text-center text-neutral-600 dark:bg-cyan-900 dark:text-neutral-200 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-100 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="mr-6 text-neutral-600 dark:text-neutral-200" href="https://github.com/Vytoflow-Tech">
            <img src={github} className="h-6 w-6" alt="GitHub"></img>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200" href="https://www.instagram.com/vytoflow_tech/">
            <img src={instagram} className="h-6 w-6" alt="Instagram"></img>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200" href="https://www.linkedin.com/company/vytoflow-tech/posts/?feedView=all">
            <img src={linkedin} className="h-6 w-6" alt="LinkedIn"></img>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200" href="https://wa.me/+918700745848">
            <img src={whatsapp} className="h-6 w-6" alt="WhatsApp"></img>
          </a>
        
        </div>
      </div>

     
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
             
              Why Choose Us?
            </h6>
            <p>
            We at VytoFlow Tech specialize in full-stack development and product management. With expertise and innovation at our core, we craft tailored solutions to propel your business forward. Let's collaborate to bring your vision to life, one line of code at a time.
            </p>
          </div>
    
          <div className="px-10">
            <h6
              className="mb-4 flex justify-center font-semibold text-lg uppercase md:justify-start">
              Address:
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >Ghaziabad,Uttar Pradesh,India</a>
            </p>
            
          </div>
     
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links:
            </h6>
            <p className="mb-4">
              <NavLink className="text-neutral-600 dark:text-neutral-200" to="/home"
              >Home
              </NavLink>
            </p>
            
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200 " href='https://chat.whatsapp.com/IOhhnEWX8eG8tvFZMtMDvj'
              >Learning
              </a>
            </p>
            <p className="mb-4">
              <NavLink className="text-neutral-600 dark:text-neutral-200" to="/home/projects"
              >Work With Us
              </NavLink>
            </p>
            <p>
              <NavLink className="text-neutral-600 dark:text-neutral-200" to="/community"
              >Community
              </NavLink>
            </p>
          </div>
       
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact Us:
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              vytoflow.community@its.edu.in
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd" />
              </svg>
              +91 87007 45848
            </p>
            <div className="mt-8">
            <h6
              className="mb-4 flex justify-center font-semibold  md:justify-start">
              Devs onBoard:
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Siddhant Singh
              <a className="ml-7 flex items-center" href="https://www.linkedin.com/in/siddhant-kumar-singh/">
                <img src={linkedin} className="h-6 w-5" alt="LinkedIn"></img>
              </a>
            </p>
           </div>
          </div>
        </div>
      </div>

  
      <div className="bg-neutral-200 p-6 text-center dark:bg-cyan-950">
        <span>© 2024 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"

        >All Copyright Claims Are Reserved To VytoFlow Tech</a>
      </div>
    </footer>
  );
}