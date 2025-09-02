import React, { useState } from "react";
import QuoteFormPopup from "../components/QuoteFormPopup";

const images = import.meta.glob(
  "/src/assets/Scientific-Instruments/*.{jpg,jpeg,png,gif,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
);
const getImageName = (path) => {
  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  const baseName = fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-.][a-z0-9]{6,}$/i, "");

  return decodeURIComponent(baseName);
};
function ScientificEquipment() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageList = Object.values(images);
  const openModal = (img) => {
    setSelectedImage({
      src: img,
      title: getImageName(img),
      desc: "No description available.",
    });
    setIsOpen(true);
  };
  const [quoteForm, setQuoteForm] = useState(false);

  const openQuoteForm = (img) => {
    setSelectedImage({
      src: img,
      title: getImageName(img),
      desc: "No description available.",
    });
    setQuoteForm(true)
  }
   const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
        <h1 className="md:text-5xl text-2xl font-bold  text-[#021C57] mb-6 capitalize border-style py-5">
          Scientific Equipments
        </h1>
        <p className="text-lg text-gray-800 text-justify">
          Welcome to our Scientific Equipment section, where innovation meets
          precision. This page showcases a wide range of high-quality,
          industry-standard instruments designed to meet the rigorous demands of
          laboratories, research institutions, and industrial testing
          environments. We offer a curated selection of analytical, testing, and
          measuring instruments used in various scientific fields, including
          chemistry, physics, material science, and engineering. Whether you're
          conducting academic research, quality control, or industrial analysis,
          our equipment ensures reliability, accuracy, and durability. Each
          product listed here includes detailed specifications, high-resolution
          images, and catalog access to help you make informed decisions. We are
          committed to supporting your scientific pursuits with tools that
          empower discovery, innovation, and progress.
        </p>
      </section>
      <section className="p-6">
      <h2 className="text-4xl font-bold text-center text-[#021C57] mb-8">
        Scientific Equipments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-6">
        {imageList.map((img, index) => (
          <div
                key={index}
                className="min-w-[250px] max-w-[250px] h-[20rem] m-2 relative rounded-lg overflow-hidden shadow-lg group flex-shrink-0 mx-auto"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`${index}`}
                  className="w-full h-[65%] object-contain transition-transform duration-300  group-hover:scale-105"
                />

                
                <div className="w-full h-[35%] flex flex-col justify-between">
                 
                  <h3 className="font-medium capitalize text-left px-4">
                    {getImageName(img)}
                  </h3>
                  {/* <div className="description overflow-y-auto overflow-x-hidden py-3">
                    <h1>No Description available. </h1>
                  </div> */}

                    {/* Bottom Overlay */}
                  <div className="border-t-2 w-full flex justify-around">
                    <button
                      onClick={() => openQuoteForm(img, index)}
                      className="button-style text-white cursor-pointer text-xs my-2 font-semibold px-5 py-2 rounded transition"
                    >
                      Get Quote
                    </button>
                    <button
                      onClick={() => openModal(img, index)}
                      className="button-style text-xs my-2 font-semibold px-5 py-2 rounded transition"
                    >
                      Catalog
                    </button>
                  </div>


                </div>
              </div>
        ))}
        
        {isOpen && selectedImage && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-xl relative flex flex-col md:flex-row">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold z-50"
              >
                &times;
              </button>

              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4 py-2 border-b-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        )}
        {quoteForm && selectedImage && (
          <QuoteFormPopup
            setQuoteForm={setQuoteForm}
            title={selectedImage.title}
          />
        )}
            
      </div>
    </section>
    </>
  );
}

export default ScientificEquipment;
