import React from 'react'
import { useLocation } from 'react-router-dom'
import { pageheaderitems } from '../constants/headings';

const PageHeader = () => {
    const {pathname} = useLocation();
    const routeHeader = pathname.split("/")[1];
    const data = pageheaderitems[routeHeader];

  return (
    <header className='flex items-center justify-center w-full max-md:h-[35vh] h-[40vh] bg-[url("/banner-img.jpg")] bg-cover relative'>
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="flex flex-col gap-4 max-md:gap-3 justify-center items-center mt-10 w-full text-text-constant z-10">
            <h1 className="text-5xl max-md:text-4xl font-semibold">{data.title}</h1>
            <h3 className='font-thin max-w-md mx-auto'>{data.description}</h3>
        </div>
    </header>
  )
}

export default PageHeader