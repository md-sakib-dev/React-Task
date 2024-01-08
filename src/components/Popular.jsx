import React, { useEffect  } from 'react'
import { useDispatch ,useSelector  } from 'react-redux'
import { Products } from '../redux/features/Cart';
import Slider from 'react-slick';
import { settings } from '../redux/settings';


const Popular = () => {
 
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(Products())
  },[])
  const {products,loading}= useSelector((state)=>state.allproducts)
  return (
    <div className='mx-auto w-full py-20 md:py-10 px-10 md:px-28'>
        <div className='text-2xl font-bold'>
           <h1>Popular</h1> 
          
        </div>
       
        
        <div className='mt-10'>
        <Slider {...settings} >
          {products.Items?.map(({ ImageUrl, Name},index) => (
            <div className='flex flex-col gap-8' key={index}>
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
  );
};

export default Popular;