import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //Login code
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>

        <button
          onClick={() => history.push("/register")}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
