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
