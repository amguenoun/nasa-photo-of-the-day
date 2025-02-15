import React from "react";
import "./App.css";
import NasaParent from "./components/NasaParent";
import MenuBasic from './components/NavMenu';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <MenuBasic />
      <NasaParent />
      <Footer />
    </div>
  );
}

export default App;
