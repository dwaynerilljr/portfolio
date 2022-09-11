import React from 'react'

export default function Navbar() {
  return (
    <nav className='font-primary text-white px-32 font-semibold py-16 text-xl w-full flex'>
        <a href="">Dwayne Rill Jr.</a>
        <div className="ml-auto flex gap-20">
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    </nav>
  )
}
