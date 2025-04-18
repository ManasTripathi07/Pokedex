import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import Pokemon from './Pokemon';
const PokemonList = () => {
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    async function dowmloadPokemons(){
        setIsLoading(true);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemonResults = response.data.results;
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
    },[]);

  return (
    
    <div className='mx-auto mt-[50px] flex flex-col gap-y-5'>
        <div>List of Pokemons</div>
        {
            isLoading ? <Spinner/> : 
            pokemonList.map((pokemon) => <Pokemon name = {pokemon.name} image = {pokemon.image} key = {pokemon.id}/>)
        }
    </div>
  )
}

export default PokemonList
