import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import Pokemon from './Pokemon';
const PokemonList = () => {
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [pokedexUrl,setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl,setNextUrl] = useState('');
    const [prevUrl,setPrevUrl] = useState('');

    async function dowmloadPokemons(){
        setIsLoading(true);
        const response = await axios.get(pokedexUrl);
        const pokemonResults = response.data.results;

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        const res = (pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types:pokemon.types}
        }));
        setPokemonList(res);
        console.log(res);
        setIsLoading(false);
    }
    useEffect(() => {
        dowmloadPokemons();
    },[pokedexUrl]);

  return (
    
    <div className='mx-auto mt-[50px] flex flex-col gap-y-5 '>
        <div className='text-yellow-300'>List of Pokemons</div>
        <div className='flex flex-wrap justify-between'>
            {
                isLoading ? <Spinner/> : 
                pokemonList.map((pokemon) => <Pokemon name = {pokemon.name} image = {pokemon.image} key = {pokemon.id}/>)
            }
        </div>
        <div className='mx-auto flex gap-x-5'>
            <button disabled={prevUrl === undefined} onClick={() => setPokedexUrl(prevUrl)} className='outline p-[0.5rem] bg-red-400 hover:bg-red-500 hover:text-cyan-300 hover:outline transition-all duration-300'>Prev</button>
            <button disabled={nextUrl === undefined} onClick={() => setPokedexUrl(nextUrl)} className='outline p-[0.5rem] bg-red-400 hover:bg-red-500 hover:text-cyan-300 hover:outline transition-all duration-300'>Next</button>
        </div>
    </div>
  )
}

export default PokemonList
