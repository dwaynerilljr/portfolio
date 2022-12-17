import React from 'react'

export default function Skills() {
 return (
    <section className='grid sm:mx-40 grid-cols-2 pt-4 m-10 sm:mb-10 sm:py-20 sm:grid-cols-3 gap-2 sm:gap-20 font-primary border-t border-t-teal-400'>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className='sm:text-5xl font-bold'>HTML</header>
            <p className=' font-thin'>4 Years Experience</p>
        </div>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className="sm:text-5xl font-bold">CSS</header>
            <p className='font-thin'>4 Years Experience</p>
        </div>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className="sm:text-5xl font-bold">JavaScript</header>
            <p className='font-thin'>4 Years Experience</p>
        </div>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className="sm:text-5xl font-bold">React</header>
            <p className='font-thin'>3 Years Experience</p>
        </div>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className="sm:text-5xl font-bold">Accessibility</header>
            <p className='font-thin'>1 Year Experience</p>
        </div>
        <div className='flex flex-col gap-1 sm:gap-3'>
            <header className="sm:text-5xl font-bold">React</header>
            <p className='font-thin'>3 Years Experience</p>
        </div>
    </section>
  )
}
