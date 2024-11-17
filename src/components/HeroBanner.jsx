import React from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <section className='flex items-center justify-center w-full h-[95vh] bg-[url("/banner-img.jpg")] bg-cover relative'>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="flex flex-col gap-10 mx-auto mt-16 w-full max-md:px-6 md:w-3/4 text-text-constant z-10">
            <h1 className='font-semibold text-4xl sm:text-5xl lg:text-6xl'>
                Transforming Ideas <span className='text-base md:text-lg'>into</span> <br /> Scalable Solutions <span className='text-base md:text-lg'>with</span> <br /> Precision <span className='text-base md:text-lg'>&</span> Innovation.
            </h1>
            <h3 className='max-w-sm text-text-constant/95'>
                I specialize in turning innovative ideas 💡 into robust, scalable solutions that benefit you and skyrocket 🚀 your agenda
            </h3>
            <Link to="/contact" className='w-max'>
                <CustomButton text="Get in Touch" size="small" btnType="one" />
            </Link>
        </div>
    </section>
  )
}

export default HeroBanner