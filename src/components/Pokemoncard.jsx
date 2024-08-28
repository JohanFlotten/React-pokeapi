import React, { useState, useEffect } from "react";
import Pokemoncardscss from '../pages/pokemonCards.module.css';

export default function PokemonGeneration({ start, end, title }) {
  const [pokemonData, setPokemonData] = useState([]);
4
  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const responses = await Promise.all(
          Array.from({ length: end - start + 1 }, (_, i) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${start + i}`)
          )
        );
        const data = await Promise.all(responses.map((res) => res.json()));
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemonData();
  }, [start, end]);

  return (
    <main>
      <h1 className={Pokemoncardscss.title}>{title}</h1>
      <div className={Pokemoncardscss.pokemongrid}>
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className={Pokemoncardscss.pokemoncard}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className={Pokemoncardscss.pokemonimage} />
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>ID: {pokemon.id}</p>
            <p>Type: {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
