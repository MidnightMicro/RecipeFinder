import './App.css';
import { Route, Routes } from 'react-router-dom';
import Splash from './components/home';
import Recipes from './components/Recipes'
import ResponsiveAppBar from './components/NavBar';

function App() {
  return (
    <>
    {/* <ResponsiveAppBar /> */}
    <Routes>
      <Route path="/" element={<Splash/>} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </>
  );
}

export default App;
