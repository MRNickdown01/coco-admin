import Card from "./Components/HomePageBrandCard/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBrand from "./Components/AddBrands/AddBrand";
import TransactionList from "./Components/TransactionViewList/TransactionList";
import BrandViewList from "./Components/BrandViewLists/BrandViewList";
import Transaction from "./Components/AddTransactions/Transaction";
// import Dashboard from "./Components/Dashboard/Dashboard";
import CustomerList from "./Components/CustomerViewList/CustomerList";
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
          <Route path="/addbrand" element={<AddBrand />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/brandviewlist" element={<BrandViewList />} />
          <Route path="/transactionlist" element={<TransactionList />} />
          <Route path="/customerlist" element={<CustomerList />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/emaillink" element={<EmailLink />} />
          <Route path="/completeprofile" element={<CompleteProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
