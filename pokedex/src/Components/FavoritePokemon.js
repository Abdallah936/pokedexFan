import React from 'react'
import { useSelector } from 'react-redux'
import Pokemon from './Pokemon'
import {Box,Grid} from '@mui/material'
const FavoritePokemon = () => {
  const fav = useSelector((state)=>state.favorites)
    return (
    <>
    <Box>
      <Grid container justifyContent={"center"} className="pokedex-grid">
    {fav.map((x)=>(
        <Pokemon
        id={x}
        name={x.name}
        url={x.sprites.other.dream_world.front_default}
        key={x.id}
      />
    ))}
    </Grid>
    </Box>
    </>
  )
}

export default FavoritePokemon