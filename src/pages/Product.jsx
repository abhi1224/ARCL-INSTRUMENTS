import React from 'react'
import ImageSection from "../components/ImageSection";
import { getImagesByFolders } from "../utils/ImageLoader";

function Product() {
    const imagesByFolder = getImagesByFolders();
    
    return (
        <div className="bg-white">
          <h1 className="md:text-5xl text-2xl font-bold  w-full mx-auto text-[#021C57] mb-6 capitalize border-style py-5">
          Explore Our Products
        </h1>
            {Object.entries(imagesByFolder).map(([folderName, images]) => (
              <ImageSection key={folderName} title={folderName} images={images} />
            ))}
          </div>
    )
}

export default Product