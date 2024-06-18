import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import MiniDrawer from "./drawer";

const drawerWidth = 240;

function RecipeCreator() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MiniDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
          [theme.breakpoints.up("sm")]: {
            marginLeft: open ? `${drawerWidth}px` : `calc(${theme.spacing(8)} + 1px)`,
          },
        }}
      >
        <Typography variant="h1">
          Hello
        </Typography>
      </Box>
    </div>
  );
}

export default RecipeCreator;
