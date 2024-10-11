"use client";
import React from "react";
import { motion } from "framer-motion";
import Avatar1 from "../assets/REIT2.jpeg";
import Avatar2 from "../assets/REIT3.jpeg";
import Avatar3 from "../assets/REIT4.jpeg";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { BackgroundBeams } from "../components/ui/background-beams";

interface BuyProps {
  handleConnectWallet: () => void;
}

const PropertyPage: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-poultry-dark">
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Team Section */}
      <div className="relative z-10 py-20">
        <h2 className="text-3xl font-bold text-white text-center font-rem mb-10">
          <span className="text-poultry-pink font-rem font-extrabold">Team</span>
        </h2>
        <CardContainer containerClassName="mt-4">
          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-poultry-orange font-rem">
                Dedan Okware
              </h3>
              <img
                src={Avatar1}
                alt="Dedan Okware"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">Founder & CEO</p>
            </CardItem>
          </CardBody>

          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-poultry-orange font-rem">
                Juliet Wambuku
              </h3>
              <img
                src={Avatar2}
                alt="Juliet Wambuku"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">Chief Maverick</p>
            </CardItem>
          </CardBody>

          <CardBody>
            <CardItem
              className="w-80 h-96 flex flex-col items-center justify-center"
              translateX={20}
              translateY={20}
              translateZ={50}
              rotateX={20}
              rotateY={20}
              rotateZ={0}
            >
              <h3 className="text-2xl font-bold text-poultry-orange font-rem">
                Winfred Muusi
              </h3>
              <img
                src={Avatar3}
                alt="Winfred Muusi"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
              <p className="mt-4 text-gray-300">Community Manager</p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Contact Us Section */}
      <div className="relative z-10 mt-12 text-center">
        <h3 className="text-2xl font-bold text-poultry-orange font-rem">
          Contact Us
        </h3>
        <p className="mt-4 text-lg text-gray-300">
          Have more questions? Reach out to us at{" "}
          <a href="mailto:support@i3m.com" className="text-poultry-pink">
            support@i3m.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PropertyPage;
