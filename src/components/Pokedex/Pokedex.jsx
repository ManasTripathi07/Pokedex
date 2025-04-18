import React from 'react'
import Search from '../Search/Search'
import "./Pokedex.css"
import PokemonList from '../PokemonList'
const Pokedex = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='mx-auto font-bold text-3xl mb-[30px] gap-[5px] fonti text-yellow-300'>Pokedex</h1>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex
