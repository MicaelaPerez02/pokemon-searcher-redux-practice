import { Pokemon, PokemonWithProps } from "../types/pokemon.types";

export type SelectPokemonType = {
  type: "SELECT_POKEMON";
  payload: { pokemon: Pokemon };
};

export type SearchPokemonType = {
  type: "SEARCH_POKEMON";
  payload: { name: string };
};

export type AddRecordPokemonType = {
  type: "ADD_RECORD_POKEMON";
  payload: { pokemon: PokemonWithProps };
};

export const selectPokemon = (pokemon: Pokemon): SelectPokemonType => {
  return {
    type: "SELECT_POKEMON",
    payload: { pokemon: pokemon },
  };
};

export const findPokemon = (name: string): SearchPokemonType => {
  return {
    type: "SEARCH_POKEMON",
    payload: { name: name },
  };
};

export const addRecordPokemon = (
  pokemon: PokemonWithProps
): AddRecordPokemonType => {
  return {
    type: "ADD_RECORD_POKEMON",
    payload: { pokemon: pokemon },
  };
};
