import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import RecipeDetails from "./components/RecipeDetails";

import "./styles.css";

function App(){
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
