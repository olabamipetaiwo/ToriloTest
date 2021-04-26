import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import asyncComponent from "../../components/AsyncLoader";

const UserLayout = asyncComponent(() =>
  import("../../containers/Dashboard/user").then((module) => module.default)
);

const Overview = asyncComponent(() =>
  import("./Overview").then((module) => module.default)
);

const UserDashBoard = () => {
  return (
    <UserLayout>
      <Switch>
        <Redirect exact from="/user" to="/user/overview" />
        <Route exact path="/user/overview" component={Overview} />
      </Switch>
    </UserLayout>
  );
};

export default UserDashBoard;
