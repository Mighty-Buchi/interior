"use client"
import Link from 'next/link'
import React from 'react'
import SectionCount from '../components/SectionCount'
import Image from 'next/image'
import { Playfair } from 'next/font/google';
import { FaArrowRight } from 'react-icons/fa6';
import {motion} from 'framer-motion'


const play = Playfair({
    subsets: ["latin"],
    weight: ["400",],
});

const Section = () => {
    return (
        <>
            <div className='pt-20 mb-2 md:mb-4 flex flex-col items-center '>
                <p className=" tracking-wide text-[#7b7b7b]">Get to know more</p>
                <h1 className={` ${play.className} text-4xl font-bold tracking-tight mb-2 md:mb-4`}>About Us</h1>
            </div>
            <div className='flex flex-col lg:flex-row max-w-7xl m-auto border-r border-l shadow-xl gap-10  border-[#E8E1D9] p-4 py-5   '>

                <motion.div
                initial={{opacity: 1 , translateX: 100}}
                whileInView={{opacity: 1 , translateX: 0}}
                transition={{duration:0.8,  }}
                
                className='flex flex-[6] flex-col gap-5 md:gap-7'>
                    <div className='border-[#E8E1D9]  bg-[#FAF8F5] rounded-2xl'>
                        <p className="text-2xl md:text-4xl border rounded-2xl border-[#E8E1D9] p-3 py-10 md:py-15 tracking-tight md:tracking-normal">We are a luxury interior designs studio dedicated to creating refined residential and commercial spaces.</p>
                    </div>
                    <SectionCount />
                    <div className="flex">
                        <Link
                            href="/contact"
                            className='flex justify-center items-center gap-2 bg-black text-white py-2.5 px-6 rounded-md hover:bg-gray-800 transition-colors'
                        >
                            Contact Us! <span><FaArrowRight /></span>
                        </Link>
                    </div>

                </motion.div>

                <motion.div
                 initial={{opacity: 1 , translateX: -100}}
                whileInView={{opacity: 1 , translateX: 0}}
                transition={{duration:0.8, }}
                className='flex-[4] flex flex-col gap-4 w-full max-w-[500px] mx-auto items-start'>
                    <div className='relative w-full aspect-[4/4] overflow-hidden rounded-2xl'>
                        <Image
                            src='/hero-4.jpg'
                            alt='about image'
                            fill
                            className='object-cover'
                        />
                    </div>


                    <p className='text-[#7b7b7b] leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga laudantium provident atque omnis vero quasi illum quae,
                        ducimus eum delectus.
                    </p>


                    <div className="flex mt-2">
                        <Link
                            href="/services"
                            className='flex justify-center items-center gap-2 bg-black text-white py-2.5 px-6 rounded-md hover:bg-gray-800 transition-colors'
                        >
                            Learn More <span><FaArrowRight /></span>
                        </Link>
                    </div>

                </motion.div>
            </div>
        
        </>
    )
}

export default Section
