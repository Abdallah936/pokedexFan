import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";

const Detail = ({ title, data }) => {
  return (
    <Grid md={2}>
      <Typography className="pokedex-text">
        {title}
        <br />
        {data}
      </Typography>
    </Grid>
  );
};

export default Detail;
