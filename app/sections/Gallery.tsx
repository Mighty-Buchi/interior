"use client"
import { motion } from 'framer-motion'
import { Playfair } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const play = Playfair({
  subsets: ["latin"],
  weight: ["400",],
});

const gallery = [
  { id: 1, title: "Amazing stuff", subtitle: "elegant beauty", image: "/gallery1.avif", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
  { id: 2, title: "Amazing stuff", subtitle: "elegant beauty", image: "/gallery2.avif", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
  { id: 3, title: "Amazing stuff", subtitle: "elegant beauty", image: "/gallery3.avif", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
  { id: 4, title: "Amazing stuff", subtitle: "elegant beauty", image: "/gallery4.avif", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
  { id: 5, title: "Amazing stuff", subtitle: "elegant beauty", image: "/gallery5.avif", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
  { id: 6, title: "Amazing stuff", subtitle: "elegant beauty", image: "/hero-img.jpg", icon: <BsFillArrowUpRightCircleFill size={20} />, year: "2025" },
]

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 1, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className='max-w-7xl mx-auto px-4 mb-10 overflow-hidden justify-center'>
      <div className='pt-20 flex flex-col items-center'>
        <p className="tracking-wide text-[#7b7b7b]">See Amazing designs in our</p>
        <h1 className={`${play.className} text-4xl font-bold tracking-tight mb-8`}>Gallery</h1>
      </div>


      <motion.div

        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <motion.div
            initial={{ opacity: 1, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            key={item.id} className='flex flex-col'>

            <div className='relative w-full h-auto aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden group rounded-lg'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'
              />
            </div>


            <div className='mt-3'>
              <div className='flex justify-between items-center'>
                <h2 className='text-[#222222] font-bold text-lg'>{item.title}</h2>
                <span className='text-black hover:text-blue-600 cursor-pointer transition-colors'>
                  {item.icon}
                </span>

              </div>
              <div className='flex justify-between items-center mt-1'>
                <p className='text-[#7b7b7b]'>{item.subtitle}</p>
                <span className='text-sm text-gray-500'>{item.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div >
  )
}

export default Gallery