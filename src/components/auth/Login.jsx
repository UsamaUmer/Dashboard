import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {login} = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const result = login(email, password);

    if(!result.success){
      setError("Invalid Credentionals");
      return;
    }
    if(result.role === 'admin'){
      navigate('/dashboard');
    }
    if(result.role === 'user'){
      navigate('/users')
    }
  }




  // const storedUser = [
  //   { email: "usama@gmail.com", password: "usama" },
  //   { email: "haseeb@gmail.com", password: "haseeb" },
  //   { email: "nazim@gmail.com", password: "nazim" },
  // ];        // For better option Move To: fake serivce api, Context, or api later
  // //   const [inputHandler, handleInputChange] = useState();
  // const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  // const [isAuthenticated, setIsAuthenticated] = useState(false);    //// AuthContext (global) after all component created
  // const [errorMessage, setErrorMessage] = useState("");

  // function handleInputChange(e) {
  //   setLoginForm((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value }; // it destructure loginForm which store in prev now, it will be like {email, passwor}
  //   });
  // }

  // function handleLoginSubmit(e) {
  //   e.preventDefault();
  //   if (!loginForm.email.trim() || !loginForm.password.trim()) {
  //     setErrorMessage("Email or password should not be empty");
  //   } else {
  //     const user = storedUser.find(
  //       (valueStoredUser) =>
  //         valueStoredUser.email === loginForm.email &&
  //         valueStoredUser.password === loginForm.password,
  //     );

  //     if (user) {
  //       setIsAuthenticated(true);
  //       setErrorMessage(`Welcome ${user.email}`);
  //     } else {
  //       setErrorMessage("Username or Password is incorrect");
  //     }
  //   }
  // }

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-shield-icon">✔</div>
          <h2 className="admin-title">Admin Dashboard</h2>
        </div>

        <h3 className="admin-welcome">Welcome Back!</h3>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter Your Email"
              name="email"
              id="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Enter Password"
              name="password"
              id="password"
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              Remember Me
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="forgot-password">Forgot Password?</p>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
