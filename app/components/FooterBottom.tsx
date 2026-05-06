import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const FooterBottom = () => {
    return (
        <div className='max-w-7xl flex m-auto mt-1 border-t pt-15 px-2'>
            <div className='flex flex-col md:flex-row    m-auto w-full px-2 md:px-0 '>
                <div className="flex flex-col gap-5 flex-1 pb-15 justify-start m-auto text-center md:text-start ">
                    <h1 className='max-w-md text-3xl '> Quiet, Natural, meaningful Living</h1>
                    <p className='max-w-md'>we are a lifestyle brand creating quiet, natural furniture for everyday living.</p>
                    <div className=" flex gap-5 justify-center md:justify-start"> 
                        <Link href="https://instagram.com" className=" text-2xl md:text-3xl hover:scale-110 transition-all duration-200 ease-in-out"><FaInstagram /></Link>
                        <Link href="https://twitter.com" className=" text-2xl md:text-3xl hover:scale-110 transition-all duration-200 ease-in-out"><FaTwitter /></Link>
                        <Link href="https://tiktok.com" className=" text-2xl md:text-3xl hover:scale-110 transition-all duration-200 ease-in-out"><FaTiktok /></Link>
                        <Link href="https://whatsapp.com" className=" text-2xl md:text-3xl hover:scale-110 transition-all duration-200 ease-in-out"><FaWhatsapp /></Link>
                    </div>
                </div>
                <div className=" flex flex-1 text-center md:text-start flex-col gap-7 md:gap-0 md:flex-row justify-center pb-5 ">
                    <div className="flex-1 ">
                        <p className="pb-2 text-white text-xl">Quick links</p>
                        <ul className='flex flex-col text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer'>
                            <Link href="/" className=' text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer' >Home</Link>
                            <Link href="/services" className=' text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer' >Services</Link>
                            <Link href="/contact" className=' text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer' >Contact</Link>
                        </ul>
                    </div>
                    <div className="flex-1  flex flex-col">
                        <p className="mb-2 text-white text-xl">Our Studio</p>
                        <p className='flex justify-center text-gray-300'>ABC- 120 orisha ofemi district.international airport</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="mb-2 text-white text-xl">Legal</p>
                        <div className=" flex flex-col ">
                            <span className="text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Terms of service</span>
                            <span className="text-gray-300 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Privacy policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
