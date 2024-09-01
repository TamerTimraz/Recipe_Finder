import React from 'react';

const RecipeList = ({ recipes, onRecipeClick}) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id} onClick={() => onRecipeClick(recipe)}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;