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
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else {
                setMessage(response.data);
            }

        } catch(error){
            setMessage("Failed to login. Please try again later.");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
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
                <button type="button" onClick={(e) => {
                    navigate('/register')
                }}>Create Account
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Login;