import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import MiniDrawer from "./drawer";
import SearchAppBar from "./NavBar";
import { Form } from "react-router-dom";

const drawerWidth = 240;

function RecipeCreator() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const foodTypes = [
    {
      value:'Chicken'
    },
    {
      value:'Beef'
    },
    {
      value:'Seafood'
    },
    {
      value:'Salads'
    },
    {
      value:'Vegetarian'
    }

  ]

  return (
    <div>
      {/* passes values in to make it move the content */}
      <MiniDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/*added transition to push data when the drawer is open vs closed */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "50px",
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: open
            ? `${drawerWidth}px`
            : `calc(${theme.spacing(7)} + 1px)`,
          [theme.breakpoints.up("sm")]: {
            marginLeft: open
              ? `${drawerWidth}px`
              : `calc(${theme.spacing(8)} + 1px)`,
          },
        }}
      >
        <Box component="form">
          <div>
            <TextField 
            id="outlined-basic" 
            helperText="What do you want to call this meal?">
               Meal Name 
               </TextField>
            <TextField
            id="outlined-select-currency-native"
            select
            label="Native select"
            defaultValue="Chicken"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your food type"
            >
              {foodTypes.map((option) => 
              <option key={option.value} value={option.value}>{option.value}</option>)}
            </TextField>
            <Button>
              
            </Button>
          </div>
        </Box>
        <Typography variant="h1" sx={{ marginTop: "20px" }}>
          Hello
        </Typography>
      </Box>
    </div>
  );
}

export default RecipeCreator;
