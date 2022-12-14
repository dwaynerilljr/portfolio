import React from 'react'

export default function Footer() {
  return (
    <footer className='grid bg-zinc-700 px-4 sm:gap-y-24 sm:px-40 grid-cols-1 sm:grid-cols-2 font-thin'>
        <div className='flex flex-col justify-start sm:gap-y-8 sm:px-10 sm:py-16'>
            <header className='sm:text-6xl text-2xl font-black'>Connect</header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum cupiditate 
                tempore dolor repellendus atque molestiae fuga corrupti. Reprehenderit quia sed rem? 
                Reprehenderit maxime dolor cupiditate ut qui et modi.
            </p>
        </div>
        <form className='flex flex-col sm:pt-16 pb-6 sm:pb-0 gap-1 sm:gap-4' action="">
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
        <div className="sm:col-span-2 border-t py-16 font-normal border-teal-400 flex justify-between">
          <header className='text-xl'>Dwayne Rill Jr.</header>
          <div className="flex gap-x-4">
            <a href="https://www.twitter.com/dwayne_devs">Twitter</a>
            <a href="https://www.linkedin.com/in/dwaynerill-jr/">LinkedIn</a>
            <a href="https://github.com/dwaynerilljr">GitHub</a>
          </div>
        </div>
    </footer>
  )
}
