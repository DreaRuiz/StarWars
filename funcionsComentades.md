# EXERCICI 1
### ContextStartships
```jsx
// IMPORTO HOOKS
import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";

// El que surti de la funció CreateContext es guardarà a SarsContext
export const StarsContext = createContext();

// Creo el StarsContextProvider
export const StarsContextProvider = (props) => {
  const fetchFunction = () => {
    return fetch("https://swapi.dev/api/starships/").then((res) => res.json()); // Crido a la API
  };
  const [startShips, setStartShips] = useState([]); // Creo l'estat (que serà l'array de dades portat de la API)

  useEffect(() => { // Quan s'inicii la pàgina es crida a la funció fetchFunction (que crida a la API) i d'allà agafa el resultat si el troba i si no fa un console.error
    fetchFunction()
      .then((res) => {
        setStartShips(res.results);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return ( // Retorna el component StarsContext.Provider
    <StarsContext.Provider value={startShips}>
      <App />
    </StarsContext.Provider>
  );
};
```

### App
```jsx
// Importo el que cal (hooks, estils, css i logo)
import React, { useContext } from "react";
import { StarsContext } from "./context/contextStarships";
import "./index.css";
import { BoxStarShips } from "./Styled";
import logo from "./assets/logo.png";

function App() {
  const StarShips = useContext(StarsContext);

  return (
    <div>
      <img className="logo" src={logo} alt="logo de star wars" />

      {StarShips.map((startShip) => (
        <BoxStarShips key={startShip.name}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              className="starshipName"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              {startShip.name.toUpperCase()}
            </p>
            <p
              className="starshipModel"
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "-14px",
                marginLeft: "0px",
              }}
            >
              {startShip.model}
            </p>
          </div>
        </BoxStarShips>
      ))}
    </div>
  );
}

export default App;
```