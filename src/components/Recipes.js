import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SearchAppBar from "./NavBar.js";
import ResponsiveDrawer from "./drawer.js";
import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  AccordionDetails,
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  CardHeader,
  IconButton,
  CardMedia,
  CardActions,
  Collapse,
  TextField,
  Button,
  Paper,
  Switch,
  ListItem,
  List,
  Alert,
  Backdrop,
  DialogTitle,
  DialogContent,
  Dialog,
} from "@mui/material";
import RecipeReviewCard from "./CardRecipe.js";
import CustomizedDialogs from "./CardInfo.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { blue, red } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMore from "@mui/material/IconButton";
import SCP from "./Photos/SCP.jpg";
import ASB from "./Photos/ASB.jpg";
import PotRoast from "./Photos/PotRoast.jpg";
import JPR from "./Photos/JPR.jpg";
import GSD from "./Photos/GSD.jpg";
import Draggable from "react-draggable";
import TO from "./Photos/TO.jpg";
import PSS from "./Photos/PSS.jpg";
import TSF from "./Photos/TSF.jpg";
import { useTheme } from "@mui/material";

const recipes = [
  {
    id: "01",
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    image: SCP,
    price: "$5",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    method:
      "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...",
  },
  {
    id: "02",
    title: "Classic Spaghetti Bolognese",
    subheader: "February 20, 2023",
    image: ASB,
    price: "$10",
    description:
      "A hearty and delicious spaghetti bolognese recipe with a rich tomato sauce.",
    method:
      "Cook ground beef with onions, garlic, and tomato sauce. Simmer until flavors meld. Serve over cooked spaghetti.",
  },
  {
    id: "03",
    title: "Vegetarian Tofu Stir-Fry",
    subheader: "March 5, 2023",
    image: TSF,
    price: "$15",
    description:
      "A quick and healthy vegetarian stir-fry with tofu, colorful vegetables, and a savory sauce.",
    method:
      "Stir-fry tofu and vegetables in a hot wok. Add soy sauce, ginger, and garlic for flavor. Serve over rice or noodles.",
  },
  {
    id: "04",
    title: "Grilled Salmon with Lemon and Dill",
    subheader: "April 12, 2023",
    image: GSD,
    price: "$20",
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  {
    id: "05",
    title: "Steak",
    subheader: "April 12, 2023",
    image: PSS,
    price: "$7.99",
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  {
    id: "06",
    title: "Orzo",
    subheader: "April 12, 2023",
    image: TO,
    price: "$2",
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  {
    id: "07",
    title: "Pot Roast",
    subheader: "April 12, 2023",
    image: PotRoast,
    price: "$5",
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  {
    id: "07",
    title: "Jewish Pot Roast",
    subheader: "April 12, 2023",
    image: JPR,
    price: "$10",
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  // {
  //   id: "07",
  //   title: "Pork Pot Roast",
  //   subheader: "April 12, 2023",
  //   image: "https://example.com/grilled-salmon.jpg",
  //   description:
  //     "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
  //   method:
  //     "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  // },

  // Add more recipe objects as needed
];

function Recipes() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [priceToggle, setPriceToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealId,setMealId] = useState([]);
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || "Chicken"
  );
  const [priceFilter, setPriceFilter] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    localStorage.setItem("searchQuery", event.target.value); // Update this line to use the prop value directly
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSwitchChange = () => {
    setPriceToggle(!priceToggle);
  };
  const handleClickOpen = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecipe(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
        console.log(data);
        setFilteredRecipes(data.meals);
        setOpen(false);
      } else{
        setSearchQuery([]);
        setFilteredRecipes([])
        setOpen(true);
      }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}, []);

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior if called with an event
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          console.log(data);
          setFilteredRecipes(data.meals);
          setOpen(false);
          const mealIDs = data.meals.map(meal => meal.idMeal);
          setMealId(mealIDs);
          console.log("This is the meal ID array:", mealIDs);
        } else {
          setFilteredRecipes([]);
          setOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      console.log(searchQuery);
      console.log(filteredRecipes);
      // window.scrollTo({ top:1000, behavior: "smooth" });
  };
  


  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }
    return shuffledArray;
}



    const randomButton = () => {
    console.log(filteredRecipes)
    const shuffledRecipes = shuffle(filteredRecipes);
    setFilteredRecipes(shuffledRecipes);
    }


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const priceSearch = (event) => {
    alert(priceFilter);
  };

  // const randomElement = recipes[Math.floor(Math.random() * recipes.length)];
  function randomSearch () {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFilteredRecipes(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // useEffect(() => {
  //   randomSearch();
  // }, []);


  const label = { inputProps: { "aria-label": "Switch demo" } };
  const drawerWidth = 240;


  return (
    <div>
      <Box style={{
        backgroundImage:
            'url("https://static.vecteezy.com/system/resources/previews/037/349/588/non_2x/ai-generated-wood-background-with-chalkboard-and-lemon-free-photo.jpg")',
        marginTop:'50px',
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        height:'100vh',
        width:'100vw',
        overflow:"auto",
      }}>
        
      <ResponsiveDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
      {/* <SearchAppBar /> */}
      <Box
component="main"
sx={{
  flexGrow: 1,
  p: 3,
  transition: (theme) =>
    theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(8)} + 1px)`,
  },
}}
    >

      <Box>
        <Grid
          container
          columns={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "0 auto" }}
        >
          <Switch
            {...label}
            checked={priceToggle}
            onChange={handleSwitchChange}
          />

          <Grid
            container
            xs={6}
            sx={{
              marginTop: 4,
              marginBottom: 5,
              backgroundColor: "rgba(0, 24, 0, 0.67)",
              border: 1,
              borderRadius: 5,
            }}
          >
            {priceToggle && (
              <Grid
                item
                xs
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  color="primary"
                  type="text"
                  variant="outlined"
                  FormHelperTextProps={{ sx: { color: "yellow" } }}
                  helperText="Enter Price Here"
                  sx={{
                    input: {
                      color: "blue",
                      background: "white",
                    },
                  }}
                  value={priceFilter}
                  onChange={handlePriceChange}
                />
                <Button onClick={priceSearch}>RandomPrice</Button>
              </Grid>
            )}
            <Grid item xs>
              <form
                style={{ display: "flex", justifyContent: "center" }}
                onSubmit={handleSubmit}
              >
                {/* <input type="submit" formTarget={searchQuery} value={searchQuery}>
          </input> */}
                <TextField
                  color="primary"
                  type="text"
                  variant="outlined"
                  helperText="Enter main ingredient here"
                  FormHelperTextProps={{ sx: { color: "yellow" } }}
                  sx={{
                    input: {
                      color: "blue",
                      background: "white",
                    },
                  }}
                  value={searchQuery}
                  onChange={handleChange}
                  onKeyUp={handleKeyPress}
                />

                <Button type="submit" variant="contained" onSubmit={handleSubmit}>
                  Submit
                </Button>
                <Grid item></Grid>
                <Button onClick={randomSearch}>Random</Button>
                <Button onClick={randomButton}>Randomize</Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow:'auto',
            height:'100vh',
          }}
        >
            {filteredRecipes && filteredRecipes.length > 0 ? (
        filteredRecipes.map((item) => (
          <Grid item key={item.id}>
            <Paper>
              <Card sx={{ maxWidth: 1000, maxHeight: 1000 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.strMeal}
                  subheader={item.strCategory}
                />
                <CardMedia
                  component="img"
                  height="500"
                  image={item.strMealThumb}
                  alt="Recipe Image"
                />
                <CardContent>
                  <Button variant="outlined" onClick={() => handleClickOpen(item)}>
                    Open Recipe
                  </Button>
                </CardContent>
              </Card>
            </Paper>

            {selectedRecipe && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            Modal title {selectedRecipe.idMeal}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{selectedRecipe.strMeal}</Typography>
            <Typography>{selectedRecipe.strInstructions}</Typography>
            <CardMedia
              component="img"
              height="500"
              image={selectedRecipe.strMealThumb}
              alt="Recipe Image"
            />
          </DialogContent>
        </Dialog>
      )}
          </Grid>
        ))
      ) : (
        // <Typography>No recipes found</Typography>
        <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Alert severity="warning">No recipes found. Please provide a valid ingredient.</Alert>
      </Backdrop>
      )}




         
        </Grid>
        </Box>
      </Box>
      </Box>
    </div>
  );
}

export default Recipes;
