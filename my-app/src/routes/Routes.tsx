import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/home/index";
import ProductPage from "../pages/productPage";
import Cart from "../pages/cartPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/productPage/:idProduct" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Switch>
    </Router>
  );
}

export default Routes;
