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
# GUARDAT SHIPLIST

// Rutes
import { Link } from "react-router-dom";
// Estils / Imatges
import "../index.css";
import { BoxStarShips } from "../styles/Styled";
import logo from "../assets/logo.png";
// Hooks
import React, { useContext, useState, useEffect } from "react";
// Context/Components
import { ShipContext } from "../context/ShipContext";
import { InfoShip } from "../components/InfoShip";

export function ShipList() {
  // CONTEXT
  const Ship = useContext(ShipContext);

  ///// INTERACTIU:
  // STATES
  const [currentShip, setCurrentShip] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  // Canvia l'estat que mostra el component quan es clica a un item de la llista
  useEffect(() => {
    setShowInfo(!showInfo);
  }, [currentShip]);

  // Canvia el nom perquè no permet que tigui el mateix al fer el canvi d'estat
  const saveName = (shipName) => {
    setCurrentShip(shipName);
    console.log("saveName", shipName);
  };
  /////FI D'INTERACTIU

  return (
    <>
      <img className="logo" src={logo} alt="logo de star wars" />

      {Ship.map((ship) => (
        // Mostra el nom i el model de la nau.
        // Al clicar guarda el nom de la nau amb la funció ChangeName
        <Link to={"/InfoShip/" + ship.name}>
          <BoxStarShips onClick={() => saveName(ship.name)} key={ship.name}>
            <p className="starshipName"> {ship.name.toUpperCase()} </p>
            <p className="starshipModel"> {ship.model} </p>
          </BoxStarShips>
        </Link>

        // Quan cliqui a una nau (showInfo serà true) i s'obrirà la fitxa d'aquesta nau (perquè li passo el nom per props al component).
      ))}
    </>
  );
}


# GUARDAT INFOSHIP

// IMPORTS
import React, { useContext } from "react";
import { TextPrimary, TextSecondary } from "../styles/Styled";
/* import { ImageShip } from "../styles/Styled"; */
import { ShipContext } from "../context/ShipContext";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.shipName;
}

export const InfoShip = () => {
  const shipName = useLoaderData();


  const Ship = useContext(ShipContext);
  console.log("ship", Ship);

  /* const currentNameShip = ship.name; */
  /*   const id = Ship.map((e) => e.url.slice(32, -1));
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
 */
  return (
    <>

      <h3>{ship.name}</h3>

      {/*   <ImageShip>{`https://starwars-visualguide.com/assets/img/starships/${ship.url.slice(32, -1)}.jpg`}</ImageShip>
        <ImageShip>{`https://starwars-visualguide.com/assets/img/starships/${numUrlShip}.jpg`}</ImageShip> */}

      <TextPrimary>
        <p>Model: {ship.model}</p>
        <p>Starship class: {ship.starship_class}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>cost: {ship.cost}</p>
      </TextPrimary>

      <TextSecondary>
        <p>Crew: {ship.crew}</p>
        <p>Passengers: {ship.passengers}</p>
        <p>Cargo capacity: {ship.cargo_capacity}</p>
        <p>Consumables: {ship.consumables}</p>
        <p>Length: {ship.length}</p>
        <p>Maximum atmosphering speed: {ship.max_atmosphering_speed}</p>
        <p>Hyperdrive rating: {ship.hyperdrive_rating}</p>
        <p>Maximum speed in real space: {ship.MGLT + "MGLT"}</p>
      </TextSecondary>
    </>
  );
};


# GUARDAT RUTES
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShipList } from "../components/ShipList";
import { InfoShip } from "../components/InfoShip";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<ShipList />} />
      <Route path="/InfoShip/:shipName" element={<InfoShip />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

# GUARDAT SHIPCONTEXT
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