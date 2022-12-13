import React from 'react'

export default function Footer() {
  return (
    <section className='grid px-32 py-10 mt-20 grid-cols-2'>
        <div className='flex flex-col justify-center gap-y-8 px-10'>
            <header className='text-6xl'>Connect</header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum cupiditate 
                tempore dolor repellendus atque molestiae fuga corrupti. Reprehenderit quia sed rem? 
                Reprehenderit maxime dolor cupiditate ut qui et modi.
            </p>
        </div>
        <form className='flex flex-col gap-4' action="">
            <label className='flex flex-col' htmlFor="name">
                Name:
                <input type="text" className='bg-transparent border border-x-0 border-t-0 border-b-white' name="name" id="" required />
            </label>
            <label className='flex flex-col' htmlFor="email">
                Email:
                <input type="email" className='bg-transparent border border-x-0 border-t-0 border-b-white' name="email" id="" required />
            </label>
            <label className='flex flex-col' htmlFor="message">
                Message:
                <textarea className='bg-transparent border border-x-0 border-t-0 border-b-white' name="message" id="" cols="30" rows="10"></textarea>
            </label>
            <button className='bg-teal-400 self-start p-2'>Submit</button>
        </form>
    </section>
  )
}
