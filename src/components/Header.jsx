import React from 'react'
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div className='w-full mx-auto flex justify-center' >
      <div className='lg:w-[90%] w-[95%] lg:py-[70px] py-[50px]' >
        <img src={Logo} alt="huddle logo" />
      </div>
    </div>
  )
}

export default Header
