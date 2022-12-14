import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='grid bg-zinc-700 pt-10 sm:gap-x-10 sm:pt-6 px-10 sm:px-40 grid-cols-1 sm:grid-cols-2 font-thin'>
        <div className='flex flex-col justify-start sm:gap-y-8 sm:py-16 '>
            <header className='sm:text-6xl text-2xl font-black uppercase'>Connect</header>
            <p>
                I am always looking for my next opportunity! Reach out to me and let's work together and build something great :)
            </p>
        </div>
        <form className='flex flex-col py-8 sm:py-16 gap-4 sm:gap-4 sm:border-none border-b border-teal-400' action="">
            <label className='flex flex-col gap-y-2 font-normal' htmlFor="name">
                Name:
                <input type="text" autoComplete='off' className='focus:outline-teal-400 font-thin bg-transparent border-b border-b-white p-1' name="name" id="" required />
            </label>
            <label className='flex flex-col gap-y-2 font-normal' htmlFor="email">
                Email:
                <input type="email" autoComplete='off' className='focus:outline-teal-400 font-thin bg-transparent border-b border-b-white p-1' name="email" id="" required />
            </label>
            <label className='flex flex-col gap-y-2 font-normal' htmlFor="message">
                Message:
                <textarea autoComplete='off' className='font-thin bg-transparent focus:outline-teal-400 border-b border-b-white p-1' name="message" id="" cols="30" rows="5"></textarea>
            </label>
            <button className='focus:outline-teal-400 border-2 border-teal-400 self-start p-2 hover:bg-teal-400 font-normal'>Submit</button>
        </form>
        <div className="sm:col-span-2 py-8 sm:py-16 font-normal flex items-center justify-between sm:border-t border-teal-400">
          <header className='text-xl'>Dwayne Rill Jr.</header>
          <div className="sm:flex hidden gap-x-4 text-sm">
            <a href="https://www.twitter.com/dwayne_devs" target="_blank" rel="noreferrer" className='focus:outline-teal-400'>Twitter</a>
            <a href="https://www.linkedin.com/in/dwaynerill-jr/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'>LinkedIn</a>
            <a href="https://github.com/dwaynerilljr" target="_blank" rel="noreferrer" className='focus:outline-teal-400'>GitHub</a>
          </div>
          <div className='sm:hidden flex gap-x-4 text-lg'>
            <a href="https://www.twitter.com/dwayne_devs" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><AiOutlineTwitter /></a>
            <a href="https://github.com/dwaynerilljr" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><AiOutlineGithub /></a>
            <a href="https://www.linkedin.com/in/dwaynerill-jr/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><AiOutlineLinkedin /></a>
          </div>
        </div>
    </footer>
  )
}
