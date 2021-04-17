import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProfileDetail from "./pages/ProfileDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/profileDetail/:id" component={ProfileDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
