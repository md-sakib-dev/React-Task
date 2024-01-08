import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { settings } from '../redux/settings'
const PrevArrow = (props) => (
  <div
    {...props}
    className="slick-prev custom-prev-arrow"
    style={{ color: 'red', fontSize: '24px', marginLeft: '-30px' }}
  />
);

const NextArrow = (props) => (
  <div
    {...props}
    className="slick-next custom-next-arrow"
    style={{ color: 'blue', fontSize: '24px', marginRight: '-30px' }}
  />
);




const Recomended = () => {
    const {products,loading}= useSelector((state)=>state.allproducts)
  return (
    <div className='mx-auto w-full py-20 md:py-10 px-10 md:px-28'>
       <div className='text-2xl font-bold'>
           <h1>Recomended</h1> 
          
        </div>
       
        
        <div className='mt-10'>
          <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
          {products.Items?.map(({ ImageUrl, Name},index) => (
            <div className='flex flex-col gap-1' key={index}>
              <img className='w-[200px] h-[200px] mx-auto pb-2' src={ImageUrl} alt='' />
              <div className='text-center'>
                <h3 className='font-bold text-sm text-center pb-2'>{Name}</h3>
                {/* <button className='text-[#00df9a] w-[200px] mx-auto rounded-md my-6 font-medium py-3 px-6 bg-black'>
                  Add To Card
                </button> */}
              </div>
            </div>
          ))}
      </Slider>
        </div>
    </div>
        
  )
}

export default Recomended