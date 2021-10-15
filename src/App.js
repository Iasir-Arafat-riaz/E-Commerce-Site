import "./App.css";

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./components/Error/Error";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
