import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function Hero() { 
    return (
        <section className='h-75v grid justify-center font-primary' id='hero'>
            <div className="flex p-2 gap-6 flex-col justify-center">
                <p className="text-7xl drop-shadow-xl font-black">Hiya! <br /> I'm <span className='underline decoration-teal-400'>Dwayne Rill Jr.</span></p>
                <p>I'm a front-end developer</p>
                <a href="https://www.google.com" className="border-2 items-center gap-x-2 rounded-full flex font-extrabold uppercase max-w-min px-4 py-3">projects <AiOutlineArrowRight className='text-teal-400' /></a>
            </div>
        </section>
    )
}