import React from 'react'
import Front from '../assets/bg-front.jpg'
import { FaPlay } from 'react-icons/fa';

const FrontPage = () => {
  return (
    <section className='h-screen w-full relative flex justify-center items-center'>
        <img src={Front} alt="" className='h-full w-full object-cover absolute top-0 left-0'/>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000045] to-[#111111]'></div>
        <div className='relative w-[80%] mx-auto flex justify-between items-center'>
            <div className='flex flex-col sm:w-[50%] w-full'>
                <h2 className='text-white font-bold text-5xl'>The Masked</h2>
                <p className='text-white mt-6 max-w-[90%] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus a est facere doloribus corrupti nobis aliquid ab iure similiquet...</p>
                <div className='flex space-x-6 mt-12'>
                    <button className='font-bold uppercase text-xs rounded bg-primary py-5 px-10 text-white'>
                        Watch Now
                    </button>
                    <button className='font-bold uppercase text-xs rounded border border-white bg-transparent py-5 px-10 text-white'>
                        +Playlist
                    </button>
                </div>
            </div>
            <div className='hidden w-[50%] justify-center items-start sm:flex'>
                <div className='h-36 w-36 rounded-full border border-white flex items-center justify-center'>
                    <FaPlay className='text-[#2582A9] text-6xl border-primary'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontPage