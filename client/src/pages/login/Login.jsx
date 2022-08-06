import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthCont } from "../../context/AuthCont";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    passward: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthCont);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response.data,
      });
    }
  };

  return (
    <div className="loginC">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="username inputli"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="password inputli"
        />
        <button disabled={loading} className="loginBtn" onClick={handleLogin}>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}

export default Login;
