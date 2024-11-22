import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Logo from '../assets/REIT1.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative h-auto flex flex-col items-center justify-center bg-poultry-dark text-center text-white px-4 py-10">
      {/* Content of the footer */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Socials Grid */}
        <div>
          <h2 className="text-2xl font-bold sm:text-4xl text-poultry-orange mb-4">Social Media</h2>
          <div className="flex items-center gap-4 justify-center">
            <a href="https://x.com/WinnyMuusi?t=YLpSpxZU0fDi5HyMl1ukwQ&s=09" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center p-1">
                <FontAwesomeIcon icon={faTwitter} className="text-white x"/>
                <p>Twitter</p>
                <h1 className="md:font-bold text-sm md:text-lg text-white">X</h1>
              </div>
            </a>
          </div>
        </div>
        {/* Navigation Grid */}
        {/* Additional Links Grid */}
        <div>
          <h2 className="text-2xl font-bold text-poultry-orange mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="https://chain.link/education-hub/real-world-assets-rwas-explained" className="hover:text-poultry-pink transition-colors">RWA Tokenization Manual</a></li> 
            <li><a href="https://chain.link/use-cases/asset-tokenization" className="hover:text-poultry-pink transition-colors">Ask Expert</a></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={Logo} alt="poultry Logo" className="h-20 w-auto" />
        </div>
      </div>
      <p className="mt-8 text-black-500 text-sm">
        All rights reserved by{" "}
        <a className="text-poultry-orange font-bold">
          WINNY MUUSI
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;

