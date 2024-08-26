import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8080/api/recipes/search', {
                params: { query }
            });
            setRecipes(response.data.results);
        } catch (err) {
            setError("Failed to fetch recipes. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>
            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id} >
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeSearch;