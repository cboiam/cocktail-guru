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

const baseUrl = process.env.REACT_APP_BASE_URL ?? "";

export default class App extends Component {
  constructor(props) {
    super(props);

    const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, "$1");

    this.state = {
      userName: user
    };
  }

  login = userName => {
    document.cookie = `user=${userName}`;
    this.setState({ userName });
  }

  logout = () => {
    document.cookie = `user=; expires=${new Date().toString()}`;
    this.setState({ userName: "" });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path={`${baseUrl}/login`}>
          <Login login={this.login} />
        </Route>
        <Route path={`${baseUrl}/logout`}>
          <Logout logout={this.logout} />
        </Route>
        <Header userName={this.state.userName} />
        <Route path={`${baseUrl}/filters/:type`}>
          <Filters />
        </Route>
        <Switch>
          <Route path={`${baseUrl}/drinks/detail/:id`}>
            <Drink />
          </Route>
          <Route path={`${baseUrl}/drinks/:filter/:value`}>
            <Drinks />
          </Route>
        </Switch>
        <Route path={`${baseUrl}/`} exact>
          <Home userName={this.state.userName} />
        </Route>
      </BrowserRouter>
    );
  }
}
