import React from 'react'
import {GrInstagram} from "react-icons/gr"
import {FiTwitter} from "react-icons/fi"
import {FaFacebookF} from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='absolute bottom-8 w-full justify-end' >
      <div className='flex justify-end w-full pr-32' >
        <div className='flex gap-3 text-white text-5xl' >
            <FaFacebookF className='p-1 rounded-full border-2 hover:text-fuchsia-400 hover:border-fuchsia-400'/>
            <FiTwitter className='p-1 rounded-full border-2 hover:text-fuchsia-400 hover:border-fuchsia-400'/>
            <GrInstagram className='p-1 rounded-full border-2 hover:text-fuchsia-400 hover:border-fuchsia-400'/>
        </div>
      </div>
    </div>
  )
}

export default Footer