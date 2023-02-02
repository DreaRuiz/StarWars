import { Link } from "react-router-dom";
import "../index.css";
import { BoxStarShips } from "../styles/Styled";
import logo from "../assets/logo.png";
import React, { useContext, useState, useEffect } from "react";
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
  };
  /////FI D'INTERACTIU

  return (
    <>
      <img className="logo" src={logo} alt="logo de star wars" />

      {Ship.map((ship) => (
        // Mostra el nom i el model de la nau.
        // Al clicar guarda el nom de la nau amb la funció saveName
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
