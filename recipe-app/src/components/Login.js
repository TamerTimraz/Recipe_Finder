import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/users/login", {
                username: username,
                password: password
            });

            if(response.data === "Login successful"){
                // Redirect to main application
                setMessage("Login Successful!");
            } else {
                setMessage(response.data);
            }

        } catch(error){
            setMessage("Failed to login. Please try again later.");
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                <button type="submit">Login</button>
            </form>
            <button onClick={(e) => {navigate('/register')}}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;