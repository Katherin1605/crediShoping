import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Views/Dashboard";
import Customers from "./Views/Customers";
import Products from "./Views/Products";
import Shopping from "./Views/Shopping";
import Sales from "./Views/Sales";
import Payments from "./Views/Payments";
import Admin from "./Views/Admin";
import Audit from "./Views/Audit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="sales" element={<Sales />} />
          <Route path="payments" element={<Payments />} />
          <Route path="admin" element={<Admin />} />
          <Route path="audit" element={<Audit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;