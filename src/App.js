import './App.css';
import { Route, Routes } from 'react-router-dom';
import Splash from './components/home';
import Recipes from './components/Recipes'
import PriceChange from './components/PriceChange';
import ResponsiveAppBar from './components/NavBar';
import Creator from './components/Creator';

function App() {

 
  return (
    <>
    {/* <ResponsiveAppBar /> */}
    <Routes>
      <Route path="/" element={<Splash/>} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/pricechange" element={<PriceChange />} />
      <Route path="/creator" element={<Creator/>} />
    </Routes>
    </>
  );
}

export default App;
