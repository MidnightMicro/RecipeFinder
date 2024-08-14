import {React, useState }from "react";
import { Box, Button, Checkbox, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography, useTheme } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Home from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MiniDrawer from "./drawer";
import SearchAppBar from "./NavBar";
import { Form } from "react-router-dom";
import { IconButton } from "@mui/material/node";

const drawerWidth = 240;

function RecipeCreator() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([1]);
  const [values, setValues] = useState([0]);
  const theme = useTheme();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setValues([...values, values.length]);
    setChecked(newChecked);
  };


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
      <Box style={{
        backgroundImage:
            'url("https://static.vecteezy.com/system/resources/previews/037/349/588/non_2x/ai-generated-wood-background-with-chalkboard-and-lemon-free-photo.jpg")',

        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        height:'100vh',
        width:'100vw',
        overflow:"auto",
      }}>
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
          backgroundColor:"white",
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

        {/* <Box component="form" alignItems="center" p={2} display="flex" justifyContent="center" > */}

        <Grid container display="flex" flexDirection="column" alignItems="center">
          
        <Typography variant="h1">
          Create a Recipe
        </Typography> 
        <Grid container >
          
        <Grid item xs> 
        <TextField
          id="outlined-basic"
          helperText="What do you want to call this meal?"
          label="Meal Name"
        />
          
        </Grid>
        
        <Grid item xs>
            <TextField
          id="outlined-select-currency-native"
          select
          label="Type"
          defaultValue="Chicken"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your food type"
        >
              {foodTypes.map((option) => 
              <option key={option.value} value={option.value}>{option.value}</option>)}
            </TextField>
          </Grid>
          </Grid>   
        


        <Grid container>
          <Grid item>
          <Typography variant="h3">Ingredient List</Typography>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {values.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            disablePadding
          > 
          
<ListItemText id={labelId} primary={`Ingredient ${value + 1}`} />

              <TextField/>
              <IconButton
              sx={{ height: 56 }} 
              onClick={handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
              inputProps={{ 'aria-labelledby': labelId }}
              >
                <AddCircleIcon />
                </IconButton>
          </ListItem>
        );
      })}
    </List>

          </Grid>

          <Grid>


          </Grid>
         
        
        </Grid>
        
<Typography variant="h3">
Description
</Typography>
<TextField fullWidth multiline minRows={4}/>

        <Button>
          Submit
        </Button>
          </Grid>
        </Box>


      </Box>
    </div>
  );
}

export default RecipeCreator;
