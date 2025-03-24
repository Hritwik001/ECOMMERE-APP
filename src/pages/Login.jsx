import React, { useState } from "react";
import { useAuth } from "../AuthContext"; // Import AuthContext
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
    const { user, login } = useAuth(); // Get user & login function from AuthContext
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // 🔹 Redirect logged-in users to home
    if (user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password); // Call login function
            navigate("/"); // Redirect to homepage after login
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

