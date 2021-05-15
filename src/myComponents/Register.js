import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: address,
        });
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="register__container">
        <h1>Create Account</h1>
        <form>
          <h5>Your name</h5>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <h5>Address</h5>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
          />

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

          <p>
            We will send you a text to verify your phone.Message and Data rates
            may apply.
          </p>
          <button onClick={register} className="register__registerButton">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
