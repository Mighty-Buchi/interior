import Link from 'next/link'
import React from 'react'
import { IoChatbubblesSharp } from 'react-icons/io5'

const FooterTop = () => {
  return (
    <div className='max-w-7xl flex flex-col md:flex-row flex-1  py-25 m-auto justify-between md:items-center w-full border-b'>
      <div className=' flex flex-1 justify-start m-auto  '>
        <p className='max-w-md px-2 mb-3 text-[15px] md:text-lg border-r'>Crafted from natural materials, for a balanced, quiet, meaningful and modern living space</p>
      </div>
      <div className='flex flex-1  items-center md:items-start  flex-col px-2 '>
        <span className='text-4xl md:text-5xl font-bold pt-5 md:pt-0 mb-7 m-auto text-center md:text-start '>create a calm and balanced living space</span>
        <Link href="/contact" className='bg-white text-[#222222] max-w-[300px] flex justify-center items-center gap-2 rounded-3xl py-3 px-5 hover:scale-110 duration-200 transition-all ease-in-out'>Start a Conversation <span><IoChatbubblesSharp size={20} /></span></Link>
      </div>
    </div>
  )
}

export default FooterTop
