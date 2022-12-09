import React, { useEffect, useState } from "react";
import { PokemonWithProps } from "../types/pokemon.types";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../actions/pokemonActions";
import { clearFromRecord, fetchRecord } from "../queries/pokemon.queries";

const RecordPokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonWithProps[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    fetchRecord().then((record: PokemonWithProps[]) => {
      setPokemons(record);
    });
  };
  const clear = () => {
    clearFromRecord().then((newRecord: PokemonWithProps[]) => {
      setPokemons(newRecord);
    });
  };

  const dispatch = useDispatch();
  const onSelectPokemon = (pokemon: PokemonWithProps) => {
    dispatch(selectPokemon(pokemon));
  };

  return (
    <div className="list">
      <h3>Record</h3>
      <button onClick={() => refresh()}>Update</button>
      <button onClick={() => clear()}>Clean</button>
      {pokemons &&
        pokemons.map((pokemon: PokemonWithProps) => (
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => onSelectPokemon(pokemon)}
          >
            <img src={pokemon.sprites.front_default} alt="Pokemon" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{pokemon.name}</p>
              <small>#{pokemon.id}</small>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecordPokemon;
