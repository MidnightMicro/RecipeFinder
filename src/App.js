import './App.css';
import { Route, Routes } from 'react-router-dom';
import Splash from './components/home';
import Recipes from './components/Recipes'
import PriceChange from './components/PriceChange';
import CreatedRecipes from './components/CreatedRecipes';
import ResponsiveAppBar from './components/NavBar';
import Creator from './components/Creator';
import Login from './components/login';
import { app } from './firebaseconfig';

function App() {

 
  return (
    <>
    {/* <ResponsiveAppBar /> */}
    <Routes>
      <Route path="/" element={<Splash/>} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/PriceChange" element={<PriceChange />} />
      <Route path="/creator" element={<Creator/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/CreatedRecipes" element={<CreatedRecipes/>} />
    </Routes>
    </>
  );
}

export default App;
