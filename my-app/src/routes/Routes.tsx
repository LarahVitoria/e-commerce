import { BrowserRouter as Router, Routes as Switch, Route, useParams } from "react-router-dom";
import Home from "../pages/home/index";
import ProductPage from "../pages/productPage";

function Routes() {
  let  { idProduct }  =  useParams ( ) ; 
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/productPage/:idProduct" element={<ProductPage />} />
      </Switch>
    </Router>
  );
}

export default Routes;
