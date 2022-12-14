import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function Hero() { 
    return (
        <section className='sm:h-75v sm:mx-40 m-8 sm:p-0 grid font-primary sm:items-center' id='hero'>
            <div className="flex p-2 sm:p-0 sm:gap-14 gap-3 flex-col items-center sm:items-start">
                <p className="sm:text-7xl text-3xl sm:text-left text-center font-black">Hiya! I'm <br /> <span className='underline decoration-teal-400'>Dwayne Rill Jr.</span></p>
                <p className='text-sm sm:text-base font-thin sm:text-left text-center w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit maxime quod non laudantium. Dolorum error accusamus sequi autem velit aut, id culpa totam saepe mollitia illum. Eum, autem architecto.</p>
                <a href="https://www.google.com" className="focus:outline-teal-400 border-2 hover:bg-teal-400 hover:border-teal-400 sm:text-base text-sm items-center sm:gap-x-2 flex sm:font-extrabold p-2 uppercase max-w-min sm:px-4 sm:py-3">projects <AiOutlineArrowRight className='text-teal-400' /></a>
            </div>
        </section>
    )
}