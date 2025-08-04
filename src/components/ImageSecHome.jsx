import React, { useRef, useState } from "react";
import "../index.css";

function ImageSecHome({ title, images }) {
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
  const getImageName = (path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const baseName = fileName.replace(/\.[^/.]+$/, '')       
                           .replace(/[-.][a-z0-9]{6,}$/i, ''); 

  return decodeURIComponent(baseName);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <>
      <section className="px-2 md:w-[90%] md:mx-auto w-full mb-[5rem]">
        <h2 className="md:text-5xl text-2xl font-bold  text-[#021C57] mb-6 capitalize border-style p-5">
          {title}
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-2"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[250px] h-[20rem] m-2 relative rounded-lg overflow-hidden shadow-lg group flex-shrink-0"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`${title}-${index}`}
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
                      onClick={() => openModal(img, index)}
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
            <div className="absolute -bottom-10 right-2 flex gap-2 z-10">
              <button
                onClick={scrollLeft}
                className="button-style px-3 py-1 rounded transition"
              >
                ❮
              </button>
              <button
                onClick={scrollRight}
                className="button-style px-3 py-1 rounded transition"
              >
                ❯
              </button>
            </div> 
          </div>
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
                <h3 className="text-xl font-bold mb-4 py-2 border-b-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ImageSecHome;
