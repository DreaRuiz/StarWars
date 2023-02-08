import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useNavigate, Link } from "react-router-dom";

// Components de Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { ref, set, onValue } from "firebase/database";

export function Register() {
  const navigate = useNavigate();
  // ESTATS
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  // CREACIÓ D'UN NOU USER & VALIDACIÓ / ERROR
  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
      })
      .catch((error) => {
        alert(error, "Enter a valid data");
      });
    // CREA LA RUTA
    navigate("/");

    //IMPORTA USER I MOSTRA PER CONSOLA
    let data = ref(db, "users/");
    onValue(data, (snapshot) => {
      data = snapshot.val();
      console.log(data);
    });

    return (
      <>
        <Header />

        <div>
          <h2>Create your account</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="First name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                minLength="6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={onSubmit}>
              Sign up
            </button>
            <p>
              Already have an account?
              <Link to="/login/"> Log in </Link>
            </p>
          </form>
        </div>

        <Footer />
      </>
    );
  };
}
