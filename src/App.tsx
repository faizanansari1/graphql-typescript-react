import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MessionContainer from "./components/Mession";
import MessionInfoContainer from "./components/MessionInfo";
import MessionList from "./components/Mession/MessionList";

function App() {
  const [id, setId] = useState(15);
  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <MessionContainer />
      <MessionInfoContainer id={id} />
    </div>
  );
}

export default App;
