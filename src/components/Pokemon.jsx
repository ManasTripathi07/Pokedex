import React from 'react'
import "./Pokemon.css"
const Pokemon = ({name,image}) => {
  return (
    <div className='basis-[20%] h-[250px] w-[300px] flex flex-col items-center '>
        <div className='border-[10px] pokeclass flex flex-col items-center bg-orange-100 cursor-pointer transition duration-300'>
            <div>{name}</div>
            <div><img src={image} className='max-h-full h-[150px] mt-[2rem]'/></div>
        </div>
      
    </div>
  )
}

export default Pokemon
