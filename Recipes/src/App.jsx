import './App.css'
import Navbar from './NavBar/Nav';
import Section1 from './Section_1/Section';
import Footer from './Footer/Footer.jsx';
import About from './AboutMe/AboutMe.jsx';
import Recipes from './Recipes/Recipes.jsx';
import RecipeDetails from './RecipeDetails/RecipeDetails.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router basename='hora-do-rango/'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Section1 />} />
        <Route path='/Recipes' element= {<Recipes />} />
        <Route path='/RecipeDetails/:recipeId' element={<RecipeDetails />} />
        <Route path='/About' element = {<About />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App;