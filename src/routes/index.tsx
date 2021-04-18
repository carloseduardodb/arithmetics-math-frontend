import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Name from "../pages/Name";

import Check from "../pages/Check";
import Game from "../pages/Game";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import WinOrLooser from "../pages/WinOrLooser";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/battle" exact component={Name} />
      <Route path="/duel" component={Rooms} />
      <Route path="/check" component={Check} />
      <Route path="/game" component={Game} />
      <Route path="/finish" component={WinOrLooser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
