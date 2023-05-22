import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[25vh]'>
        <div className='max-w-[1240px]  mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl '>
                Learn with us
            </div>
            <h2 className='text-white text-4xl md:text-7xl py-4'>Grow with us</h2>
            <div className='text-white text-xl md:text-4xl '>
                Learn
                <Typed
                className='pl-1'
                    strings={['MERN Stack','MEAN Stack','Python','C++','Javascript','Digital Marketing']}
                    typeSpeed={100}
                    loop 
                    backSpeed={80}
                />
            </div>
            <button className="w-max md:w-[15%] bg-black text-white p-2 rounded-lg mt-5">
          Get Started
        </button>

        </div>
    </div>
  )
}

export default Banner