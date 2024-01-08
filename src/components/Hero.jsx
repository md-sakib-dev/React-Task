import React from 'react'
import img1 from '../assets/Image1.png'

const Hero = () => {
  return (
   <div className='mx-auto w-full py-10 px-10 md:px-28'>
     <div className='grid gap-8 md:grid-cols-2 md:bg-orange-400  md:border-2 md:rounded-2xl  md:border-solid h-60 w-[1024px]'>
        <div className='md:mt-10 md:ml-20'>
            <h1 className='font-bold text-2xl md:text-3xl md:text-white'>Deliver Food To Your Door <br /><span className='ml-28'>Step|</span> </h1>
            <p className='text-md mt-4 md:text-white'>Authentic Food,Quick Service,Fast Delevery</p>
        </div>
        <div className='mt-8 bg-orange-400 md:bg-none md:border-none border-2 rounded-2xl  border-solid h-42 w-80 overflow-visible'>
           <div className='-mt-16 md:-mt-3'>
           <img className='w-[500px] md:w-[700px]' src={img1} alt="" />
           </div>
        </div>
    </div>

   </div>
  )
}

export default Hero