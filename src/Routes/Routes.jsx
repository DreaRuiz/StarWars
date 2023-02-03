import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { InfoShip } from "../pages/InfoShip";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/CardShip/:shipName" element={<InfoShip />} />
    </Routes>
  </BrowserRouter>
);

export default Router;