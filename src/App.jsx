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
