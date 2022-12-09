import React from "react";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";

interface ListPokemonItemProps {
  pokemon: Pokemon;
  selectPokemon: (pokemon: Pokemon) => void;
}

/**
 * Visualices a pokemon with name and url
 * @author  Micaela Perez
 * @param pokemon a pokemon to show
 * @param selectPokemon a function to select a pokemon
 */

const ListPokemonItem = ({ pokemon, selectPokemon }: ListPokemonItemProps) => (
  <div onClick={() => selectPokemon(pokemon)}>
    <strong>{pokemon.name}</strong>
    <small> #{extractPokemonId(pokemon.url)}</small>
  </div>
);

export default ListPokemonItem;
