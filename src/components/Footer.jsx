import React from 'react'
import { BiEnvelopeOpen } from 'react-icons/bi'
import { FaEnvelopeOpen, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full font-ribeye'>
      <section className="w-full py-6 max-md:px-4">
        <div className="w-4/5 max-md:w-full mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <article>
              <img src="/logo_full_light_text_trans.png" alt="KharlAbban logo" className='mx-auto' />
              <p className="mt-4">A one-stop shop well-versed in product development, crafting real-world solutions to real-world problems -  helping others grow with software!</p>
          </article>
          <article>
            <h4 className='underline font-semibold mb-4'>Quick Links</h4>
            <p className='mb-4'><Link to="/projects" className='hover:underline duration-100'>- Projects</Link></p>
            <p className='mb-4'><Link to="/about" className='hover:underline duration-100'>- About Kharl</Link></p>
          </article>
          <article>
            <h4 className='underline font-semibold mb-4'>I am ✨</h4>
            <p className='mb-3'>A team-player</p>
            <p className='mb-3'>Detail-oriented</p>
            <p className='mb-3'>A Smart worker 😏</p>
            <p className='mb-3'>Happy to work with you</p>
          </article>
          <article>
            <h4 className='underline font-semibold mb-4'>Contact Me</h4>
            <p className='flex gap-2 items-start mb-3'><FaEnvelopeOpen /> <Link to="/contact" className='hover:underline'>khvngkharl123@gmail.com</Link></p>
            <p className='flex gap-2 items-start mb-3'><FaLocationDot /> Africa, Earth</p>
            <p className='flex gap-2 items-start mb-3'><FaTelegram /> <a href='https://t.me/khvngkharl' target='_blank' className='hover:underline'>khvngkharl</a></p>
            <p className='flex gap-2 items-start mb-3'><FaLinkedin /> <a href='https://www.linkedin.com/in/er-carl-abban-623817271' target='_blank' className='hover:underline'>Er-Carl Abban</a></p>
          </article>
        </div>
      </section>
      <section className='w-full text-lg font-semibold invert-text-color flex justify-center items-center py-2 bg-lt-comp-bg dark:bg-dt-comp-bg'>
        Copyright &copy; {new Date().getFullYear()} | KharlAbban
      </section>
    </footer>
  )
}

export default Footer