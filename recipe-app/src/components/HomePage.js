import React, { useState } from 'react';
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/login")
    };

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleCloseDetails = () => {
        setSelectedRecipe(null);
    };


    return (
        <div style={{textAlign: "center"}}>
            <header className="header">
                <button className="logout-btn" onClick={handleLogOut}>Log Out</button>
            </header>
            <h1>Welcome to the Recipe App</h1>
            <p>Here you can search for, view, and save your favorite recipes!</p>
            <RecipeSearch setRecipes={setRecipes} />
            {selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
            ) : (
                <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
            )}
        </div>

    );
};

export default HomePage;