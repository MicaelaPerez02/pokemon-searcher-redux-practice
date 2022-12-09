import { Pokemon, PokemonWithProps } from "../types/pokemon.types";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return data.results;
};

export const findPokemons = async (pokemonName: string): Promise<Pokemon[]> => {
  const data = await getPokemons();
  return data.filter(
    (pokemon) =>
      !pokemonName ||
      pokemon.name?.toLowerCase().startsWith(pokemonName?.toLowerCase())
  );
};

export const getPokemon = async (
  pokemonName: string
): Promise<PokemonWithProps> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  );
  const data = await response.json();
  return data;
};

let record: PokemonWithProps[] = [];
export const fetchRecord = async (): Promise<PokemonWithProps[]> => {
  return new Promise((resolve) => {
    resolve(record);
  });
};

export const addToRecord = async (
  pokemon: PokemonWithProps
): Promise<PokemonWithProps> => {
  return new Promise((resolve) => {
    record = [pokemon, ...record.filter((p) => p.name !== pokemon.name)];
    resolve(pokemon);
  });
};

export const removeFromRecord = async (
  pokemon: PokemonWithProps
): Promise<PokemonWithProps> => {
  return new Promise((resolve) => {
    record = [...record.filter((p) => p.name !== pokemon.name)];
    resolve(pokemon);
  });
};

export const clearFromRecord = async (): Promise<PokemonWithProps[]> => {
  return new Promise((resolve) => {
    record = [];
    resolve([]);
  });
};
