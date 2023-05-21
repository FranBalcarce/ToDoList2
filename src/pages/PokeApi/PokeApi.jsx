import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      setPokemonInfo(response.data);
    } catch (error) {
      console.error(error);
      setPokemonInfo(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Ingrese el nombre del Pokémon"
          value={pokemonName}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>

      {pokemonInfo && (
        <div>
          <h2>{pokemonInfo.name}</h2>
          <img
            src={pokemonInfo.sprites.front_default}
            alt={pokemonInfo.name}
          />
        </div>
      )}
    </div>
  );
}

export default App;
