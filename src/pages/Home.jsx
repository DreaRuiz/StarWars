import React from "react";
import { Header } from "../components/Header";
import { ShipListConstructor } from "../components/ShipListConstructor";
import "../index.css";

export function Home() {
  return (
    <>
      <Header />
      <ShipListConstructor />
    </>
  );
}


