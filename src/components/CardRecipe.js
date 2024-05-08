import React, { useState, useEffect } from 'react';

import { Box, Button, Grid, TextField } from '@mui/material';
import ASB from "./Photos/ASB.jpg";
import SCP from "./Photos/SCP.jpg";
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: "01",
    title: 'Shrimp and Chorizo Paella',
    subheader: 'September 14, 2016',
    image: SCP,
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    method: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...',
  },
  {
    id: "02",
    title: 'Classic Spaghetti Bolognese',
    subheader: 'February 20, 2023',
    image: ASB,
    description: 'A hearty and delicious spaghetti bolognese recipe with a rich tomato sauce.',
    method: 'Cook ground beef with onions, garlic, and tomato sauce. Simmer until flavors meld. Serve over cooked spaghetti.',
  },
  {
    id: "03",
    title: 'Vegetarian Tofu Stir-Fry',
    subheader: 'March 5, 2023',
    image: 'https://example.com/tofu-stir-fry.jpg',
    description: 'A quick and healthy vegetarian stir-fry with tofu, colorful vegetables, and a savory sauce.',
    method: 'Stir-fry tofu and vegetables in a hot wok. Add soy sauce, ginger, and garlic for flavor. Serve over rice or noodles.',
  },
  {
    id: "04",
    title: 'Grilled Salmon with Lemon and Dill',
    subheader: 'April 12, 2023',
    image: 'https://example.com/grilled-salmon.jpg',
    description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
    method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  {
    id: "05",
    title: 'Grilled Salmon with Lemon and Dill',
    subheader: 'April 12, 2023',
    image: 'https://example.com/grilled-salmon.jpg',
    description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
    method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  {
    id: "06",
    title: 'Grilled Salmon with Lemon and Dill',
    subheader: 'April 12, 2023',
    image: 'https://example.com/grilled-salmon.jpg',
    description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
    method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  {
    id: "07",
    title: 'Grilled Salmon with Lemon and Dill',
    subheader: 'April 12, 2023',
    image: 'https://example.com/grilled-salmon.jpg',
    description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
    method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
  },
  // Add more recipe objects as needed
];

export default function RecipeReviewCard() {
  // Initialize searchQuery with a default value if the value from localStorage is not valid JSON
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "blank" )
  

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleClick = () => {
    console.log(searchQuery)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchQuery);
    localStorage.setItem("searchQuery", (searchQuery));
    window.open("./recipes")
    console.log(searchQuery)
  };

  useEffect(()=>{
    setSearchQuery(searchQuery);
},[searchQuery]);



  //local storage working prototype
  // useEffect(() => {
  //   localStorage.setItem("searchQuery", JSON.stringify(searchQuery))
  // }, [searchQuery]);


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container >
          <Grid item xs={16}>
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

              <button onClick={handleClick} type="submit" variant='contained'>Submit1</button>
              <button type="submit" variant='contained'>Submit</button>
            </form>
          </Grid>

        </Grid>
      </Box>
      {/* <div>
        {filteredRecipes.map((item) => (
          
         
        ))}
      </div> */}
    </>
  );
};
