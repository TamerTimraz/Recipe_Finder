import React from 'react';
import RecipeSearch from "./RecipeSearch";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();

        navigate("/login")
    }


    return (
        <div style={{textAlign: "center"}}>
            <header className="header">
                <button className="logout-btn" onClick="handleLogOut">Log Out</button>
            </header>
            <h1>Welcome to the Recipe App</h1>
            <p>Here you can search for, view, and save your favorite recipes!</p>
            <RecipeSearch/>
        </div>

    );
};

export default HomePage;