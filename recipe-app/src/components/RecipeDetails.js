import React, { useEffect, useState } from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/recipes/${id}/information`);
                setDetails(response.data);
            } catch (err) {
                setError("Failed to display recipe information.");
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if(!details) return;

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

    const handleBackToRecipeList = () => {
        navigate("/home", { state: { recipes: location.state.recipes } });
    }

    return (
        <div className="recipe-details-container">
            <button onClick={handleBackToRecipeList}>Back</button>
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