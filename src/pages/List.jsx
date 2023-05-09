import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ShipListConstructor } from "../components/ShipListConstructor";
import "../index.css";
export function List() {
  return (
    <>
      <Header />
      <ShipListConstructor />
      <Footer />
    </>
  );
}
