import React, { useState, useEffect } from 'react';
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
import { useNavigate, useLocation } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state && location.state.recipes) {
            setRecipes(location.state.recipes);
        }
    }, [location.state]);

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/login")
    };

    const handleRecipeClick = (recipe) => {
        navigate(`/recipes/${recipe.id}`, { state: { recipes } });
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