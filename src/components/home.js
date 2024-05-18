import ResponsiveAppBar from "./NavBar";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import exercise from "./Photos/exercise.gif";
import { createContext, useState } from "react";
import RecipeReviewCard from "./CardRecipe";



function Splash() {
const [ searchTerm, setSearchTerm ] = useState ("");
const [ searchQuery, setSearchQuery ] = useState ("");


function handleChange(event) {
    setSearchQuery(event.target.value);
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchQuery);
    localStorage.setItem("searchQuery", (searchQuery));
    console.log(searchQuery)
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

    <Grid item >
      <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Food Here"
          value={searchQuery}
          onChange={handleChange}
        />
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
      
    <form style={{
        display:'flex',justifyContent:'center'
    }} onSubmit={handleSubmit}>
        <input name="query" type="text" required/>
    </form>
<div style={{display:'flex',justifyContent:'center', margin:10}}>
<Button type="submit" onClick={handleSubmit}>Submit</Button>

</div>
 
    </Grid>
    </Grid>

</Grid>
</div>

<RecipeReviewCard />



      </div>
    </>
  );
}

export default Splash;
