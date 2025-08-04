import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaFileDownload } from "react-icons/fa";
import { Mail } from "lucide-react";
import ArclBrochure from "../assets/Arcl-Brochure.pdf";


function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlButtons = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setShowButtons(true);
      } else {
        // Scrolling Up
        setShowButtons(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlButtons);
      return () => {
        window.removeEventListener("scroll", controlButtons);
      };
    }
  }, [lastScrollY]);

  const handleDownload = (e) => {
  const confirmDownload = window.confirm("Do you want to download the E-Catalogue?");
  if (!confirmDownload) {
    e.preventDefault(); // Stop the download
  }
};

  return (
    <>
      {showButtons && (
        <>
          <div 
            className="fixed bottom-24 right-6 flex flex-col gap-4 z-50"            
          >
            <a
              href="https://wa.me/919369962486?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaWhatsapp className="text-white w-5 h-5" />
            </a>

            <a
              href="mailto:arclinstruments@gmail.com"
              className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <Mail className="text-white w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-center items-center fixed bottom-12 right-6 z-50">
            <a
              href={ArclBrochure} 
              download
              onClick={handleDownload}
              className="group max-w-sm w-full p-2 hover:scale-105 transition bg-[#FF9800] rounded-md shadow-lg hover:shadow-2xl cursor-pointer text-center"
            >
              <div className="flex gap-2 items-center text-white">
                <FaFileDownload />
                <p className="font-semibold">Download E-Catalogue</p>
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default FloatingButtons;
