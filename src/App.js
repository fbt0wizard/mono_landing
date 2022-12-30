import "./App.css";
import React, { useState } from "react";
import Loader from "./components/Loader";
import Layout from "./Layout";


function App() {
  const [ready, setReady] = useState(false)
  const animationComplete = () => {
    setTimeout(function() {
      setReady(true)
    }, 4000 )
  } 
  return (
    <div className="App">
      {ready ? <Layout /> : <Loader animationComplete={animationComplete} />}
    </div>
  );
}

export default App;
