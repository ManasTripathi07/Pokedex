import React from 'react'
import { FaHeart } from "react-icons/fa";
const Credits = () => {
  return (
    <div className='rounded-lg'>
      <div className='bg-[#800080] text-white'>
        <div className='flex space-x-1 relative font-bold'>
            <p>Created with love</p>
            <FaHeart className=' mt-[4px]' color='red'/> 
        </div>
        
        <p>by Manas Tripathi</p>
        <a className='cursor-pointer font-bold text-large hover:text-red-500' href="https://www.linkedin.com/in/manas-tripathi-73876324b/">Linkdln!</a>
       </div>
    </div>
  )
}

export default Credits