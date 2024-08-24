import React from 'react';
import RecipeSearch from "./RecipeSearch";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Recipe App</h1>
            <p>Here you can search for, view, and save your favorite recipes!</p>
            <RecipeSearch />
        </div>
    );
};

export default HomePage;