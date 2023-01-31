import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";

export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  const fetchFunction = () => {
    return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
  };
  const [startShips, setStartShips] = useState([]);

  useEffect(() => {
    fetchFunction()
      .then((res) => {
        setStartShips(res.results);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <StarsContext.Provider value={startShips}>
      <App />
    </StarsContext.Provider>
  );
};
