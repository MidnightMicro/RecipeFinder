import { Typography, Button, TextField } from "@mui/material"
import SearchAppBar from "./NavBar"
import { useState } from "react"

const recipes = [
    {
      id: "01",
      title: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
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

export default function PriceChange() {
const [searchQuery, setSearchQuery] = useState("")
const [price, setPrice] = useState ({})

const handleSubmit=()=>{
    console.log({searchQuery})
}

const handlePriceChange = (e, recipeId) => {
    const { value } = e.target;
    setPrice((prevPrices) => ({
        ...prevPrices,
        [recipeId]: value,
    }));
};
const handleChange=(e)=>{
    setSearchQuery(e.target.value)
}

return (
    <>
    <SearchAppBar />
    <Typography variant="h4">What prices need to be changed?</Typography>

    <form>
        <TextField value={searchQuery}onChange={handleChange}></TextField>
        <Button onClick={handleSubmit}>Submit </Button>
    </form>
    
    <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                    value={searchQuery}
                    onChange={handleChange}
                    label="Search Recipe"
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
            {/* Display recipes with input fields for price changes */}
            {recipes
                .filter((recipe) =>
                    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((recipe) => (
                    <div key={recipe.id}>
                        <Typography>{recipe.title}</Typography>
                        <TextField
                            value={setPrice[recipe.id] || recipe.price}
                            onChange={(e) => handlePriceChange(e, recipe.id)}
                            label="New Price"
                        />
                    </div>
                ))}

    </>
)
}