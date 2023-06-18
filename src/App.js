import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BaseLayout from "./layout/BaseLayout";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="product/:productId" element={<Product />} />
            {/* 
            <Route path="/products" element={<Pages />}>
              <Route path="/setting"></Route>
              <Route path="/privacy-policy"></Route>
            </Route>  */}
          </Route>
          <Route path="not-need" element={<div>not needed</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
