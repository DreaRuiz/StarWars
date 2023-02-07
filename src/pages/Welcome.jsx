import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Welcome() {
  return (
    
    <div className="welcome">
      <Header />
      <h1>Welcome to starwars page</h1>
      <Footer/>
    </div>
  );
}
