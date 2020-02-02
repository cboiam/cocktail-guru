import "./Home.css";
import React from "react";
import Filters from "./filters/Filters";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="col-md-6">
          <Filters />
        </div>
      </div>
    );
  }
}
