import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Breadcrumbs/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
