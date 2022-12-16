import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

export default function Navbar() {
  return (
    <nav className='font-primary m-10 sm:m-0 sm:px-40 col-span-6 items-center sm:py-16 text-sm sm:text-xl flex'>
        <header className='text-xl'>Dwayne Rill Jr.</header>
        <div className="ml-auto text-lg sm:text-2xl flex gap-x-4 sm:gap-x-10">
            <a href="https://www.twitter.com/dwayne_devs" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
            <a href="https://github.com/dwaynerilljr" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
            <a href="https://www.linkedin.com/in/dwaynerill-jr/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
        </div>
    </nav>
  )
}
