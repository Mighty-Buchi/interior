import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className=' flex justify-center   sticky top-0 z-50'>
            <div className='flex items-center  justify-center gap-8 bg-[#F5F5F0]/20 backdrop-blur-lg md:gap-96 m-auto py-3 md:py-5  px-4 rounded-full my-1 border border-[#211b01c0]'>
                <Link href="/" >
                <h1 className="font-bold text-lg">GREAT</h1>
                    {/* <Image
                        src="/window.svg"
                        alt="Logo"
                        width={50}
                        height={50 }
                        
                    /> */}
                </Link>
                <nav>
                    <ul className='flex gap-3 tracking-normal md:gap-10 text-[14px] font-medium uppercase md:tracking-widest'>
                        <Link href="/" className='hover:opacity-50 hover:scale-110 transition-opacity'>Home</Link>
                        <Link href="/services" className='hover:opacity-50 hover:scale-110 transition-opacity'>Services</Link>
                        <Link href="/contact" className='hover:opacity-50 hover:scale-110 transition-opacity'>Contact</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
