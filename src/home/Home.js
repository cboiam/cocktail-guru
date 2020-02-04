import "./Home.css";
import React from "react";
import Filters from "./filters/Filters";
import Search from "../shared/search/Search";
import Random from "./random/Random";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-content row">
          <div className="home-filters col-lg-5">
            <Filters />
          </div>
          <div className="home-search col-lg-7">
            <Search />
            <Random />
          </div>
        </div>
      </div>
    );
  }
}
