import React from 'react'

export default function Navbar() {
  return (
    <nav className='font-primary px-32 col-span-6 font-semibold py-16 text-xl w-full flex'>
        <a href="https://www.google.com">Dwayne Rill Jr.</a>
        <div className="ml-auto flex gap-20">
            <a href="https://www.google.com">About</a>
            <a href="https://www.google.com">Projects</a>
            <a href="https://www.google.com">Contact</a>
        </div>
    </nav>
  )
}
