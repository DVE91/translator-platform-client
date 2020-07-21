import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NewOrderPage from "./pages/Order/NewOrderPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order/step1" component={NewOrderPage} />
      </Switch>
    </div>
  );
}

export default App;
