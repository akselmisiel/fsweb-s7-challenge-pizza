import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import { Switch } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/options">
          <Header />
        </Route>
        <Route path="/order">
          <Header />
          <OrderForm />
        </Route>
        <Route path="/confirm">
          <Header />
          <ConfirmPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);
