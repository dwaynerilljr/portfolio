import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FiMonitor } from 'react-icons/fi'
import poke from '../poke-memory.png'
import nba from '../nba-quiz.png'
import todo from '../todo.png'
import weather from '../weather.png'

export default function Projects() {
  return (
    <section className='grid sm:pb-24 gap-12 m-10 sm:m-0 grid-cols-1 uppercase sm:mx-40 sm:grid-cols-4 sm:gap-10 font-primary'>
        <header className="sm:col-span-4 flex sm:pb-2 justify-self-start text-2xl sm:text-7xl uppercase border-b font-black border-b-teal-400">
            Projects
        </header>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={poke} alt="" className='w-full border border-white' />
            <header className='uppercase text-lg sm:text-xl'>Pokémon Memory</header>
            <div className='flex justify-between items-center text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 text-xs sm:gap-x-4'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                </div>
                <div className='hidden sm:flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://github.com/dwaynerilljr/pokemon-memory" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://pok3-memory.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
                <div className="flex sm:hidden gap-x-3 text-base">
                    <a href="https://github.com/dwaynerilljr/pokemon-memory" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><SiGithub /></a>
                    <a href="https://pok3-memory.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><FiMonitor /></a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={nba} alt="" className='w-full h-full border border-white' />
            <header className='uppercase text-lg sm:text-xl'>NBA Quiz</header>
            <div className='flex justify-between items-center text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 text-xs sm:gap-x-4'>
                    <p>HTML</p>
                    <p>Bootstrap</p>
                    <p>JavaScript</p>
                </div>
                <div className='hidden sm:flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://github.com/dwaynerilljr/nba-quiz" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://nba-quiz.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
                <div className="flex sm:hidden gap-x-3 text-base">
                    <a href="https://github.com/dwaynerilljr/nba-quiz" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><SiGithub /></a>
                    <a href="https://nba-quiz.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><FiMonitor /></a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={todo} alt="" className='w-full h-full border border-white' />
            <header className='uppercase text-lg sm:text-xl'>To-Do List</header>
            <div className='flex justify-between items-center text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 text-xs sm:gap-x-4'>
                    <p>HTML</p>
                    <p>Bootstrap</p>
                    <p>JavaScript</p>
                </div>
                <div className='hidden sm:flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://github.com/dwaynerilljr/todo-list" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://fluffy-ganache-d60fd6.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
                <div className="flex sm:hidden gap-x-3 text-base">
                    <a href="https://github.com/dwaynerilljr/todo-list" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><SiGithub /></a>
                    <a href="https://fluffy-ganache-d60fd6.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><FiMonitor /></a>
                </div>
            </div>
        </div>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-2'>
            <img src={weather} alt="" className='w-full h-full border border-white' />
            <header className='uppercase text-lg sm:text-xl'>Hey What's the Weather?</header>
            <div className='flex justify-between items-center text-sm sm:text-base font-thin'>
                <div className='flex gap-x-1 text-xs sm:gap-x-4'>
                    <p>HTML</p>
                    <p>Bootstrap</p>
                    <p>JavaScript</p>
                </div>
                <div className='hidden sm:flex gap-x-1 sm:gap-x-4 font-semibold text-teal-400'>
                    <a href="https://github.com/dwaynerilljr/weather-app" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Github</a>
                    <a href="https://heywhatstheweather.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400 border-b border-transparent hover:border-b hover:border-b-white'>Demo</a>
                </div>
                <div className="flex sm:hidden gap-x-3 text-base">
                    <a href="https://github.com/dwaynerilljr/weather-app" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><SiGithub /></a>
                    <a href="https://heywhatstheweather.netlify.app/" target="_blank" rel="noreferrer" className='focus:outline-teal-400'><FiMonitor /></a>
                </div>
            </div>
        </div>
    </section>
  )
}
