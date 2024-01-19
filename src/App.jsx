import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </>
    );
}

export default App;
