// React
import { useState } from "react";

// Components
import Card from "./components/Card";
import Circle from "./components/Circle";

// CSS
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      App
      <Card />
      <Circle />
    </div>
  );
}

export default App;
