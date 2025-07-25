import React from "react";
import { Mail, MessageSquare } from "lucide-react";

import Navbar from "../components/Navbar";

export default function Home() {
  const products = [
    { name: "3D Mixer", image: "3d-mixer.jpg" },
    { name: "Acrylic Glove Box", image: "acrylic-glove-box.jpg" },
    { name: "Air Quality Monitor", image: "air-quality-monitor.jpg" },
    { name: "Air Sampler", image: "air-sampler.jpg" },
    { name: "Air-cooled Specimen Refrigerator", image: "air-cooled-refrigerator.jpg" },
    { name: "Centrifuge", image: "centrifuge.jpg" },
    { name: "Sterile Container", image: "sterile-container.jpg" },
    { name: "Tube Roller Mixer", image: "tube-roller.jpg" },
    { name: "Blood Bank Refrigerator", image: "blood-bank-refrigerator.jpg" },
    { name: "Bio Safety Cabinet", image: "bio-safety-cabinet.jpg" },
  ];

  return (
    <>
        <Navbar />

      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-100 to-cyan-100">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600">we provide high-quality</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-[#1E928A] mt-2">Laboratory Equipment</h1>

        <div className="flex justify-center flex-wrap gap-6 mt-10 px-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 w-[150px] h-[150px] flex items-center justify-center">
              <span className="text-gray-400">Image {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="px-8 py-10 text-center text-gray-700 max-w-4xl mx-auto">
        <p>
          Labzee manufactures a wide range of laboratory instruments, including Laboratory Shaker, Oven,
          Refrigerator, Stirrer, and Ultrasonic Cleaners, serving scientific fields. We use flexible
          management to quickly adapt to market needs, focusing on science to develop new laboratory
          instruments and stay connected with customers and experts. We are an ISO 9001:2015 Certified
          company and all our products comply with stringent International Standards such as ISO 13485:2016
          along with CE Certifications.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#1E928A] mb-4">Laboratory Equipment</h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10">
          Labzee offers a wide range of laboratory equipment designed to enhance precision, reliability, and efficiency in various scientific applications.
          Our advanced range includes laboratory shakers, ovens, refrigerators, stirrers, and ultrasonic cleaners. Labzee instruments are user-friendly and certified.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center p-4 hover:shadow-lg relative">
              <div className="w-full h-[150px] bg-gray-100 flex items-center justify-center mb-4">
                <img src={`images/${product.image}`} alt={product.name} className="max-h-[100px] object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
              {/* <ArrowRightCircle className="absolute bottom-4 right-4 w-5 h-5 text-[#2FA4B9]" /> */}
            </div>
          ))}
        </div>
      </section>

      {/* Lab Shaker Section */}
      <section className="px-6 md:px-12 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#1E928A] mb-4">Laboratory Shaker</h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10">
          Labzee Laboratory Shakers provide efficient and uniform mixing for a wide range of research and laboratory applications.
          They feature dual shaking modes, orbital and linear, to accommodate various experimental needs including cell culture, reagent preparation, and sample dissolution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border rounded-lg p-4 text-center">
            <img src="images/shaker1.jpg" alt="3D Shaker BZDS-501" className="mx-auto h-[120px] object-contain" />
            <h3 className="text-md font-semibold mt-2">3D Shaker BZDS-501</h3>
            <p className="text-sm">Speed Range: 10 to 70 rpm</p>
            <p className="text-sm">Maximum Load: 5 Kg</p>
            <p className="text-sm">Timer: 1 min to 99h59min</p>
            <div className="mt-2 flex justify-center gap-4">
              <button className="border rounded-2xl py-1 px-5 cursor-pointer">GET QUOTE</button>
              <button className="text-orange-500">📄 Catalog</button>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <img src="images/shaker2.jpg" alt="3D Oscillator Shaker BZDS-502" className="mx-auto h-[120px] object-contain" />
            <h3 className="text-md font-semibold mt-2">3D Oscillator Shaker BZDS-502</h3>
            <p className="text-sm">Type: 3D oscillating</p>
            <p className="text-sm">Display: LCD</p>
            <p className="text-sm">Tilt Angle: 10°</p>
            <div className="mt-2 flex justify-center gap-4">
              <button className="border rounded-2xl py-1 px-5 cursor-pointer">GET QUOTE</button>
              <button className="text-orange-500">📄 Catalog</button>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <img src="images/shaker3.jpg" alt="3D Shaker BZDS-601" className="mx-auto h-[120px] object-contain" />
            <h3 className="text-md font-semibold mt-2">3D Shaker BZDS-601</h3>
            <p className="text-sm">Inclination: 7°</p>
            <p className="text-sm">Speed Range: 10 to 80 rpm</p>
            <p className="text-sm">Temperature: 5 to 40°C</p>
            <div className="mt-2 flex justify-center gap-4">
                <button className="border rounded-2xl py-1 px-5 cursor-pointer">GET QUOTE</button>
                <button className="text-orange-500">📄 Catalog</button>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <img src="images/shaker4.jpg" alt="3D Shaker BZDS-602" className="mx-auto h-[120px] object-contain" />
            <h3 className="text-md font-semibold mt-2">3D Shaker BZDS-602</h3>
            <p className="text-sm">Inclination: 10°</p>
            <p className="text-sm">Speed Range: 10 to 70 rpm</p>
            <p className="text-sm">Temperature: 5 to 40°C</p>
            <div className="mt-2 flex justify-center gap-4">
              <button className="border rounded-2xl py-1 px-5 cursor-pointer">GET QUOTE</button>
              <button className="text-orange-500">📄 Catalog</button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition">
          <MessageSquare className="text-white w-5 h-5" />
        </a>
        <a href="mailto:info@labzee.com" className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-105 transition">
          <Mail className="text-white w-5 h-5" />
        </a>
      </div>
    </>
  );
}
