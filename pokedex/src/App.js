import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import Navigator from "./Components/Navigator";
import PokemonDetail from "./Components/PokemonDetail";
import FavoritePokemon from "./Components/FavoritePokemon";
import Redirection from "./Components/Redirection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />

        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
          <Route exact path="/pokemon/fav" element={<FavoritePokemon />} />
          <Route exact path="/redirect" element={<Redirection />} />
          <Route path="*" element={<Navigate to="/redirect" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
