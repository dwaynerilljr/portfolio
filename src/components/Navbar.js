import React from 'react'

export default function Navbar() {
  return (
    <nav className='font-primary p-4 sm:px-40 col-span-6 sm:py-16 text-sm sm:text-xl w-full flex'>
        <a href="https://www.google.com">Dwayne Rill Jr.</a>
        <div className="ml-auto flex gap-2 sm:gap-20">
            <a href="https://www.google.com">About</a>
            <a href="https://www.google.com">Projects</a>
            <a href="https://www.google.com">Contact</a>
        </div>
    </nav>
  )
}
