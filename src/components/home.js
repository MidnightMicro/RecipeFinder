import ResponsiveAppBar from "./NavBar";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import exercise from "./Photos/exercise.gif";
import { createContext, useState } from "react";
import RecipeReviewCard from "./CardRecipe";



function Splash() {
const [ searchTerm, setSearchTerm ] = useState ("");
const MyContext = createContext("");

// function handleChange(event) {
//     setSearchTerm(event.target.value);
//   }

function handleSubmit (event) { 
  event.preventDefault();
  setSearchTerm(searchTerm);
    // window.scrollTo({top:1080, behavior: "smooth"})
    console.log(`Query: ${searchTerm}`)
};


  return (
    <>
     <div style={{
        backgroundImage: `url(${exercise})`,
        backgroundSize: 'cover', 
        position:'absolute',
        height: '100vh',
        width:'100%',
        filter: 'blur(5px)',
        zIndex:-1,
      }}> poop
      </div>
      <div style={{
        zIndex:-1,
      }}>

    <ResponsiveAppBar />

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh' }}>
<Grid container spacing={2}>
    <Grid item xs={16} sx={{alignItems:'center'}}>

        <Typography variant="h1" sx={{textAlign:'center', color:"white"}}>
            What's on Sale?
        </Typography>

    <Grid>
{/*     
    <MyContext.Provider value={{searchTerm}}>
       
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <TextField color="primary" type="text" variant="outlined" helperText="Enter main item here" sx={{
            input: {
                color:"blue",
                background:"white",
            }
        }}value={searchTerm}
        onChange={handleChange}>
        </TextField>
    </Box>
    </MyContext.Provider> */}


  
    <form style={{
        display:'flex',justifyContent:'center'
    }} onSubmit={handleSubmit}>
        <input name="query" type="text" required/>
    </form>
<div style={{display:'flex',justifyContent:'center', margin:10}}>
<button type="submit" onClick={handleSubmit}>Submit</button>

</div>

    </Grid>
    </Grid>

</Grid>
</div>

<RecipeReviewCard name={searchTerm} a={5} b={2}/>
      </div>
    </>
  );
}

export default Splash;
