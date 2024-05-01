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
  Switch,
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
    price: '$5',
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
    price: '$10',
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
    price: '$15',
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
    price: '$20',
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
    price: '$7.99',
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
    price: '$2',
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
    price: '$5',
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
    price: '$10',
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
  const [priceToggle, setPriceToggle] = useState(false)
  const [posts, setPosts] = useState([]);




 
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [priceFilter, setPriceFilter] = useState("");

  console.log({ searchQuery });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value); // Update this line to use the prop value directly
  };

  const handlePriceChange = (event) =>{
    setPriceFilter(event.target.value)
  }

  const handleSwitchChange = () => {
    setPriceToggle(!priceToggle);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission behavior if called with an event
    }

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    console.log(filteredRecipes);
    // window.scrollTo({ top:1000, behavior: "smooth" });
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`)
       .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
       })
       .then((data) => {
          console.log(data);
          setFilteredRecipes(data.meals);
       })
       .catch((error) => {
          console.error('Error fetching data:', error);
       });
}, []);

  //local storage working prototype
  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const priceSearch = (event) =>{
    alert(priceFilter)

  }

  // const randomElement = recipes[Math.floor(Math.random() * recipes.length)];
  const randomSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
       .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
       })
       .then((data) => {
          console.log(data);
          setFilteredRecipes(data.meals);
       })
       .catch((error) => {
          console.error('Error fetching data:', error);
       });
  };
    useEffect(() => {
      randomSearch()
    }, []);

  useEffect(() => {
    handleSubmit(); // Automatically perform search when the component mounts
  }, []);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
        sx={{ margin:'0 auto',}}
      >
        <Switch {...label}      checked={priceToggle}
        onChange={handleSwitchChange}/>

        <Grid
          container
          xs={6}
          sx={{marginTop:4,marginBottom:5, backgroundColor: "rgba(0, 24, 0, 0.67)", border: 1, borderRadius: 5 }}
        >
          {priceToggle && ( 
          <Grid item xs style={{display:"flex", justifyContent:"center"}}>
            <TextField 
              color="primary"
              type="text"
              variant="outlined"
              FormHelperTextProps={{ sx: { color: 'yellow' } }} 
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
              FormHelperTextProps={{ sx: { color: 'yellow' } }} 
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
            <Grid item >

            </Grid>
            <Button onClick={randomSearch}>Random</Button>
          
           

            </form>
           </Grid>
          
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", alignItems:"center",justifyContent: "center",  }}
      >

      
      <Grid>
      <p>Beans</p>
{filteredRecipes.map((item) => {
   return (
      <div className="post-card" key={item.idMeal}>
         <h1 className="post-title">{item.strMeal}</h1>
         <img src={item.strMealThumb} alt="Food pic" />
         {item.strInstructions && (
            <div>
               <h3>Instructions:</h3>
               <ol>
                  {item.strInstructions.split('\r\n').filter(instruction => instruction.trim() !== '').map((instruction, index) => (
                     <li key={index}>{instruction}</li>
                  ))}
               </ol>
            </div>
         )}
         <div className="button">
            <div className="delete-btn">Delete</div>
         </div>
      </div>
   );
})}
      </Grid>
        {/* {filteredRecipes.map((item, index) => (
          <Grid item xs>
            <Paper
              elevation={2}
              key={item.id}
              id={index === 0 ? "firstCard" : null}
              style={{backgroundColor:'#93e9be' , display:"flex", maxWidth:500,margin:'0 auto',padding:10,alignItems:"center",justifyContent:"center" }}
            > */}
              {/* <CustomizedDialogs
                recipes={filteredRecipes}
                selectedItem={item}
              /> */}
              {/* <Card key={item.id} sx={{maxWidth: 1000 }}>
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
        ))} */}
      </Grid>
      </Box>
    </>
  );
}

export default Recipes;
