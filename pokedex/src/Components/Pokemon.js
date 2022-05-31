import React from "react";
import { Link } from "react-router-dom";
import "../style/pokemon.css"
import {Card,CardMedia,CardContent,Typography} from "@mui/material"

const Pokemon = ({ id, name, url }) => {
  return (
    <Link to={`/pokemon/${id}`} className="link">
      <Card className="pokemon card" key={id}>
        <CardMedia image={url} className="pokemon-img"></CardMedia>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Pokemon;
