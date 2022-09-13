import "./App.css";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./Context/CartContext";
import TerminaCompra from "./pages/TerminaCompra/TerminaCompra";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoria" element={<Category />} />
            <Route path="/:categoria/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/finalcompra" element={<TerminaCompra />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
