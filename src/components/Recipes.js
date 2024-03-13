import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import SearchAppBar from './NavBar.js';
import { Card, CardContent ,Box, Grid, Typography } from '@mui/material';
import RecipeReviewCard from './CardRecipe.js';

function Recipes () {
    return (
        <>
        <SearchAppBar />
        <Grid container spacing={2} columns={12} direction="row" justifyContent="center" alignItems="center" sx={{paddingTop:4}}>
        <Grid item xs={6} sx={{backgroundColor:'red', border:1, borderRadius:5}}>
        <RecipeReviewCard />
        </Grid>
        </Grid>
        <h1>pew</h1>
        <Box>
            <Grid container>

            </Grid>

        </Box>
      
        </>

    )
}

export default Recipes;