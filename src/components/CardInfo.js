import { Card } from '@mui/material';
import React from 'react';


const ParentComponent = () => {
  const recipes = [
    {
      index:"1",
      title: 'Shrimp and Chorizo Paella',
      subheader: 'September 14, 2016',
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
      method: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...',
    },
    {
      title: 'Classic Spaghetti Bolognese',
      subheader: 'February 20, 2023',
      image: 'https://example.com/spaghetti-bolognese.jpg',
      description: 'A hearty and delicious spaghetti bolognese recipe with a rich tomato sauce.',
      method: 'Cook ground beef with onions, garlic, and tomato sauce. Simmer until flavors meld. Serve over cooked spaghetti.',
    },
    {
      title: 'Vegetarian Tofu Stir-Fry',
      subheader: 'March 5, 2023',
      image: 'https://example.com/tofu-stir-fry.jpg',
      description: 'A quick and healthy vegetarian stir-fry with tofu, colorful vegetables, and a savory sauce.',
      method: 'Stir-fry tofu and vegetables in a hot wok. Add soy sauce, ginger, and garlic for flavor. Serve over rice or noodles.',
    },
    {
      title: 'Grilled Salmon with Lemon and Dill',
      subheader: 'April 12, 2023',
      image: 'https://example.com/grilled-salmon.jpg',
      description: 'Light and flavorful grilled salmon fillets with a zesty lemon and dill marinade.',
      method: 'Marinate salmon in a mixture of lemon juice, dill, and olive oil. Grill until cooked through. Garnish with lemon wedges.',
    },
    // Add more recipe objects as needed
  ];

  return (
    <div>
      {recipes.map((recipe, index) => (
        <Card key={index} {...recipe}></Card>
      ))}
    </div>
  );
};

export default ParentComponent;