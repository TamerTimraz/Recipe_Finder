import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(username.length < 3){
            setMessage("Username must be at least 3 characters long.");
            return;
        }

        if(password.length < 8){
            setMessage("Password must be at least 8 characters long.")
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username: username,
                password: password
            });

            if(response.data === "User registered successfully!") {
                setMessage(response.data);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setMessage(response.data);
            }
        } catch(error){
            setMessage('Failed to register user.');
        }
    };

    return(
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
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
                <button type="submit">Register</button>
                <button onClick={(e) => {
                    navigate('/login')
                }}>Back to Login
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Register;