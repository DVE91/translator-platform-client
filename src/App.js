import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import TranslatorLoginPage from "./pages/TranslatorLoginPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import TranslatorSignUpPage from "./pages/TranslatorSignUpPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/login/translator" component={TranslatorLoginPage} />
        <Route
          exact
          path="/signup/translator"
          component={TranslatorSignUpPage}
        />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
