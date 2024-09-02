import React, { useState } from "react";
import axios from "axios";
import './Auth.css';

function Registration({ setActiveComponent }) {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        contact: '',
        password: '',
        adharnumber: '',
        type: ''
    });

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const url = registerData.type === 'user' ?
            'http://localhost:4000/user/signup' :
            'http://localhost:4000/owner/signup';

        try {
            const response = await axios.post(url, registerData);
            console.log(response.data);
            alert('Registration successful!');
            setActiveComponent('login'); // Switch to login after registration
        } catch (err) {
            console.error(err);
            alert('Registration failed.');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={registerData.contact}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    type="text"
                    name="adharnumber"
                    placeholder="Adhar Number"
                    value={registerData.adharnumber}
                    onChange={handleRegisterChange}
                    required
                />
                <select
                    name="type"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    value={registerData.type}
                    onChange={handleRegisterChange}
                    required
                >
                    <option value="" disabled>Select type</option>
                    <option value="user">User</option>
                    <option value="admin">Landlord</option>
                </select>

                <button type="submit" className="auth-button">Sign Up</button>
                <hr />
                <button type="button" className="switch-link" onClick={() => setActiveComponent('login')}>
                    Already have an account? Log in
                </button>
            </form>
        </div>
    );
}

export default Registration;
