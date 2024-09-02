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

    // Standardize instructions
    const standardizedInstruction = () => {
        if(Array.isArray(details.analyzedInstructions) && details.analyzedInstructions.length > 0){
            // Use the 'analyzedInstructions' array if available
            return details.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
            ));
        } else {
            // Fall back to the 'instructions' string, splitting by period or new line
            const instructionsArray = details.instructions.split(/(?:\.\s|\n)/).filter(step => step.trim() !== '');
            return instructionsArray.map((step, index) => (
                <li key={index}>{step}</li>
            ));
        }
    };

    return (
        <div className="recipe-details-container">
            <button onClick={onClose}>Close</button>
            <h2 className="recipe-title">{details.title}</h2>
            <img src={details.image} alt={details.title}/>

            <div className="ingredients">
                <h3 className="section-header">Ingredients:</h3>
                <ul className="ingredients-list">
                    {details.extendedIngredients && details.extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
            </div>

            <div className="instructions">
                <h3 className="section-header">Instructions:</h3>
                <ol className="instructions-list">
                    {standardizedInstruction()}
                </ol>
            </div>

            {error && <p>{error}</p>}
        </div>
    );
};

export default RecipeDetails;