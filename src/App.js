import logo from "./logo.svg";
import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button, Input } from "./Components/Button.style";
import Test from "./Test";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card />
      <Button />
      <Test />
    </div>
  );
}

export default App;
