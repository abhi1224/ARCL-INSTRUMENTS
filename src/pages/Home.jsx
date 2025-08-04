import React from "react";
import Carousel from "../components/Carousel";
import ImageSecHome from "../components/ImageSecHome";
import { getImagesByFolders } from "../utils/ImageLoader";

import trustImg from "../assets/why-us/trust.png";
import qualityImg from "../assets/why-us/quality.png";
import supportImg from "../assets/why-us/support.png";
import { NavLink } from "react-router-dom";




export default function Home() {
  const imagesByFolder = getImagesByFolders();
  const features = [
    {
      title: "Trusted by Industry Experts",
      description:
        "We have built a reputation of reliability and professionalism, trusted by labs and industries across the nation.",
      image: trustImg,
    },
    {
      title: "Top-Quality Equipment",
      description:
        "Our products are sourced from the best manufacturers and rigorously tested to ensure high standards.",
      image: qualityImg,
    },
    {
      title: "Dedicated Customer Support",
      description:
        "We provide 24/7 support to resolve your queries and ensure seamless experience from order to delivery.",
      image: supportImg,
    },
  ];
  return (
    <main>
      <Carousel />
      <div className="w-[90%] mx-auto my-5 text-lg text-justify">

        Arcl manufacture and sale a wide range of laboratory instruments, including concrete, cement, aggregate, soil, bitumen, surveying and scientific equipment fields.
        <br />
        We use flexible management to quickly adapt to market needs, focusing on science to develop new laboratory instruments and stay connected with customers and experts. We are an <strong>ISO 9001:2015 Certified company</strong> and all our products comply with stringent International Standards such as ISO/IEC 17025:2017 Certifications.
      </div>
      <div className="w-[90%] mx-auto my-5 text-lg text-justify">
        <h1 className="md:text-5xl text-2xl font-bold  text-[#021C57] mb-6 capitalize border-style p-5">Civil Laboratory Equipment</h1>
        <p>Arcl offers a wide range of laboratory equipment designed to enhance precision, reliability, and efficiency in various scientific applications. Our advanced range of laboratory equipment includes compression testing machine with fully automatic for precise results of concrete strength, ovens that deliver uniform heating, and pan mixer for consistent mixing. Additionally, our balance provide efficient readings of materials, while our NDT instruments utilize advanced technology to provide accurate data. Arcl laboratory equipment are equipped with user- friendly controls to ensure the highest standards of performance and safety.</p>

      </div>
      {/* product section */}
      <div className="bg-white">
        {Object.entries(imagesByFolder).map(([folderName, images]) => (
          <ImageSecHome key={folderName} title={folderName} images={images} />
        ))}
      </div>

      {/* why choose us */}

      <section className="py-16 px-6 md:px-16 bg-gray-100 text-[#021C57]">
        <h2 className="text-5xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="text-2xl my-5 w-[80%] mx-auto">
          We deliver exceptional quality, personalized service, and reliable
          results tailored to meet your needs. Trust us for a seamless
          experience and proven expertise.
        </div>

        <div className="grid mt-10 gap-10 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain p-6"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 border-l-4 px-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact us  */}
      <section className="w-full flex bg-gray-100 justify-center items-center py-10 px-4">
        <div className="w-full lg:w-4/5 bg-white rounded-lg shadow-xl p-8 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Interact For Our Various Services <br className="hidden sm:block" />
            Anywhere From The World
          </h2>

          <NavLink
            to='/contact'
             className="px-6 py-2 button-style font-medium rounded-md shadow  transition duration-300">
            Contact Us
          </NavLink>
        </div>
      </section>

      
    </main>
  );
}
