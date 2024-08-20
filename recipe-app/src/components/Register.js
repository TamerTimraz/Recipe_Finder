import React, { useState } from 'react';
import axios from 'axios';

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(username.length < 3){
            setMessage("Username must be at least 3 characters long.");
            return;
        }

        if(password.length < 8){
            setMessage("Password must be at least 8 characters long.")
        }

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username: username,
                password: password
            });
            setMessage('User registered successfully!');
        } catch(error){
            setMessage('Failed to register user.');
        }
    };

    return(
        <div>
            <h2>Register Page</h2>
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
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;