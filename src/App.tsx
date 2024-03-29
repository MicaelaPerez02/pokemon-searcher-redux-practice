import ListPokemon from "./components/ListPokemon";
import ViewPokemon from "./components/ViewPokemon";
import "./styles.css";
import FindPokemon from "./components/FindPokemon";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RecordPokemon from "./components/RecordPokemon";
import Pokedex from "./assets/pokedexLogo.png";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={Pokedex} alt="Logo Pokedex" className="logoPokedex" />
        <div id="bandejaDeEntrada">
          <div className="pokedex" >
            <FindPokemon />
            <div className="pokedexInfo">
              <ListPokemon />
              <ViewPokemon />
              <RecordPokemon />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
