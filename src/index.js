import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import App from "./components/App";
import Metadados from "./components/Metadados";
import Equipe from "./components/Equipe";
import "./css/index.css";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Redirect from="/" to="/macroeconomico" />
          <Route exact path="/" component={App} />
          <Route path="/:id" component={App} />
          <Route path="/:id/:submenu" component={App} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));