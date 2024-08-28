import Homecss from './home.module.css'
import React, { useState, useEffect } from "react";

export default function PokemonAPI() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

 
  useEffect(() => {
    async function fetchPokemonNames() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898");
        const data = await response.json();
        setPokemonNames(data.results.map((pokemon) => pokemon.name));
      } catch (error) {
        console.error("Error fetching Pokémon names from the API:", error);
      }
    }

    fetchPokemonNames();
  }, []);


  useEffect(() => {
    if (searchQuery) {
      const filtered = pokemonNames.filter((name) => name.startsWith(searchQuery.toLowerCase()));
      setFilteredNames(filtered);
    } else {
      setFilteredNames([]);
    }
  }, [searchQuery, pokemonNames]);


  const fetchAndDisplayPokemon = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const pokemon = await response.json();
      setPokemonData(pokemon);
      setSearchQuery(""); 
      setFilteredNames([]);
    } catch (error) {
      console.error("Error fetching Pokémon data from the API:", error);
    }
  };


  const getRandomPokemon = async () => {
    try {
      const randomID = Math.floor(Math.random() * 898) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
      const pokemon = await response.json();
      setPokemonData(pokemon);
      setSearchQuery("");
      setFilteredNames([]);
    } catch (error) {
      console.error("Error fetching Pokémon data from the API:", error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSuggestionClick = (name) => {
    fetchAndDisplayPokemon(name);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (pokemonNames.includes(searchQuery.toLowerCase())) {
        fetchAndDisplayPokemon(searchQuery);
      } else {
        console.error("Pokémon not found in the list!");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const closestMatch = filteredNames[0];
      if (closestMatch) {
        setSearchQuery(closestMatch);
        setFilteredNames([]);
      }
    }
  };

  return (
    <main>
      <body className={Homecss.body}>
        <h1 className={Homecss.title}>Pokédex</h1>
        <div className={Homecss.dex}>
          <div className={Homecss.lefterside}>
            <div className={Homecss.leftside}>
              {pokemonData && (
                <>
                  <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className={Homecss.pokemonimg} />
                  <img src="Shadow.png" className={Homecss.shadow} alt="Shadow" />
                </>
              )}
            </div>
            <div className={Homecss.suggestions}>
              {filteredNames.map((name) => (
                <div key={name} className="suggestion" onClick={() => handleSuggestionClick(name)}>
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div className={Homecss.rightside}>
            <div className={Homecss.top}>
              {pokemonData && (
                <>
                  <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
                  <p>ID: {pokemonData.id}</p>
                  <p>Height: {pokemonData.height / 10} m</p>
                  <p>Weight: {pokemonData.weight / 10} kg</p>
                  <p>Type: {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
                  <p>Stats: {pokemonData.stats.map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(", ")}</p>
                </>
              )}
            </div>
            <div className={Homecss.bottom}>
              <button className={Homecss.getpokemon} onClick={getRandomPokemon}>
                Get random Pokémon!
              </button>
              <input
                type="text"
                className={Homecss.searchpokemon}
                placeholder="Search Pokémon"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                />
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}
