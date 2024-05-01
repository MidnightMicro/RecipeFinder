import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PriceChange from './PriceChange';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function handleClick() {
  alert("clicked")
}

export default function SearchAppBar() {

    const handleCloseNavMenu = () => {
      console.log("Hello")
    };
  
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor:"rgba(0, 48, 57, 0.63)"}}>
        <Toolbar>
          
          <Box sx={{ flexGrow: 1, display: {justifyContent:'end', xs: 'none', md: 'flex' } }}>
          <Link to="/">
          <Button
               onClick={handleClick}
               sx={{ my: 2, color: 'white'}}
             >
              Home
             </Button></Link>
          <Link to="/Recipes">
          <Button
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white'}}
             >
              Recipes
             </Button></Link>
          <Link to="/PriceChange">
          <Button
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white'}}
             >
              Price Change
             </Button></Link>

          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
