"use client"
import { motion } from 'framer-motion'
import { Playfair, Poppins, Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import React from 'react';


const play = Poppins({
  subsets: ["latin"],
  weight: ["400",],
});
const great = Great_Vibes({
  subsets: ["latin"],
  weight: ["400",],
});

const servicesData = [
  {
    title: "Core interior designs services",
    description: `" Strategic spatial solutions designed to evoke emotion and enhance lifestyle, ensuring every corner tells a story of sophistication and refined taste." `,
    items: ["Residential Designs", "Commercial Designs", "Interior Styling", "Furniture & decor selection", "Space Planning"],
    images: ["/service1.jpg", "/service2.jpg", "/service3.jpg"]
  },
  {
    title: "Specialized/Premium services",
    description: ` " Elevated living through bespoke details and technical expertise. We focus on high-end structural transformations and custom-tailored elements that define the character of a home."`,
    items: ["Custom furniture Designs", "Kitchen & Bathroom designs", "Lightening Designs", "Material & finish selection", "Luxury Renovation Consultation"],
    images: ["/service4.jpg", "/service5.jpg", "/service8.jpg"]
  },
  {
    title: "Project/ Execution services",
    description: ` " From initial concept to the final walkthrough, we oversee every logistical detail. Our execution services ensure a stress-free transition from architectural blueprints to a fully realized, liveable masterpiece."`,
    items: ["Design Project management", "Procurement Sourcing", "Turnkey Interior Solutions", "Home Staging"],
    images: ["/service7.jpg", "/gallery5.avif", "/service9.jpg"]
  },
];

export default function Services() {
  return (
    <div className="bg-[#FAF8F5] text-black min-h-screen px-6 py-12 md:px-12 lg:px-24 font-sans selection:bg-black selection:text-white">

      <header className="mb-20">
        <h1 className={` ${play.className} text-[15vw] md:text-[12rem] font-bold tracking-tighter leading-none text-center mb-8`}>
          Services
        </h1>

        <div className="flex justify-between border-b border-gray-200 pb-4 text-sm font-medium">
          <span>2020</span>
          <span>2026</span>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-medium leading-tight text-center tracking-tight">
            [ we provide a range of premium design services focused on helping homes evolve, balance, and impress. With a focus on aesthetics, comfort, and results.]
          </p>
        </div>
      </header>


      <motion.main
        className="space-y-20">
        {servicesData.map((service, index) => (
          <motion.section
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.9, }}
            key={index}
            className="border-t border-gray-100 pt-12 ">

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-gray-500 text-[16px] max-w-md leading-relaxed">
                {service.description}
              </p>
            </div>


            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-12">

              <ul className="space-y-3 text-[15px] text-gray-600">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>


              <div className=" lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.images.map((img, i) => (
                  <motion.div
                    initial={{ opacity: 1, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8 }}
                    key={i} className=" relative aspect-[4/3] bg-gray-100 overflow-hidden group">
                    <Image
                      src={img}
                      alt={`${service.title} example ${i + 1}`}
                      fill
                      className=" object-cover hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </motion.main>
    </div>
  );
}