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
            <div className="space-y-4">
              <div className="flex items-start gap-3 ">
                <IoHome className='text-4xl'/>
                <a 
                  className='hover:text-blue-500 hover:underline'
                  href='https://maps.app.goo.gl/dJHoT3W4RwZn6pFC7' target='_blank'>
                  ARCL Instruments Pvt. Ltd. Keshrinath Gopal Patil Ch,Kandivali West, Kandivali West, Mumbai - 400067, Maharashtra
                </a>
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

        <div className="mt-10 w-full mx-auto">
          <iframe 
            className='w-full h-96'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6498292041924!2d72.83050631022134!3d19.210490947662752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b72f867ac6c3%3A0x660b75f814afccbe!2sARCL%20Instruments%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756807128364!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    </>
  )
}

export default Contact