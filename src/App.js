import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios";


function App() {
  const [search,setSearch] = useState();
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a24235de";
  const APP_KEY = "915fa9c01cf2e6c2601e64e46c4711b4";
  
  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
  };
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }
  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header search={search} handleChange={handleChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      
    </div>
  );
}

export default App;
