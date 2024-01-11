import React from 'react'
import illustration from "../assets/illustration-mockups.svg"
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className='flex justify-center ' >
        <div className='flex lg:flex-row flex-col  w-[90%] gap-14 items-center ' >
            <div className='flex flex-1' >
                <img src={illustration} className='w-full' alt="" />
            </div>
            <div className='flex flex-1 flex-col gap-7 lg:items-start items-center' >
                <div className='flex flex-col lg:text-left text-center gap-4 lg:text-5xl text-4xl font-bold text-white ' >
                    <span>Build The Community</span>
                    <span>Your Fans will love</span>
                </div>
                <span className='text-white lg:text-2xl text-xl lg:text-left text-center' >
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. create connections with your users as you engage in genuine discussion.
                </span>
                <button className='rounded-full w-fit p-3 px-16 text-purple-950 hover:text-white text-xl bg-white hover:bg-fuchsia-400 hover:shadow-xl' >
                    Register
                </button>
            </div>
        </div>
    </div>
  )
}

export default Index
