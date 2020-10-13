import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./App.css";
import "./assets/css/style.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Salud from "./components/Salud";
import Covid19 from "./components/Covid19";
import Vulnerabilidad from "./components/Vulnerabilidad";
import Transporte from"./components/Transporte";
import Carne from "./components/Carne";
import Calendario from "./components/calendario";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/carne">
            <Carne />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/salud">
            <Salud />
          </Route>
          <Route path="/calendario">
            <Calendario />
          </Route>
          <Route path="/coivd19Form">
            <Covid19 />
          </Route>
          <Route path="/Transporte">
            <Transporte />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/vulnerabilidad">
            <Vulnerabilidad />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
