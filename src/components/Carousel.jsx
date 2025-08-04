import React, { useState, useEffect } from 'react';

import image1 from '../assets/Slider/CalibrationMaintenanceService.jpg';
import image2 from '../assets/Slider/CivilAndMechanicalLabEqu.jpg';
import image3 from '../assets/Slider/MedicalAndScientificInstruments.jpg';
import image4 from '../assets/Slider/PORTABLE.webp';


const images = [
  {
    image: image2,
    heading: "Civil and Mechanical Equipments",
    text: "ARCL specializes in providing advanced civil and mechanical laboratory equipment, offering durable and high-accuracy tools used in engineering research, quality testing, and educational institutions."
  },
  {
    image: image1,
    heading: "Calibration and Maintenance Service",
    text: "ARCL delivers professional calibration and maintenance services, ensuring your laboratory instruments remain accurate, compliant, and reliable in accordance with regulatory and ISO standards."
  },
  {
    image: image3,
    heading: "Medical and Scientific Instruments",
    text: "ARCL provides a comprehensive range of precision medical and scientific instruments designed to meet the demands of modern laboratories and research institutions, conforming to national and international standards."
  },
  
  {
    image: image4,
    heading: "Portable Cabins",
    text: "ARCL offers premium-quality portable cabins tailored for site offices, laboratories, and custom utility needs, engineered for durability, safety, and flexibility across multiple industries."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full lg:h-[calc(100vh-12rem)] h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Slides */}
      {images.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img
            src={item.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover absolute z-10 "
          />
          {/* Transparent Layer */}
          <div className="absolute w-full h-full bg-black/70 z-20"></div>

          <div className="absolute left-6 md:left-24 top-20 h-full w-[90%] md:w-1/2 z-50 text-white font-semibold">
            <p className='md:text-3xl text-2xl'>We offers</p>
            <p className = 'md:text-5xl text-3xl font-bold'>{item.heading}</p>
            <p className="my-5 font-normal md:text-2xl">{item.text}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 z-30"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 z-30"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
    
  );
};

export default Carousel;
