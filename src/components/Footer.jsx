import React from 'react'
import { IoMailOutline } from "react-icons/io5"
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import img2 from '../assets/Image2.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='md:grid md:grid-cols-2 gap-8 py-20 md:py-10 px-10 md:px-28 bg-orange-400 '>

<div className=" py-6  md:rounded-3xl w-full">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <div className="mb-4 rounded-xl">
      <div className="flex justify-between  bg-white rounded-xl md:w-[500px]">
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className="p-2 border  focus:outline-none rounded-xl"
        />
        <div className='flex '>

        <button className=" text-orange-600 px-4 py-2 cursor-pointer flex items-center gap-2 md:text-white md:bg-orange-600">Subscribe
        <FaLongArrowAltRight className='text-orange-600 md:text-white'/>
        </button>
        </div>
      </div>
    </div>

    
    <div className=" flex space-x-4 mb-4">
  <a href="#" className="text-white hover:text-gray-300">
    <div className="bg-orange-500 rounded-full p-3">
      <IoMailOutline size={30} />
    </div>
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <div className="bg-orange-500 rounded-full p-3">
      <SlSocialTwitter size={30} />
    </div>
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <div className="bg-orange-500 rounded-full p-3">
      <IoLogoInstagram size={30} />
    </div>
  </a>
</div>
<div>
  <h1 className='font-bold text-3xl  '>pti<span className='text-orange-600'>.</span></h1>

</div>

    <p className=" text-lg font-bold ">Copyright&copy;Tripp.. All rights reserved.</p>
  </div>
</div>
<div className='hidden md:block w-[300px]'>
  <img src={img2} alt="" />
</div>
    </div>
  )
}

export default Footer