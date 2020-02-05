import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Drinks from "./components/drinks/Drinks";
import Drink from "./components/drink/Drink";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  login = userName => this.setState({ userName });
  logout = () => this.setState({ userName: "" });

  render() {
    return (
      <BrowserRouter>
        <Route path="/login">
          <Login login={this.login} />
        </Route>
        <Route path="/logout">
          <Logout logout={this.logout} />
        </Route>
        <Header userName={this.state.userName} />
        <Route path="/filters/:type">
          <Filters />
        </Route>
        <Switch>
          <Route path="/drinks/detail/:id">
            <Drink />
          </Route>
          <Route path="/drinks/:filter/:value">
            <Drinks />
          </Route>
        </Switch>
        <Route path="/" exact>
          <Home userName={this.state.userName} />
        </Route>
      </BrowserRouter>
    );
  }
}
