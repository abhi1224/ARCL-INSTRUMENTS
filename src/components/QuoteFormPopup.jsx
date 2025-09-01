import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from "emailjs-com";

export default function QuoteFormPopup({ setQuoteForm, title = '' }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpqh7ub",
        "template_5u2zrbp",
        e.target,
        "Hr3GqO26H_N1EUV_p"
      )
      .then(
        (result) => {
          alert("✅ Thank you for contacting us! We’ll get back to you as soon as possible.");
        },       
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Popup overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        {/* Popup card */}
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={() => setQuoteForm(false)}
          >
            <IoClose size={24} />
          </button>

          <h2 className="text-xl font-semibold mb-4">Get Quote</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                name="user_name"
                type="text"
                className="w-full border rounded-md px-3 py-2 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                name="user_email"
                type="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none "
                placeholder="Enter your email"
                required
              />
            </div>

            {/* phone number */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone number *</label>
              <input
                name="user_number"
                type="number"
                className="w-full border rounded-md px-3 py-2 focus:outline-none "
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Product *
              </label>
              <input
                name="product_name"
                type="text"
                value={title}
                className="w-full border rounded-md px-3 py-2 focus:outline-none "
                placeholder="Enter product name"
                required
                readOnly = {title != ""}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                name="message"
                rows="3"
                className="w-full border rounded-md px-3 py-2 focus:outline-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="button-style w-full py-2 rounded-md hover:bg-teal-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
