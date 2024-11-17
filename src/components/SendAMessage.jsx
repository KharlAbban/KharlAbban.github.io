import React from 'react'
import { Form } from 'react-router-dom'
import CustomButton from "./CustomButton"

const SendAMessage = () => {
  return (
    <section className='py-6 w-full bg-[url("/pexels-ovan-57690.jpg")] bg-cover relative text-text-constant'>
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="grid grid-cols-2 max-md:gap-10 max-md:grid-cols-1">
            <aside className='flex flex-col gap-4 z-10 h-max my-auto px-6'>
                <h2 className='font-semibold text-4xl'>Send Me A Message</h2>
                <p className='max-w-md'>Your suggestions are important to me, and are very useful. They help me mold my designs to better your experience on my website.</p>
                <p>Please leave me a suggestion.</p>
            </aside>
            <div className='px-4 py-3 z-10'>
                <Form className='w-full'>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-5">
                        <div className="input-group">
                            <label className='block mb-1' htmlFor="fullname">Name:</label>
                            <input type="text" id='fullname' name='fullname' className='text-lt-prim-text-color w-full p-2 outline-none border-none' placeholder='Full name' />
                        </div>
                        <div className="input-group">
                            <label className='block mb-1' htmlFor="email">Email:</label>
                            <input type="email" name='email' className='text-lt-prim-text-color w-full p-2 outline-none border-none' placeholder='Email here' />
                        </div>
                    </div>
                    <div className="input-group">
                        <label className='block mb-1' htmlFor="message">Your Message:</label>
                        <textarea name="message" placeholder='Say something' rows={5} className='text-lt-prim-text-color w-full mb-4 p-2 outline-none border-none' id="message" />
                    </div>
                    <CustomButton text="Send To Me" otherStyles="w-full" />
                </Form>
                <p className='mt-2 text-sm text-gray-300'>NB: Your information is securely kept and NEVER shared!</p>
            </div>
        </div>
    </section>
  )
}

export default SendAMessage