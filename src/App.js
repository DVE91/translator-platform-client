import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import TranslatorLoginPage from "./pages/Authentication/TranslatorLoginPage";
import LoginPage from "./pages/Authentication/LoginPage";
import SignUpPage from "./pages/Authentication/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import TranslationPage from "./pages/TranslationPage";
import TranslatorSignUpPage from "./pages/Authentication/TranslatorSignUpPage";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/order" component={OrderPage} />
          <Route
            exact
            path="/login/translator"
            component={TranslatorLoginPage}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path="/signup/translator"
            component={TranslatorSignUpPage}
          />
          <Route exact path="/signup" component={SignUpPage} />

          <Route path="/dashboard/jobs/:id" component={TranslationPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
