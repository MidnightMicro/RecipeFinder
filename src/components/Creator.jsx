import {React, useState, useEffect }from "react";
import { Box, Button, Checkbox, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography, useTheme } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Home from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MiniDrawer from "./drawer";
import SearchAppBar from "./NavBar";
import { Form } from "react-router-dom";
import { Divider, IconButton, Paper } from "@mui/material/node";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { db } from "../firebaseconfig";
import { collection, addDoc, setDoc, doc, getDoc, getDocs } from "firebase/firestore";


const drawerWidth = 240;

function RecipeCreator() {
  const [userMade, setUserMade ] = useState([]);
  const [mealName, setMealName] = useState("");
  const [mealInfo, setMealInfo] = useState("");
  const [mealIngredients, setMealIngredients] = useState("");
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



    setValues([...values, values.length]);
    setChecked(newChecked);


  };

  const handleRemove = (value) => () => {

    const newValues = values.filter(val => val !== value);
    setValues(newValues);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mealName !== "") {
        await addDoc(collection(db, "meals"), {
            mealName,
            mealInfo,
            mealIngredients,
            completed: false,
        });
        setMealName("");
        setMealInfo("");
        setMealIngredients("");
    }
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

  const createdRecipes = () => {
  }

  useEffect(() => {
    const fetchData = async () => {
      const mealsCollection = collection(db, "meals");
      const querySnapshot = await getDocs(mealsCollection);
      if (!querySnapshot.empty) {
        // Map through the querySnapshot and extract document data
        const allMeals = querySnapshot.docs.map(doc => ({
          id: doc.id,    // Get the document ID (useful for identifying each doc)
          ...doc.data()  // Spread the document data (mealName, mealInfo, etc.)
        }));
        console.log(allMeals)
        // Update state with fetched documents
        setUserMade(allMeals);
      } else {
        console.log("No documents found in the meals collection!");
      }
    
    
    };

    fetchData();
  }, []);

  
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
      <MiniDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
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
<form>
        <Grid container direction="column" justifyContent="center" alignItems="center" columns={16}>
          <Grid item xs={12} style={{textAlign:'center'}}>
        <Typography variant="h3">
          Submit a New Recipe
        </Typography> 

          <Typography variant="h6" style={{textAlign:'center', width:'900px'}}>
          To create a new recipe, first tell us what type of meal it is and the name to see if it has already been added. Once submitted you can search like meals or create your own with a twist!
          </Typography>

          </Grid>
        
          </Grid>   
        


        <Grid container justify="center" columns={16}>
          <Grid item xs={6} align="center">
          <Typography variant="h3">Ingredient List</Typography>
          <List component={Paper}dense sx={{ width: '100%', maxWidth: 500}}>
            <Grid container columns={16} alignItems="center" justifyContent="center"  sx={{ overflow:"auto", maxHeight:500}}>
              <TextField
              id="outlined-basic"
              helperText="What do you want to call this meal?"
              label="Meal Name"
              value={mealIngredients}
              onChange={(e)=>setMealIngredients(e.target.value)}
              > </TextField>
      {/* {values.map((value,index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        const isLastItem = index === values.length - 1;
        return (
          <List
            key={value}
            disablePadding
          > 
          
<Grid item id={labelId} xs sx={{overflow:"auto", maxHeight:"200"}}>

              <TextField     label="Enter ingredient here"/>
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
      })} */}
      </Grid>
      
    </List>
    

          </Grid>


         



<Grid item xs > 
<Typography variant="h3">
Description
</Typography>
        <TextField
          id="outlined-basic"
          helperText="What do you want to call this meal?"
          label="Meal Name"
          value={mealName}
          onChange={(e)=>setMealName(e.target.value)}
        />

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

        
<TextField component={Paper} fullWidth multiline minRows={4} value={mealInfo} label="Enter Description here" onChange = {(e)=>setMealInfo(e.target.value)}/>


        <Button onClick={handleSubmit}>
          Submit
        </Button>
        </Grid>
          </Grid>
          </form>

          <Typography>
          <h1>Created Meals</h1>
      {/* Render the list of recipes */}
      {userMade.length > 0 ? (
        <List sx={{maxHeight:300, overflow:'scroll'}}>
          {userMade.map(recipe => (
            <ListItem key={recipe.id}>
              <Typography>{recipe.mealName}</Typography>
              <p><strong>Meal Info:</strong> {recipe.mealName}</p>
              <p><strong>Ingredients:</strong> {recipe.mealIngredients}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No meals found.</p>
      )}
          </Typography>
        </Box>


      </Box>
    </div>
  );
}

export default RecipeCreator;
