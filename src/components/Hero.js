import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import me from '../me.png'


export default function Hero() { 
    return (
        <section className='grid font-primary px-20 grid-cols-6' id='hero'>
            <div className="flex p-2 gap-6 flex-col col-start-2 col-span-2 justify-center">
                <header className="text-7xl drop-shadow-xl font-black text-white">Hiya! <br /> <span className=''>I'm Dwayne Rill Jr.</span></header>
                <a href="" className="items-center gap-x-2 bg-primary rounded-full text-white flex font-extrabold uppercase max-w-min p-4">portfolio <AiOutlineArrowRight className='text-white' /></a>
            </div>
            <div className="col-span-2 flex items-center">
                <img src={me} alt="" className='w-full' />
            </div>
        </section>
    )
}