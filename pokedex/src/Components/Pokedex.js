import { useEffect, useState } from "react";
import axios from "axios";
import "../style/pokedex.css";
import Pokemon from "./Pokemon";
import { Box, Grid } from "@mui/material";

const Pokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios.get(url + "?limit=100").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;
        const NewPokemon = [];

        results.forEach((x) => {
          axios.get(x.url).then((req) => {
            let data = req.data;
            let PokemonObject = {
              id: data.id,
              url: data.sprites.other.dream_world.front_default,
              name: data.name,
            };
            NewPokemon.push(PokemonObject);
            setPokeData((prev) => [...NewPokemon]);
          });
        });
      }
    });
  }, []);
  return (
    <Box>
      <Grid container justifyContent={"center"} className="pokedex-grid">
        {pokeData.map((pokemon) => (
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.id}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default Pokedex;
