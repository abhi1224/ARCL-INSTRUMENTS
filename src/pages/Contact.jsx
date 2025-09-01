import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "emailjs-com"; 

function Contact() {

  
const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_bpqh7ub",
    "template_5u2zrbp",
    e.target,
    "Hr3GqO26H_N1EUV_p"
  )
  .then((result) => {
    alert("Message sent successfully!");
  }, (error) => {
    alert("Error sending message: " + error.text);
  });
};

  return (
    <>
        <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Contact Information</h1>
          <div className=" space-y-4">
            <div className="flex items-start gap-3 ">
              <IoHome className='text-4xl'/>
              <p>
                ARCL Industries Keshrinath Gopal Patil Ch,Kandivali West, Kandivali West, Mumbai - 400067, Maharashtra
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className='text-2xl'/>
              <p>   
                <a 
                  className="hover:underline transition"
                  href="tel:+918169695728">
                  Call +91 8169695728</a><br />
                  <span className="text-sm">Monday to Saturday 10 AM to 6 PM</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IoMdMail className='text-2xl'/>
              <p>
                 <a
                    href="mailto:arclinstruments@gmail.com"
                    className="hover:underline transition-all"
                    >Mail: arclinstruments@gmail.com
                    </a><br />
                <span className="text-sm">Email us your query</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name='from_name'
              placeholder="Enter your name"
              className="w-full border border-gray-300 outline-none rounded p-2"
            />
            <input
              type="email"
              name='from_email'
              placeholder="Enter email address"
              className="w-full border border-gray-300 outline-none rounded p-2"
            />
            <input
              type="text"
              name='subject'
              placeholder="Enter your subject"
              className="w-full border border-gray-300 outline-none rounded p-2"
            />
            <textarea
              name='message'
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 outline-none rounded p-2"
            />
            <button
              type="submit"
              className="button-style px-6 py-2 rounded hover:bg-zinc-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact