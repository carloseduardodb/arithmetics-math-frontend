import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Apresentation from "../pages/Apresentation";
import Check from "../pages/Check";
import Game from "../pages/Game";
import Rooms from "../pages/Rooms";
import WinOrLooser from "../pages/WinOrLooser";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Apresentation} />
      <Route path="/rooms" exact component={Rooms} />
      <Route path="/check" exact component={Check} />
      <Route path="/game" exact component={Game} />
      <Route path="/finish" exact component={WinOrLooser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
