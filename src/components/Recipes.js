import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import SearchAppBar from './NavBar.js';
import { Card, CardContent ,Box, Grid, Typography, CardHeader, IconButton, CardMedia, CardActions, Collapse, TextField, Button } from '@mui/material';
import RecipeReviewCard from './CardRecipe.js';
import CustomizedDialogs from './CardInfo.js';
import MoreVertIcon from '@mui/icons-material/MoreVert.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';
import ExpandMore from '@mui/material/IconButton';
import SCP from "./Photos/SCP.jpg";
import ASB from "./Photos/ASB.jpg";

const recipes = [
    {
      id:"01",
      title: 'Shrimp and Chorizo Paella',
      subheader: 'September 14, 2016',
      image: SCP,
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      method: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...',
    },
    {
      id:"02",
      title: 'Classic Spaghetti Bolognese',
      subheader: 'February 20, 2023',
      image: ASB,
      description: 'A hearty and delicious spaghetti bolognese recipe with a rich tomato sauce.',
      method: 'Cook ground beef with onions, garlic, and tomato sauce. Simmer until flavors meld. Serve over cooked spaghetti.',
    },
    {
      id:"03",
      title: 'Vegetarian Tofu Stir-Fry',
      subheader: 'March 5, 2023',
      image: 'https://example.com/tofu-stir-fry.jpg',
      description: 'A quick and healthy vegetarian stir-fry with tofu, colorful vegetables, and a savory sauce.',
      method: 'Stir-fry tofu and vegetables in a hot wok. Add soy sauce, ginger, and garlic for flavor. Serve over rice or noodles.',
    },
    {
      id:"04",
      title: 'Grilled Salmon with Lemon and Dill',
      subheader: 'April 12, 2023',
      image: 'https://example.com/grilled-salmon.jpg',
      description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
      method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
    },
    {
    id:"05",
    title: 'Grilled Salmon with Lemon and Dill',
    subheader: 'April 12, 2023',
    image: 'https://example.com/grilled-salmon.jpg',
    description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
    method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  {
  id:"06",
  title: 'Grilled Salmon with Lemon and Dill',
  subheader: 'April 12, 2023',
  image: 'https://example.com/grilled-salmon.jpg',
  description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
  method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  {
  id:"07",
  title: 'Grilled Salmon with Lemon and Dill',
  subheader: 'April 12, 2023',
  image: 'https://example.com/grilled-salmon.jpg',
  description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
  method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
    // Add more recipe objects as needed
  ];

  function Recipes () {

    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [expanded , setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery"));

    console.log({searchQuery})
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      const handleChange = (event) => {
        setSearchQuery(event.target.value); // Update this line to use the prop value directly
      };

      const handleSubmit = (event) => { 
        event.preventDefault();
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRecipes(filteredRecipes);
        console.log(filteredRecipes);
        window.scrollTo({ top:1000, behavior: "smooth" });
      };
      
    //local storage working prototype
      useEffect(() => {
        localStorage.setItem("searchQuery",JSON.stringify(searchQuery))
      },[searchQuery]);
    
  
    return (
        <>
        <SearchAppBar />
        <Grid container spacing={2} columns={12} direction="row" justifyContent="center" alignItems="center" sx={{paddingTop:4}}>
        <Grid item xs={6} sx={{backgroundColor:'red', border:1, borderRadius:5}}>
            

        <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={handleSubmit}>
  <TextField
    color="primary"
    type="text"
    variant="outlined"
    helperText="Enter main item here"
    sx={{
      input: {
        color: 'blue',
        background: 'white',
      },
    }}
    value={searchQuery}
    onChange={handleChange}
  />

  <Button type="submit" variant='contained'>Submit</Button>
</form>
    

        </Grid>
        </Grid>
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
  {filteredRecipes.map((item, index) => (
<Grid item key={item.id} id={index === 0 ? 'firstCard' : null}
style={{paddingTop:150,paddingLeft:50,}}>
      <CustomizedDialogs />
            <Card key={item.id} sx={{ maxWidth: 1080,}}>
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
</Grid>


           
        
))} 
 </Grid>
        <Box>
            <Grid container>

            </Grid>

        </Box>
      
        </>

    )
}

export default Recipes;
