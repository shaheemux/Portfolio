import React from 'react';
// Importing icons from Font Awesome (assuming you have it installed)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // Function to get current year dynamically
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="relative  bg-[#0a192f] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find me on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              {/* Twitter Button */}
              <button href='' className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              {/* Facebook Button */}
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              {/* Dribbble Button */}
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              {/* Github Button */}
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
          {/* Other content goes here */}
        </div>
      </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1">
             © <span>{getCurrentYear()}</span> Created with extra love by Shaheem Salie.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
