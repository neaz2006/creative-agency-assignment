import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import LoginFrom from "./Components/LoginFrom/LoginFrom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Order from "./Components/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/LoginFrom">
              <LoginFrom></LoginFrom>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
      </UserContext.Provider>
  );
}

export default App;
