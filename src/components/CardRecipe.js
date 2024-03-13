import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import ExpandMore from '@mui/material/IconButton';
import { Avatar, Box, TextField } from '@mui/material';
import { useContext } from 'react';
import MyContext from "./home.js";

const recipes = [
  {
    id:"01",
    title: 'Shrimp and Chorizo Paella',
    subheader: 'September 14, 2016',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    method: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...',
  },
  {
    id:"02",
    title: 'Classic Spaghetti Bolognese',
    subheader: 'February 20, 2023',
    image: 'https://example.com/spaghetti-bolognese.jpg',
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
  // Add more recipe objects as needed
];

export default function RecipeReviewCard () {
  const [expanded, setExpanded] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState ("");

  const searchedTermfromContext = useContext(MyContext)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <> 
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
      </Box>
      <div>
        {filteredRecipes.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 1080 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
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
              height="194"
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
        ))}
      </div>
    </>
  );
};
