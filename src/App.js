import logo from "./logo.svg";
import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button, Input } from "./Components/Button.style";
import Test from "./Test";
import TransactionList from "./TransactionList";
import AddList from "./AddList";
import Transaction from "./Transaction";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import EmailLink from "./Components/AdminLogin/EmailLink";
import CompleteProfile from "./Components/AdminLogin/CompleteProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Card />
      <Button />
      <Test /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/test" element={<Test />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/viewlist" element={<AddList />} />
          <Route path="/transactionlist" element={<TransactionList />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emaillink" element={<EmailLink />} />
          <Route path="/completeprofile" element={<CompleteProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
