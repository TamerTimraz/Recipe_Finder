import React, { useState } from 'react';
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/login")
    };

    const handleRecipeClick = (recipe) => {
        navigate(`/recipes/${recipe.id}`);
    };

    return (
        <div style={{textAlign: "center"}}>
            <header className="header">
                <button className="logout-btn" onClick={handleLogOut}>Log Out</button>
            </header>
            <h1>Welcome to the Recipe App</h1>
            <p>Here you can search for, view, and save your favorite recipes!</p>
            <RecipeSearch setRecipes={setRecipes} />
            <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </div>

    );
};

export default HomePage;