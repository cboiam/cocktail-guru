import React from "react";
import Header from "./header/Header";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header login={this.props.userName} />
      </React.Fragment>
    );
  }
}
