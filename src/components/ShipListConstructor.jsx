import { Link } from "react-router-dom";
import "../index.css";
import { BoxStarShips } from "../styles/Styled";
import React, { useContext, useState, useEffect } from "react";
import { ShipContext } from "../context/ShipContext";

export function ShipListConstructor() {
  // CONTEXT
  const Ship = useContext(ShipContext);

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

  return (
    <>
      {Ship.map((ship) => (
        // Mostra el nom i el model de la nau.
        // Al clicar guarda el nom de la nau amb la funció saveName
        <Link to={"/CardShip/" + ship.name} key={ship.name} >
          <BoxStarShips onClick={() => saveName(ship.name)} key={ship.name}>
            <ul className="starshipName"> {ship.name.toUpperCase()} </ul>
     
            <ul className="starshipModel"> {ship.model} </ul>
          </BoxStarShips>
        </Link>
      ))}
    </>
  );
}
