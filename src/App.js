import React from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as LoadableRoutes from "./routes";
import "./App.scss";

const App = () => {
  const { UserDashBoard, NotFound} = LoadableRoutes;

  const history = createBrowserHistory();

  return (
    <main className="main">
      <BrowserRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/user" />
          <Route path="/user" component={UserDashBoard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
