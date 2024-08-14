import React, {useState} from "react";
import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import MiniDrawer from "./drawer";
import SearchAppBar from "./NavBar";
import { Form } from "react-router-dom";
import { app, db } from '../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 



const drawerWidth = 240;

function Login() {
let auth = getAuth();
  const [data, setData ] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const collectionRef = collection(db, 'users')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData ({...data, ...newInput})
};

const handleSubmit = () => {
    createUserWithEmailAndPassword (auth, data.email, data.password)
    .then ((response) =>{
        console.log(response.user)
    })
    .catch ((err) => {
        alert(err.message);
    })
}


  return (
    <div>
      <Box style={{
        backgroundImage:
            'url("https://static.vecteezy.com/system/resources/previews/037/349/588/non_2x/ai-generated-wood-background-with-chalkboard-and-lemon-free-photo.jpg")',

        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        height:'100vh',
        width:'100vw',
        overflow:"auto",
      }}>
      {/* passes values in to make it move the content */}
      <MiniDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/*added transition to push data when the drawer is open vs closed */}
      <Box
        component="main"
        sx={{
          backgroundColor:"white",
          flexGrow: 1,
          p: 3,
          marginTop: "50px",
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: open
            ? `${drawerWidth}px`
            : `calc(${theme.spacing(7)} + 1px)`,
          [theme.breakpoints.up("sm")]: {
            marginLeft: open
              ? `${drawerWidth}px`
              : `calc(${theme.spacing(8)} + 1px)`,
          },
        }}
      >
        <Box component="form" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
            <TextField
            name="email"
            placeholder="email"
            onChange={(event) => handleInput(event)}>
            </TextField>
            <TextField
            name="password"
            placeholder="password"
            onChange={(event) => handleInput(event)}>
            </TextField>

            

            <Button onClick={handleSubmit}>
              Submit
            </Button>
            </div>

        </Box>
        <Typography variant="h1" sx={{ marginTop: "20px" }}>
          Hello
        </Typography>
      </Box>
      </Box>
    </div>
  );
}

export default Login;
