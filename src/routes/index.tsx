import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Apresentation from "../pages/Apresentation";
import Rooms from "../pages/Rooms";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Apresentation} />
      <Route path="/rooms" exact component={Rooms} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
