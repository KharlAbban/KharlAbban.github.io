import React from 'react'

const Banner = () => {
  return (
    <section className='py-6 px-4 w-full relative bg-gradient-to-tr from-lt-sec-bg to-lt-comp-bg'>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="lg:w-3/4 w-full mx-auto flex justify-center gap-16 lg:justify-between relative items-center py-8 z-10">
            <h3 className='font-ribeye text-5xl md:text-6xl italic text-text-constant'>KharlAbban</h3>
            <h3 className='text-4xl font-semibold max-lg:hidden'>Quality & Excellence</h3>
        </div>
    </section>
  )
}

export default Banner