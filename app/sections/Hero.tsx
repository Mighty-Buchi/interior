"use client"

import { Playfair, Bodoni_Moda, Great_Vibes, } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
const bodoni = Bodoni_Moda({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
const great = Great_Vibes({
    subsets: ["latin"],
    weight: ["400",],
});



const Hero = () => {

    const headline = "Welcome to Our Interior Design Services"
    const words = headline.split(" ")

    const sub = " Where luxry meets elegance and aura. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque quam odit quae, cupiditate modi! Nam repudiandae reprehenderit debitis reiciendis iusto eaque quasi quisquam! Provident sint consequatur molestias cum iusto?"
    const subcontent = sub.split(" ")




    return (
        <section className='relative flex justify-center  px-2 min-h-screen md:min-h-0 overflow-hidden bg-[#F5F5F0] mx-1 z-2    '>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto gap-5 py-10 max-w-6xl w-full'>


                <div className="relative z-20 flex-1 text-center md:text-left gap-4 flex flex-col">
                    
                    <motion.h1
                        className={` flex flex-wrap ${great.className} [-webkit-text-stroke:0.5px_currentColor] text-[57px] pt-8 leading-[1.1] tracking-wider md:pt-5 md:text-7xl font-bold mb-5 text-white md:text-black gap-2 m-auto `}>
                        {words.map((word, index) => (
                            <motion.span key={index}
                                initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <p className='flex flex-wrap gap-1 text-[15px] md:text-lg text-slate-200 md:text-black/60  leading-relaxed'>
                       {subcontent.map((letter, index) => (
                            <motion.span key={index}
                                initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.03 * index }}
                                
                            >
                                {letter}
                            </motion.span>
                       ))}
                    </p>
                    <div className="pt-5 flex justify-center  md:justify-start">
                        <Link href="/services" className=" flex justify-center items-center gap-2 mt-4 px-8 py-4 bg-white md:hover:border-black md:border  hover:border-black  text-black font-semibold md:bg-black md:hover:bg-white md:text-white md:hover:text-black rounded-full hover:scale-110 transition-all duration-200">
                            Explore Projects <span><FaArrowRight /></span>
                        </Link>
                    </div>
                </div>


                <div className="absolute inset-0 md:relative md:inset-auto md:flex-1 flex justify-center items-center z-0">


                    <Image
                        src="/image.png"
                        alt="Hero Image"
                        width={480}
                        height={480}
                        className="object-cover w-full h-full md:w-auto md:h-auto 
                                   border-4 rounded-[40px] 
                                   md:rounded-tl-[150px] md:rounded-br-[150px] md:hidden"
                    />

                    <div className=" md:grid grid-cols-2 gap-2 hidden overflow-none justify-center items-center ">
                        <Image
                            src="/image.png"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            priority
                            className="object-cover w-full h-full md:w-auto md:h-auto 
                                    
                                   md:rounded-tl-[150px] md:rounded-br-[80px]"
                        />
                        <Image
                            src="/hero-2.jpg"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            priority
                            className="object-cover w-full h-full md:w-auto md:h-auto 
                                   
                                   md:rounded-tr-[150px] md:rounded-bl-[80px]"
                        />
                        <Image
                            src="/heroo-3.jpg"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            priority
                            className="object-cover w-full h-full md:w-auto md:h-auto 
                                   
                                   md:rounded-bl-[150px] md:rounded-tr-[80px]"
                        />
                        <Image
                            src="/hero-4.jpg"
                            alt="Hero Image"
                            width={350}
                            height={350}
                            priority
                            className="object-cover w-full h-full md:w-auto md:h-auto 
                                   
                                   md:rounded-tl-[80px] md:rounded-br-[150px]"
                        />
                    </div>


                    <div className="absolute inset-0 bg-black/50 md:bg-transparent 
                                    rounded-[40px]
                                    md:rounded-none z-10" />
                </div>

            </div>
        </section>
    )
}

export default Hero
