import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        <Route path="/products/:id" element={<ProductsPage />} />
        {/* : Doppelpunkt bedeutet , hier kommt später irgendein Wert, also ist ein Platzhalter */}
        {/* <Route path="/cart" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
