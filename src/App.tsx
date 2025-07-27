import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import CategoriaPage from "./pages/CategoriaPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/item/:id" element={<Item />} />
          <Route path="/categoria/:nome" element={<CategoriaPage />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
