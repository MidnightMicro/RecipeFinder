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
} from "@mui/material";
import RecipeReviewCard from "./CardRecipe.js";
import CustomizedDialogs from "./CardInfo.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { blue, red } from "@mui/material/colors";
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
  const [posts, setPosts] = useState([]);

  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [priceFilter, setPriceFilter] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value); // Update this line to use the prop value directly
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSwitchChange = () => {
    setPriceToggle(!priceToggle);
  };

  const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission behavior if called with an event
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchQuery}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data != null) {
      console.log(data);
      setFilteredRecipes(data.meals);
    } else{
      setSearchQuery("Chicken");
      alert("Please provide valid ingredient")
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

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data != null) {
        console.log(data);
        setFilteredRecipes(data.meals);
      } else{
        setSearchQuery("Chicken");
        alert("Please provide valid ingredient")
      }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const priceSearch = (event) => {
    alert(priceFilter);
  };

  // const randomElement = recipes[Math.floor(Math.random() * recipes.length)];
  const randomSearch = () => {
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



  return (
    <div>
      <ResponsiveDrawer />
      <SearchAppBar />
      <Box
      // style={{
      //   backgroundImage:
      //     'url("https://static.vecteezy.com/system/resources/previews/037/349/588/non_2x/ai-generated-wood-background-with-chalkboard-and-lemon-free-photo.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "absolute",
      //    }}
    >
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
                  helperText="Enter main item here"
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
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          columns={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid>
            <p>Beans</p>
{filteredRecipes && filteredRecipes.length > 0 ? (
  filteredRecipes.map((item) => (
    <Grid key={item.id}>
      <Paper>
        <Card sx={{ maxWidth: 1000 }}>
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
            width="50"
            image={item.strMealThumb}
            alt="Recipe Image"
          />
          <CardContent>
            <CustomizedDialogs recipes={filteredRecipes} selectedItem={item} />
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  ))
) : (
  <Alert severity="warning">No recipes found. Please provide a valid ingredient.</Alert>
)}

            {/* {filteredRecipes.map((item) => (
              <>
                <Grid>
                  <Paper>
                    <Card key={item.id} sx={{ maxWidth: 1000 }}>
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
                        width="50"
                        image={item.strMealThumb}
                        alt="Recipe Image"
                      />
                      <CardContent>
                        <CustomizedDialogs
                          recipes={filteredRecipes}
                          selectedItem={item}
                        />
                        {item.strInstructions && (
                          <>
                            <Accordion>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                              >
                                Instructions
                              </AccordionSummary>
                              <AccordionDetails>
                                <div>
                                  <List>
                                    {item.strInstructions
                                      .split("\r\n")
                                      .filter(
                                        (instruction) => instruction.trim() !== ""
                                      )
                                      .map((instruction, index) => (
                                        <ListItem key={index}>
                                          {instruction}
                                        </ListItem>
                                      ))}
                                  </List>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                            <List>

                            </List>
                            <Typography variant="h3">Ingredients</Typography>
                            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                                        const ingredient = item[`strIngredient${index}`];
                                        const measure = item[`strMeasure${index}`];
                                        if (ingredient && ingredient.trim() !== "") {
                                            return (
                                                <ListItem key={index}>
                                                    {`${ingredient} - ${measure}`}
                                                </ListItem>
                                            );
                                        }
                                        return null;
                                    })}

                          </>
                        )}
                        <Typography variant="body2" color="text.secondary">

                        </Typography>
                      </CardContent>

                    </Card>
                  </Paper>
                </Grid>
              </>
            ))} */}
          </Grid>
         
        </Grid>
      </Box>
    </div>
  );
}

export default Recipes;
