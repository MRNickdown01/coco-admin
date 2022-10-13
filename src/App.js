import logo from "./logo.svg";
import Card from "./Card";
import { Route, Routes } from "react-router";
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
