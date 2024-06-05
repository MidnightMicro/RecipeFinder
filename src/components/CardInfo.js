import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, CardMedia, Grid, Paper } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({recipes, selectedItem}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

console.log(recipes)
  return (
    <div> 
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
  
          <Typography gutterBottom>
          
          </Typography>
          <Typography>
           <Grid item key={recipes.id} >
            <CardHeader></CardHeader>
           <Paper>
             <Card sx={{ maxWidth: 1000, maxHeight:1000 }}>
               <CardHeader
                 action={
                   <IconButton aria-label="settings">
                     
                   </IconButton>
                 }
                 title={recipes.strMeal}
                 subheader={recipes.strCategory}
               />
              
               <CardMedia
                 component="img"
                 height="500"
                 width="50"
                 image={recipes.strMealThumb}
                 alt="Recipe Image"
               />
               <CardContent>
                <Typography variant="h1">
                  HELLO
                  </Typography>
                 <CustomizedDialogs title={recipes.strMeal}
                 subheader={recipes.strCategory}/>
               </CardContent>
             </Card>
           </Paper>
         </Grid>
     
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog> */
      
      // {filteredRecipes && filteredRecipes.length > 0 ? (
      //   filteredRecipes.map((item, index) => (
      //     <Grid item key={item.id} >
      //       <Paper>
      //         <Card sx={{ maxWidth: 1000, maxHeight:1000 }}>
      //           <CardHeader
      //             action={
      //               <IconButton aria-label="settings">
      //                 <MoreVertIcon />
      //               </IconButton>
      //             }
      //             title={item.strMeal}
      //             subheader={item.strCategory}
      //           />
      //           <CardMedia
      //             component="img"
      //             height="500"
      //             width="50"
      //             image={item.strMealThumb}
      //             alt="Recipe Image"
      //           />
      //           <CardContent>
      //             <div>
      //               <Button variant="outlined">Open Recipe</Button>
      //               {selectedRecipe && (
      //         <Dialog open={open} onClose={handleClose}>
      //           <DialogTitle sx={{ m: 0, p: 2 }}>
      //             Modal title {selectedRecipe.idMeal}
      //             <IconButton
      //               aria-label="close"
      //               onClick={handleClose}
      //               sx={{
      //                 position: 'absolute',
      //                 right: 8,
      //                 top: 8,
      //                 color: (theme) => theme.palette.grey[500],
      //               }}
      //             >
      
      //               <CloseIcon />
      //             </IconButton>
      //           </DialogTitle>
      //           <DialogContent dividers>
      //             <Typography gutterBottom>{selectedRecipe.strMeal}</Typography>
      //             <Typography>{selectedRecipe.strCategory}</Typography>
      //             <CardMedia
      //               component="img"
      //               height="500"
      //               image={selectedRecipe.strMealThumb}
      //               alt="Recipe Image"
      //             />
      //           </DialogContent>
      //         </Dialog>
      //       )}
      //             </div>
      //             {/* <CustomizedDialogs recipes={filteredRecipes} selectedItem={item}/> */}
      //           </CardContent>
      //         </Card>
      //       </Paper>
      //     </Grid>
      //   ))
      // ) : (
      //   <Backdrop
      //   open={open}
      //   onClick={handleClose}
      //   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      // >
      //   <Alert severity="warning">No recipes found. Please provide a valid ingredient.</Alert>
      // </Backdrop>
      // )}
      
      
      
      
      }
    </div>
  );
}
