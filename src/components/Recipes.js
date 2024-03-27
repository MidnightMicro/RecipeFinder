import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SearchAppBar from "./NavBar.js";
import {
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
import PotRoast from "./Photos/PotRoast.jpg"
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
    description:
      "Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.",
    method:
      "Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.",
  },
  {
    id: "07",
    title: "Jewish Pot Roast",
    subheader: "April 12, 2023",
    image: JPR ,
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
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );

  console.log({ searchQuery });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value); // Update this line to use the prop value directly
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission behavior if called with an event
    }

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);

    console.log(filteredRecipes);
    // window.scrollTo({ top:1000, behavior: "smooth" });
  };

  //local storage working prototype
  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const randomElement = recipes[Math.floor(Math.random() * recipes.length)];
  const randomSearch = () => {
    setSearchQuery(randomElement.title);
  };

  useEffect(() => {
    handleSubmit(); // Automatically perform search when the component mounts
  }, []);

  return (
    <>
      <SearchAppBar />
      <Box
      sx={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/037/349/588/non_2x/ai-generated-wood-background-with-chalkboard-and-lemon-free-photo.jpg")',
        backgroundSize:'cover',

      }}> 
      <Grid
        container

        columns={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ margin:'0 auto'}}
      >
        <Grid
          item
          xs={6}
          sx={{marginTop:4,marginBottom:5, backgroundColor: "red", border: 1, borderRadius: 5 }}
        >
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

            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button onClick={randomSearch}>Random</Button>

          </form>
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", alignItems:"center",justifyContent: "center",  }}
      >
        {filteredRecipes.map((item, index) => (
          <Grid item xs>
            <Paper
              elevation={2}
              key={item.id}
              id={index === 0 ? "firstCard" : null}
              style={{backgroundColor:'#93e9be' , display:"flex", maxWidth:500,margin:'0 auto',padding:10,alignItems:"center",justifyContent:"center" }}
            >
              {/* <CustomizedDialogs
                recipes={filteredRecipes}
                selectedItem={item}
              /> */}
              <Card key={item.id} sx={{maxWidth: 1000 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.title}
                  subheader={item.subheader}
                />
                <CardMedia
                  component="img"
                  height="500"
                  width="50"
                  image={item.image}
                  alt="Recipe Image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>{item.method}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </Box>
    </>
  );
}

export default Recipes;
