import React, { useState } from "react";
import "../index.css";
import QuoteFormPopup from "./QuoteFormPopUp";

const ImageSection = ({ title, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
  const getImageName = (path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const baseName = fileName
      .replace(/\.[^/.]+$/, "")
      .replace(/[-.][a-z0-9]{6,}$/i, "");

    return decodeURIComponent(baseName);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  return (
    <section className="p-6">
      <h2 className="md:text-3xl text-2xl font-bold text-[#021C57] mb-6 capitalize border-style p-5">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[25rem] md:h-[30rem] relative rounded-lg overflow-hidden shadow-lg group flex-shrink-0"
          >
            {/* Image */}
            <img
              src={img}
              alt={title}
              className="w-full h-1/2 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Bottom Overlay */}
            <div className="w-full h-1/2 flex flex-col justify-between">
              <span className="text-lg font-medium overflow-y-auto capitalize mx-4 mt-2">
                {getImageName(img)}
              </span>

              <div className="border-t-2 w-full flex justify-around mt-auto mb-4">
                <button
                  onClick={() => openQuoteForm(img, index)}
                  className="button-style text-xs my-2 font-semibold px-5 py-2 rounded transition"
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
      </div>

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
              <h3 className="text-xl font-bold mb-4 border-b-2 py-2">
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
                  
    </section>
  );
};

export default ImageSection;
