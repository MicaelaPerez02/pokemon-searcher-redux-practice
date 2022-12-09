import {
  AddRecordPokemonType,
  SearchPokemonType,
  SelectPokemonType,
} from "../actions/pokemonActions";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";

export type PokemonState = {
  search: string;
  selectedPokemon: Pokemon | null;
  record: PokemonWithProps[];
};

const initialState: PokemonState = {
  search: "",
  record: [],
  selectedPokemon: null,
};

const pokemonReducer = (
  state: PokemonState = initialState,
  action: SelectPokemonType | SearchPokemonType | AddRecordPokemonType
) => {
  switch (action.type) {
    case "SEARCH_POKEMON":
      return { ...state, search: action.payload.name };
    case "SELECT_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload.pokemon,
      };
    case "ADD_RECORD_POKEMON":
      return {
        ...state,
        record: [
          action.payload.pokemon,
          ...state.record.filter(
            (pokemon) => pokemon.name !== action.payload.pokemon.name
          ),
        ],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
