"use client"
import { motion } from 'framer-motion'
import React from 'react';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, rotateY: "90deg" }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6 md:p-12">

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center">

        <div className="w-full md:w-3/4 text-black  bg-[#E8E1D9] rounded-[40px] p-8 md:p-16 min-h-[500px] flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Talk to us?
          </h2>
          <p className="text-black/70 text-lg md:text-xl max-w-md leading-relaxed">
            Fill in your details to book a call with us, see you on the other side
          </p>
        </div>


        <div className="w-full max-w-md mt-[-100px] md:mt-0 md:absolute md:right-0 bg-[#6e632e] rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/10">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Budget (USD)"
                className="w-full bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>

            <div>
              <textarea
                placeholder="Enter your Messsage"
                rows={4}
                className="w-full  bg-[#323030] text-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-300 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-black bg-white hover:bg-black hover:text-white  font-semibold py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;