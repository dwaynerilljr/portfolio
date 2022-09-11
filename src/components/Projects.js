import React from 'react'
import xmas from '../christmas-app.png'
import { AiFillGithub } from 'react-icons/ai'

export default function Projects() {
  return (
    <div className='grid about bg-white rounded-2xl  font-primary my-16 w-5/6 m-auto font-light items-center gap-20 sm:grid-cols-8 xl:grid-cols-8 p-6'>
        <div className="border-l-4 border-primary self-start justify-self-end uppercase text-3xl font-semibold" id='about-head'>
            Projects
        </div>
        <div className="flex flex-col col-span-2 rounded-lg gap-y-5 p-4 card">
            <img src={xmas} alt="" />
            <header className='text-2xl font-normal'>Christmas List App</header>
            <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus asperiores, ducimus veritatis perspiciatis laboriosam laudantium vero, voluptates perferendis,
            </p>
            <div className="flex gap-4">
                <a href="" className='items-center rounded-lg text-white flex px-4 py-2 font-bold'>Live Demo</a>
                <a href="" className='items-center flex px-4 py-2 text-3xl font-bold uppercase p-4'><AiFillGithub /></a>
            </div>
        </div>
        <div className="flex flex-col col-span-2 gap-y-5 p-4 card">
            <img src={xmas} alt="" />
            <header className='text-2xl font-normal'>Christmas List App</header>
            <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus asperiores, ducimus veritatis perspiciatis laboriosam laudantium vero, voluptates perferendis,
            </p>
            <div className="flex gap-4">
                <a href="" className='items-center flex px-4 py-2 font-bold'>Live Demo</a>
                <a href="" className='items-center flex px-4 py-2 text-3xl font-bold uppercase p-4'><AiFillGithub /></a>
            </div>
        </div>
        <div className="flex flex-col col-span-2 gap-y-5 p-4 card">
            <img src={xmas} alt="" />
            <header className='text-2xl font-normal'>Christmas List App</header>
            <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus asperiores, ducimus veritatis perspiciatis laboriosam laudantium vero, voluptates perferendis,
            </p>
            <div className="flex gap-4">
                <a href="" className='items-center flex px-4 py-2 font-bold'>Live Demo</a>
                <a href="" className='items-center flex px-4 py-2 text-3xl font-bold uppercase p-4'><AiFillGithub /></a>
            </div>
        </div>
    </div>
  )
}
