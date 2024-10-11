import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/REIT1.jpg";
import { motion } from 'framer-motion';

interface NavbarProps {
  onLogin: () => void;
  loggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogin, loggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <img src={Logo} alt="REIT Logo" className="h-10" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex flex-grow justify-center space-x-10 items-center">
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-pink-500 transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link to="/get-started" className="hover:text-pink-500 transition-colors">
              Dashboard
            </Link>
          </li>
          
        </ul>
        
        <div className="hidden md:flex items-center space-x-4">
          {loggedIn ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onLogout}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onLogin}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </motion.button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link to="/" className="hover:text-pink-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-pink-500 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="/get-started" className="hover:text-pink-500 transition-colors">
                Get Started
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-pink-500 transition-colors"> {/* New Link for Signup */}
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="flex justify-center mt-4 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLogin}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Welcome Investor
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;