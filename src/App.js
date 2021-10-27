import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home"
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/appointments">
          <Appointment></Appointment>
        </Route>

        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
