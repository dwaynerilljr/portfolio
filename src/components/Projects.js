import React from 'react'
import xmas from '../christmas-app.png'
import { AiFillGithub } from 'react-icons/ai'

export default function Projects() {
  return (
    <section className='grid px-32 grid-cols-4 gap-10 font-primary'>
        <div className="col-span-2 flex flex-col">
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-xl'>Christmas List App</header>
            <div className='flex gap-x-4'>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Tailwind</p>
            </div>
        </div>
        <div className='col-span-2 flex flex-col'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-xl'>Christmas List App</header>
            <div className='flex gap-x-4'>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Tailwind</p>
            </div>
        </div>
        <div className='col-start-1 col-span-2 flex flex-col'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-xl'>Christmas List App</header>
            <div className='flex gap-x-4'>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Tailwind</p>
            </div>
        </div>
        <div className='col-span-2 flex flex-col'>
            <img src={xmas} alt="" className='w-full' />
            <header className='uppercase text-xl'>Christmas List App</header>
            <div className='flex gap-x-4'>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Tailwind</p>
            </div>
        </div>
    </section>
  )
}
