import React from "react";
import NavMenu from "./components/layout/NavMenu";
import Home from "./pages/Home"; // Correct path to Home component
import "./styles/layout/NavMenu.css";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
    </>
  );
}

export default App;




