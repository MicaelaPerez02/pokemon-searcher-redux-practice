import React, { useEffect, useState } from "react";
import ListPokemonItem from "./ListPokemonItem";
import { findPokemons } from "../queries/pokemon.queries";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";
import { useDispatch, useSelector } from "react-redux";
import { selectPokemon } from "../actions/pokemonActions";
import { IRootState } from "../store/store";
import "../css/listPokemon.css";

/**
 * Visualices a list of pokemons
 * @author  Micaela Perez
 */
const ListPokemon = () => {
  const search = useSelector<IRootState, string>(
    (state) => state.pokemon.search
  );
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (search) {
      setLoading(true);
      findPokemons(search).then((data) => {
        setPokemons(data);
        setLoading(false);
      });
    }
  }, [search]);

  const onselectPokemon = (pokemon: Pokemon) => {
    dispatch(selectPokemon(pokemon));
  };

  if (isLoading) return <div>Loading Pokemons...</div>;
  return (
    <div className="list">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <ListPokemonItem
            pokemon={pokemon}
            selectPokemon={onselectPokemon}
            key={extractPokemonId(pokemon.url)}
          />
        ))}
    </div>
  );
};

export default ListPokemon;
