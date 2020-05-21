import React, { useEffect } from 'react';
import RecipeOverview from './components/RecipeOverview/RecipeOverview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApiManager from './utils/ApiManager';
import './App.css';
import Context from './context';
import logo from './hellofresh-logo.svg';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

const App = () => {
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const recipes = await ApiManager.fetchRecipes();
      setRecipes(recipes);
    };
    fetchData();
  }, []);

  const getRecipe = id => recipes.find(recipe => id === recipe.id);

  const rate = (id, score) => {
    const recipesCopy = [...recipes];
    recipesCopy.forEach(recipe => {
      if (id === recipe.id) {
        recipe.rating = score;
        recipe.rated = true;
      }
    })
    setRecipes(recipesCopy);
    ApiManager.rateRecipe(id, score);
  }

  return (
    <Context.Provider value={{ recipes, getRecipe, rate }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <RecipeOverview />
            </Route>
            <Route path="/recipe/:id">
              <RecipeDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
};

export default App;
