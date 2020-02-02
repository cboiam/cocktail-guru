import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Home from "./home/Home";
import Header from "./header/Header";

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
        <Route path="/">
          <Header userName={this.state.userName} />
          <Home userName={this.state.userName} />
        </Route>
      </BrowserRouter>
    );
  }
}
