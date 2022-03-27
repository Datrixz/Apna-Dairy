import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LogReg = () => {
  return (
    <Grid container
    direction='column'
    justifyContent='center'
    alignItems='center'
    sx={{
      height:'100vh'
    }}
    >
      <Paper
        elevation={4}
        sx={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" color="initial">
          Select one option:
        </Typography>
        <Button variant="contained" size="large">
          <Typography variant="h6" color="initial">
            Login
          </Typography>
        </Button>
        <Button component={Link} to='/signup' variant="contained" size="large">
          <Typography variant="h6" color="initial">
            Register
          </Typography>
        </Button>
      </Paper>
    </Grid>
  );
};

export default LogReg;
