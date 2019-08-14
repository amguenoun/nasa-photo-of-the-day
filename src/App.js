import React from "react";
import "./App.css";
import NasaParent from "./components/NasaParent"
import AsteroidParent from "./components/AsteroidParent"
function App() {
  return (
    <div className="App">
      <NasaParent />
      <AsteroidParent />
    </div>
  );
}

export default App;
