import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";

// LLISTAT DE NAUS (Crida a la API)
export const ShipContext = createContext();

export const ShipContextProvider = (props) => {
  const fetchFunction = () => {
    return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
  };
  const [Ships, setShips] = useState([]);

  useEffect(() => {
    fetchFunction()
      .then((res) => {
        setShips(res.results);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <ShipContext.Provider value={Ships}>
      <App />
    </ShipContext.Provider>
  );
};