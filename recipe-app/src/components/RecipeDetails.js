import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetails = ({ recipe, onClose }) => {
    const [details, setDetails] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/recipes/${recipe.id}/information`);
                setDetails(response.data);
            } catch (err) {
                setError("Failed to display recipe information.");
            }
        };

        fetchRecipeDetails();
    }, [recipe.id]);

    if(!details) return <p>Loading...</p>

    return (
        <div className="recipe-details">
            <button onClick={onClose}>Close</button>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title}/>
            <h3>Ingredients:</h3>
            <ul>
                {details.extendedIngredients && details.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p dangerouslySetInnerHTML={{ __html: details.instructions}}></p>

            {error && <p>{error}</p>}
        </div>
    );
};

export default RecipeDetails;