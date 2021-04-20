import React from "react";
import "./App.css";
import CheckConnection from "./components/CheckConnection";
import Routes from "./routes";

function App() {
  return (
    <>
      <CheckConnection />
      <Routes />
    </>
  );
}

export default App;
