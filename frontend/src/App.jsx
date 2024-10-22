import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
