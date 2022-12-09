import { useState } from "react";
import { useDispatch } from "react-redux";
import { findPokemon } from "../actions/pokemonActions";

const FindPokemon = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const onSearchClick = () => {
    dispatch(findPokemon(text));
  };

  return (
    <div id="findPokemon">
      <label>Search Pokemon</label>
      <input
        type="text"
        placeholder={"Pikachu, Charmander, Ditto, etc"}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSearchClick()}>Search</button>
    </div>
  );
};

export default FindPokemon;
