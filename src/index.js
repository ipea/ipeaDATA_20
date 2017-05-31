import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import App from "./components/App";
import "./css/index.css";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Redirect from="/" to="/macroeconomico" />
          <Route exact path="/" component={App} />
          <Route exact path="/:id/:submenu/:submenu2" component={App} />
          <Route exact path="/:id/:submenu" component={App} />
          <Route exact path="/:id" component={App} />
          
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));