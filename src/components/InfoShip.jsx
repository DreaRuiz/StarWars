// IMPORTS
import React, { useContext } from "react";
import { TextPrimary, TextSecondary, ImageShip } from "../styles/Styled";
/* import { ImageShip } from "../styles/Styled"; */
import { ShipContext } from "../context/ShipContext";
import { useParams } from "react-router-dom";

/* export async function loader({ params }) {
  console.log("params", params());
  return params.shipName;å
} */

export const InfoShip = (ship) => {
  // PORTA LES DADES DEL CONTEXT
  const Ships = useContext(ShipContext);

  // GUARDA EL NOM DE LA NAU CLICADA
  const currentShipName = useParams().shipName;

  // TROBA LA NAU A MOSTRAR (PEL EL NOM)

  const currentShip = Ships.find((ship) => currentShipName === ship.name);
  console.log("currentship", currentShip);

  // EXTREUREU L'ID PER MOSTRAR LA IMATGE

  const id = currentShip.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  console.log("id", id);

  return (
    <>
      <h3>{currentShip.name}</h3>

      <img src={image} alt="ship image" />

      <TextPrimary>
        <p>Model: {currentShip.model}</p>
        <p>Starship class: {currentShip.starship_class}</p>
        <p>Manufacturer: {currentShip.manufacturer}</p>
        <p>cost: {currentShip.cost}</p>
      </TextPrimary>

      <TextSecondary>
        <p>Crew: {currentShip.crew}</p>
        <p>Passengers: {currentShip.passengers}</p>
        <p>Cargo capacity: {currentShip.cargo_capacity}</p>
        <p>Consumables: {currentShip.consumables}</p>
        <p>Length: {currentShip.length}</p>
        <p>Maximum atmosphering speed: {currentShip.max_atmosphering_speed}</p>
        <p>Hyperdrive rating: {currentShip.hyperdrive_rating}</p>
        <p>Maximum speed in real space: {currentShip.MGLT + "MGLT"}</p>
      </TextSecondary>
    </>
  );
};
