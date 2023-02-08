import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../styles/Styled";
// Components de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const Login = () => {
  const navigate = useNavigate();
  // ESTATS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid email or password");
      });
  };

  return (
    <>
      <Header />
      <div>
        <h2>Enter your email adress</h2>
        <form>
          <div>
            <Input
              type="email"
              placeholder="Enter email"
              autoComplete="on"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter password"
              minLength="6"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" onClick={onLogin}>
            Log in
          </Button>
          <p>
            Don’t have an account yet?
            <Link  className="link" to="/register/"> Sign up </Link>
          </p>
        </form>
      </div>
      
      <Footer />
    </>
  );
};
