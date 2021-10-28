import "./App.css";

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./components/Error/Error";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";



function App() {
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/shipping">
            <Shipping></Shipping>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
