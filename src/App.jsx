import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  login = userName => this.setState({ userName });

  render() {
    return (
      <BrowserRouter>
        <Route path="/login">
          <Login login={this.login} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
