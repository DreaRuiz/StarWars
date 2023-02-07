import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { List } from "../pages/List";
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { InfoShip } from "../pages/InfoShip";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/List/" element={<List />} />
      <Route path="/CardShip/:shipName" element={<InfoShip />} />
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />

    </Routes>
  </BrowserRouter>
);

export default Router;