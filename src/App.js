import React, { Component } from 'react'
import HomePage from './component/homePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Whether from "./component/Whether";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/Whether' component={Whether} />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
