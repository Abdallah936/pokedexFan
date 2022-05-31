import "../style/PokemonDetail.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglefav } from "../redux/action";
import { useParams } from "react-router-dom";
import Detail from "./Detail";
import { Typography } from "@mui/material";
import { Grid, Box, Button } from "@mui/material";
import { height } from "@mui/system";


const PokemonDetail = () => {
  const fav = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const handleClick = (pokemon) => {
    dispatch(togglefav(pokemon));
 
  };

  const [pokemon, setPokemon] = useState([""]);
  const { id } = useParams();

  useEffect(() => {
    async function lol() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
      if (res.status >= 200 && res.status < 300) {
        setPokemon(res.data);
      }
    }
    lol();
  }, [id]);
  const {
    name,
    sprites = "",
    height = "",
    weight = "",
    types = [null],
  } = pokemon;
  return (
    <Box className="pokedex">
      <Typography variant="h1" className="pokedex-name">
        {name}
      </Typography>
      <img src={sprites.front_default} alt="aa" className="pokedex-image" />
      <Box className="pokedex-info-container">
        <hr className="separator" />
        <Grid container>
          <Button onClick={()=>handleClick(pokemon)}>Fav</Button>
          <Detail title="Name" data={name} />
          <Detail title="Height" data={height} />
          <Detail title="Weight" data={weight} />
          {types.map((x) => x && <Detail title="Type" data={x.type.name} />)}
        </Grid>
      </Box>
    </Box>
  );
};

export default PokemonDetail;
