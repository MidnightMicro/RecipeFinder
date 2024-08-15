import {React, useState }from "react";
import { Box, Button, Checkbox, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography, useTheme } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Home from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MiniDrawer from "./drawer";
import SearchAppBar from "./NavBar";
import { Form } from "react-router-dom";
import { IconButton } from "@mui/material/node";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const drawerWidth = 240;

function RecipeCreator() {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([-1]);
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


/* `setValues([...values, values.length]);` is updating the state of the `values` array in the
component. */
    setValues([...values, values.length]);
    setChecked(newChecked);


  };

  const handleRemove = (value) => () => {
    // Remove the specific value from the values array
    const newValues = values.filter(val => val !== value);
    setValues(newValues);
  
    // Find the index of the value to be removed from the checked array
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
  
    if (currentIndex !== -1) {
      // Remove the item from the checked array
      newChecked.splice(currentIndex, 1);
      setChecked(newChecked);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const styleButton = {
    "&:hover": {
    backgroundColor: "red"
  },
  "&:active": {
    backgroundColor: "blue"
  },
  "&:clicked":{
    backgroundColor:"green"
  },
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
          <Grid item>
        <Typography variant="h3">
          Submit a New Recipe
        </Typography> 
        <Grid>
          To create a new recipe, first tell us what type of meal it is and the name to see if it has already been added. Once submitted you can search like meals or create your own with a twist!
        </Grid>
          </Grid>

        <Grid container >
          
        
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
        


        <Grid container justify="center" columns={16}>
          <Grid item xs={6} align="center">
          <Typography variant="h3">Ingredients</Typography>
          <List dense  sx={{ width: '100%', maxWidth: 400, bgcolor: 'yellow' }}>
            <Grid container columns={16} maxHeight={800} sx={{overflow:"auto"}}>
      {values.map((value,index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        const isLastItem = index === values.length - 1;
        return (
          <List
            key={value}
            disablePadding
          > 
          
<Grid item id={labelId} xs>
<Typography variant="subtitle">{`Ingredient ${value + 1}`}</Typography>

              <TextField/>
              {!isLastItem &&(
          <IconButton
          sx={styleButton}
            onClick={handleRemove(value)}
            >
            <RemoveCircleIcon/>
          </IconButton>

        )}
           {isLastItem && (
          <IconButton
            sx={styleButton}
            onClick={handleToggle(value)}
            checked={checked.indexOf(value) !== -1}
            inputProps={{ 'aria-labelledby': labelId }}
          >
            <AddCircleIcon />
          </IconButton>
        )}
        <Checkbox />

        </Grid>
          </List>
        );
      })}
      </Grid>
    </List>
    

          </Grid>


         
        
        </Grid>
        
<Typography variant="h3">
Description
</Typography>
<Grid item xs> 
        <TextField
          id="outlined-basic"
          helperText="What do you want to call this meal?"
          label="Meal Name"
        />
          
        </Grid>
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
