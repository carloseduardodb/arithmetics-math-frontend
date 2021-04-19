import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Name from "../pages/Name";

import Check from "../pages/Check";
import Game from "../pages/Game";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import WinOrLooser from "../pages/WinOrLooser";
import Battle from "../pages/Battle";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/duel" component={Rooms} />
        <Route path="/check" component={Check} />
        <Route path="/game" component={Game} />
        <Route path="/finish" component={WinOrLooser} />
        <Route path="/your-name" exact component={Name} />
        <Route path="/battle" exact component={Battle} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
