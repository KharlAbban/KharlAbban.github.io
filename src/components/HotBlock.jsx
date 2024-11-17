import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { GrStatusInfo } from 'react-icons/gr'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const HotBlock = () => {
  return (
    <section className='py-6 px-3'>
        <div className="w-full md:w-4/5 mx-auto py-3">
            <h2 className='font-semibold font-ribeye underline text-center text-4xl mb-2'><span className='text-lt-sec-bg dark:text-dt-sec-bg'>HOT</span> ON THE BLOCK</h2>
            <div className="grid grid-cols-2 gap-2 pt-8 max-lg:grid-cols-1">
                <div className="p-1 rounded overflow-hidden bg-lt-sec-bg dark:bg-dt-sec-bg">
                    <img src="/main-hero-background.webp" className='object-cover h-full w-full' alt="Hot Project 🔥" />
                </div>
                <article className='rounded border-4 border-lt-comp-bg dark:border-dt-comp-bg p-3'>
                    <h4 className="mb-2 underline text-2xl">Project Name</h4>
                    <div className="relative opacity-85">
                        <h5 className='flex items-center gap-1 text-sm italic mb-3'><BiCategory /> Category: <span className='text-xl font-semibold'>Random Category</span></h5>
                        <h5 className='flex items-center gap-1 text-sm italic mb-3'><GrStatusInfo /> Status: <span className='text-xl font-semibold'>Random Category</span></h5>
                        <h5 className='underline mb-2'>Description:</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, aut vel similique, accusantium beatae sed quasi porro provident cumque dicta nisi nihil omnis necessitatibus deleniti cupiditate voluptatum excepturi perferendis? Alias, iusto? Ipsum iure officia magni quos aperiam quasi. Omnis, et?</p>
                    </div>
                    <Link to="/projects">
                        <CustomButton text="See More Like This" otherStyles="my-2" size="small" />
                    </Link>
                </article>
            </div>
        </div>
    </section>
  )
}

export default HotBlock