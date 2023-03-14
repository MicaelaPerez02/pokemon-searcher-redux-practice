import { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { addToRecord, getPokemon } from "../queries/pokemon.queries";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";
import "../css/viewPokemon.css";

type ViewPokemonDetailProps = {
  selectedPokemon: Pokemon;
};

const ViewPokemonDetail: FC<ViewPokemonDetailProps> = ({
  selectedPokemon,
}: ViewPokemonDetailProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonWithProps | null>(null);

  useEffect(() => {
    if (selectedPokemon) {
      setLoading(true);
      getPokemon(selectedPokemon.name).then((data) => {
        setPokemon(data);
        setLoading(false);
        addToRecord(data);
      });
    }
  }, [selectedPokemon, selectedPokemon?.name]);

  if (isLoading) return <div>Loading Pokemon...</div>;

  return pokemon ? (
    <div className="ViewPokemon">
      <h4>Pokemon: <span>{pokemon.name}</span></h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
};

const ViewPokemon = () => {
  const selectedPokemon = useSelector<IRootState, Pokemon | null>(
    (state) => state.pokemon.selectedPokemon
  );
  if (!selectedPokemon) return <div className="ViewPokemon" />;
  //
  return <ViewPokemonDetail selectedPokemon={selectedPokemon} />;
};

ViewPokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ViewPokemon;
