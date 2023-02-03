// IMPORTS
import React, { useContext } from "react";
import {
  TextPrimary,
  TextSecondary,
  BoxCardShip,
} from "../styles/Styled";
import { ShipContext } from "../context/ShipContext";
import { useParams } from "react-router-dom";

export const CardShip = () => {
  // PORTA LES DADES DEL CONTEXT
  const Ships = useContext(ShipContext);

  // GUARDA EL NOM DE LA NAU CLICADA
  const currentShipName = useParams().shipName;

  // TROBA LA NAU A MOSTRAR (PEL EL NOM)
  const currentShip = Ships.find((ship) => currentShipName === ship.name);

  // EXTREUREU L'ID PER MOSTRAR LA IMATGE
  const id = currentShip.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <>
      <BoxCardShip>
        <h3>{currentShip.name.toUpperCase()}</h3>

        <img src={image} alt="No s'ha pogut mostrar la imatge de la nau" />

        <TextPrimary>
          <p>MODEL: {currentShip.model}</p>
          <p>STARSHIP CLASS: {currentShip.starship_class}</p>
          <p>MANUFACTURER: {currentShip.manufacturer}</p>
          <p>COST: {currentShip.cost}</p>
        </TextPrimary>

        <TextSecondary>
          <p>CREW: {currentShip.crew}</p>
          <p>PASSANGERS: {currentShip.passengers}</p>
          <p>CARGP CAPACITY: {currentShip.cargo_capacity}</p>
          <p>CONSUMABLES: {currentShip.consumables}</p>
          <p>LENGTH: {currentShip.length}</p>
          <p>
            MAXIMUM ATMOSPHERING SPEED: {currentShip.max_atmosphering_speed}
          </p>
          <p>HYPERDRIVE RATING: {currentShip.hyperdrive_rating}</p>
          <p>MAXIMUM SPEED IN REAL SPACE: {currentShip.MGLT + "MGLT"}</p>
        </TextSecondary>
      </BoxCardShip>
    </>
  );
};
