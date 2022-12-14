import React from 'react'
import xmas from '../christmas-app.png'

export default function Projects() {
  return (
    <section className='grid sm:pb-24 gap-2 p-4 grid-cols-1 uppercase sm:mx-40 sm:grid-cols-4 sm:gap-10 font-primary'>
        <header className="sm:col-span-4 flex sm:pb-2 justify-self-start text-2xl sm:text-7xl uppercase border-b font-black border-b-teal-400">
            Projects
        </header>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-lg sm:text-xl'>Christmas List App</header>
            <div className='flex justify-between text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 sm:gap-x-4'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Tailwind</p>
                </div>
                <div className='flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://github.com/dwaynerilljr/christmas-list-app" className='border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://xmas-list.netlify.app/" className='border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-lg sm:text-xl'>Christmas List App</header>
            <div className='flex justify-between text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 sm:gap-x-4'>
                    <p className=''>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Tailwind</p>
                </div>
                <div className='flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-lg sm:text-xl'>Christmas List App</header>
            <div className='flex justify-between text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 sm:gap-x-4'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Tailwind</p>
                </div>
                <div className='flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-lg sm:text-xl'>Christmas List App</header>
            <div className='flex justify-between text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 sm:gap-x-4'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Tailwind</p>
                </div>
                <div className='flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://www.google.com" className='border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
            </div>
        </div>
    </section>
  )
}
