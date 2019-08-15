import React from "react";
import "./App.css";
import NasaParent from "./components/NasaParent";
import MenuBasic from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <MenuBasic />
      <NasaParent />
    </div>
  );
}

export default App;
