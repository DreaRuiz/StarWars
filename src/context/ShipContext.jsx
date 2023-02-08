import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";
import { Button } from '../styles/Styled'
/* import { ButtonMore } from "../components/ButtonMore"; */

// LLISTAT DE NAUS (Crida a la API)
export const ShipContext = createContext();

export const ShipContextProvider = (props) => {
  const fetchFunction = () => {
    return fetch(`https://swapi.dev/api/starships/?page=${page}`).then((res) =>
      res.json()
    );
  };
  const [Ships, setShips] = useState([]);
  const [page, setPage] = useState(1);

  function sumPage() {
    fetchFunction().then(() => {
      setPage(page + 1);
    });
  }

  useEffect(() => {
    fetchFunction()
      .then((res) => {
        setShips(res.results);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, [page]);

  return (
    <ShipContext.Provider value={Ships}>
      <App />
      <Button onClick={() => sumPage()}> More ships </Button>
    </ShipContext.Provider>
  );
};
